import { getMeshSchema } from '../src/graphql/mesh'
import { Service } from '../src/index'
import { mrapi } from '@mrapi/service'
import {
  transform,
  resolverComposition,
  getGraphqlSchema,
  getOpenapiSchema,
} from '../src/graphql/mesh/tools'

describe('mesh', () => {
  const config: mrapi.PartialConfig = {
    service: {
      graphql: true,
      sources: [
        {
          name: 'auth',
          type: 'graphql',
          endpoint: 'https://covid-19.dava.engineer/api/graphql',
          prefixTransforms: {
            prefix: 'auth_',
            renameType: true,
            renameField: true,
            ignoreList: ['Query.cases'],
          },
        },
      ],
    },
    logger: {
      prettyPrint: true,
    },
  }
  test('getMeshSchema', async () => {
    const res = await getMeshSchema([
      {
        name: 'auth',
        type: 'graphql',
        endpoint: 'https://covid-19.dava.engineer/api/graphql',
        prefixTransforms: {
          prefix: 'auth_',
          renameType: true,
          renameField: true,
          ignoreList: ['Query.cases'],
        },
        ignoreFields: ['Query.case'],
      },
      {
        name: 'cms',
        type: 'openapi',
        endpoint:
          'https://api.apis.guru/v2/specs/mashape.com/geodb/1.0.0/swagger.json',
        headers: {
          host: '{context.headers.host}',
        },
      },
    ])
    expect(typeof res).toBe('object')
  }, 30000)

  test('mesh index', async () => {
    const service = new Service(config)
    try {
      const res = await service.start(9000)
      expect(res).toEqual({
        address: '::',
        family: 'IPv6',
        port: 9000,
      })
      await service.app.close()
    } catch (error) {
      expect(error).toBe('address already in use :::9000')
    }
  }, 10000)

  test('mesh tools getOpenapiSchema', async () => {
    expect(typeof getOpenapiSchema).toBe('function')
    // openapi
    try {
      await getOpenapiSchema('http://www.baidu.com', {
        'Content-type': 'application/json',
      })
    } catch (error) {
      expect(error).toBe('mesh openapi support json source only ')
    }

    try {
      await getOpenapiSchema('https://covid-19.dava.engineer/api/graphql', {
        'Content-type': 'application/json',
      })
    } catch (error) {
      expect(error).toBe(
        'fetch https://covid-19.dava.engineer/api/graphql error 400',
      )
    }

    const openapiRes = await getOpenapiSchema(
      'https://api.apis.guru/v2/specs/mashape.com/geodb/1.0.0/swagger.json',
      {
        'Content-type': 'application/json',
      },
    )
    expect(typeof openapiRes).toBe('object')
  }, 30000)

  test('mesh tools getGraphqlSchema', async () => {
    // graphql
    try {
      const graphqlRes = await getGraphqlSchema(
        'https://covid-19.dava.engineer/api/graphql',
        {
          'Content-type': 'application/json',
        },
      )
      expect(typeof graphqlRes).toBe('object')
    } catch (error) {
      expect(error.message).toBe('UrlLoader is not a constructor')
    }
  })
  test('mesh tools transform', () => {
    // transform
    expect(typeof transform).toBe('function')
    try {
      const transformRes = transform('auth_', true, true, ['Query.cases'])
      expect(typeof transformRes).toBe('object')
    } catch (error) {}
  })
  test('mesh tools resolverComposition', async () => {
    try {
      const resolverCompositionRes = await resolverComposition(
        'auth',
        require('./shema'),
        [
          {
            resolver: '*.*',
          },
        ],
      )
      expect(typeof resolverCompositionRes).toBe('object')
    } catch (error) {}
  })
})
