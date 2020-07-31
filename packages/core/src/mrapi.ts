import 'reflect-metadata'
import pino from 'pino'
import fastify from 'fastify'
import { MultiTenant } from '@mrapi/multi-tenant'
import { Server, IncomingMessage, ServerResponse } from 'http'

import { getDBClients } from './db'
import { loadConfig } from './config'
import { createLogger } from './utils/logger'
import { bindExitEvent } from './utils/exit'
import { MrapiOptions, App, PrismaClient } from './types'

export class Mrapi {
  cwd = process.cwd()
  app: App
  prismaClient: PrismaClient
  multiTenant: MultiTenant<PrismaClient>
  callbacksAfterReady: Function[] = []

  constructor(public options?: MrapiOptions) {
    this.options = loadConfig(this.cwd, options)

    let logger
    const loggerOptions = this.options.server.options?.logger
    if (loggerOptions instanceof pino) {
      logger = loggerOptions
    } else {
      logger = createLogger(this.options.server.options?.logger)
    }
    delete this.options.server.options.logger
    this.app = fastify<Server, IncomingMessage, ServerResponse>({
      logger,
      ...this.options.server.options,
    })
  }

  async init() {
    if (this.options.database.client === 'prisma') {
      const { prismaClient, multiTenant } = await getDBClients(this.options)
      this.prismaClient = prismaClient
      this.multiTenant = multiTenant
      bindExitEvent(this.prismaClient || this.multiTenant)
    } else {
      throw new Error('mrapi only supports prisma currently')
    }

    await this.registerPlugins()
    await this.registerHooks()
  }

  async registerPlugins() {
    const plugins = Object.entries(this.options.plugins)

    for (const [key, val] of plugins) {
      if (val && !val.enable) {
        continue
      }
      try {
        if (key.startsWith('builtIn:')) {
          const name = key.split(':')[1]

          let plugin = require(`./plugins/${name}`)
          plugin = plugin.default || plugin
          const ret = await plugin(
            this.app,
            val.options,
            { prismaClient: this.prismaClient, multiTenant: this.multiTenant },
            this.cwd,
            this.options,
          )
          this.app.log.debug(`register plugin: ${key}`)
          if (
            ret?.callbackAfterReady &&
            typeof ret.callbackAfterReady === 'function'
          ) {
            this.callbacksAfterReady.push(ret.callbackAfterReady)
          }
        } else {
          const pluginPath = require.resolve(key)
          await this.app.register(require(pluginPath), val.options)
          this.app.log.debug(`register plugin: ${key}`)
        }
      } catch (err) {
        this.app.log.error(err)
      }
    }
  }

  registerHooks() {
    for (const [key, cb] of Object.entries(this.options.hooks)) {
      this.app.addHook(key as any, cb)
    }
  }

  async start() {
    await this.init()
    await this.app.ready().then(async () => {
      console.log(this.app.printRoutes())

      for (const fn of this.callbacksAfterReady) {
        await fn()
      }
    })
    const address = await this.app.listen(this.options.server.listen)
    return {
      app: this.app,
      address,
    }
  }

  async reload() {
    await this.close()
    await this.start()
  }

  async close() {
    return await this.app.close().then(
      () => {
        this.app.log.info('successfully closed!')
      },
      (err: any) => {
        this.app.log.error('an error happened', err)
      },
    )
  }
}
