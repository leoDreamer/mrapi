import type { IncomingMessage } from 'http'
import type { GraphQLSchema } from 'graphql'

import { tryRequire } from '@mrapi/common'

export async function getOpenapiSchema(
  endpoint: string,
  headers: { [key: string]: string },
): Promise<GraphQLSchema> {
  const { createGraphQLSchema } = tryRequire(
    'openapi-to-graphql',
    'Please install it manually.',
  )
  return await new Promise((resolve, reject) => {
    require(endpoint.split(':')[0]).get(endpoint, (res: IncomingMessage) => {
      if (res.statusCode !== 200) {
        return reject(`fetch ${endpoint} error ${res.statusCode}`)
      }
      res.setEncoding('utf8')
      let rawData = ''
      res.on('data', (chunk) => {
        rawData += chunk
      })
      res.on('end', () => {
        try {
          rawData = JSON.parse(rawData)
        } catch (err) {
          return reject('mesh openapi support json source only ')
        }
        createGraphQLSchema(rawData, {
          headers: (_1: string, _2: string, _3: string, params: any) => {
            if (!headers || !params || !params.context) return {}
            try {
              const ret: { [type: string]: string } = {}
              for (const key in headers) {
                ret[key] = headers[key]
                  .slice(1, -1)
                  .split('.')
                  .reduce((c, k) => {
                    return c[k] ? c[k] : null
                  }, params)
              }
              return ret
            } catch (err) {
              console.error(`[Error] set header ${headers} error`, err)
              return {}
            }
          },
        })
          .then((data: any) => {
            return resolve(data.schema)
          })
          .catch((err: Error) => {
            return reject(err)
          })
      })
    })
  })
}

export async function getGraphqlSchema(
  endpoint: string,
  headers: { [key: string]: string },
): Promise<GraphQLSchema> {
  const { loadSchema } = tryRequire(
    '@graphql-tools/load',
    'Please install it manually.',
  )
  const { UrlLoader } = tryRequire(
    '@graphql-tools/url-loader',
    'Please install it manually.',
  )
  return loadSchema(endpoint, {
    loaders: [new UrlLoader()],
    headers: headers || {},
  })
}

export function resolverComposition(
  _1: string,
  schema: GraphQLSchema,
  compositionConfig: any[],
) {
  const { getResolversFromSchema } = tryRequire(
    '@graphql-tools/utils',
    'Please install it manually.',
  )
  const { composeResolvers } = tryRequire(
    '@graphql-tools/resolvers-composition',
    'Please install it manually.',
  )
  const { addResolversToSchema } = tryRequire(
    '@graphql-tools/schema',
    'Please install it manually.',
  )
  const resolvers = getResolversFromSchema(schema)
  const resolversComposition: { [key: string]: any } = {}
  compositionConfig.forEach((c) => {
    resolversComposition[c.resolver] = c.composer
  })
  const composedResolvers = composeResolvers(resolvers, resolversComposition)

  return addResolversToSchema({
    schema,
    resolvers: composedResolvers,
    updateResolversInPlace: true,
  })
}

export function transform(
  prefix: string,
  renameType: boolean,
  renameField: boolean,
  ignoreList: string[] = [],
  ignoreFileds: string[] = [],
) {
  const { RenameTypes, RenameRootFields, FilterRootFields } = tryRequire(
    '@graphql-tools/wrap',
    'Please install it manually.',
  )
  const transforms = []
  const ignoreRenameField = ignoreList.concat(ignoreFileds)
  if (renameType) {
    transforms.push(
      new RenameTypes((typeName: string) =>
        ignoreList.includes(typeName) ? typeName : `${prefix}${typeName}`,
      ),
    )
  }
  if (renameField && ignoreRenameField.length > 0) {
    transforms.push(
      new RenameRootFields((typeName: string, fieldName: string) =>
        ignoreRenameField.includes(typeName) ||
        ignoreRenameField.includes(`${typeName}.${fieldName}`)
          ? fieldName
          : `${prefix}${fieldName}`,
      ),
    )
  }

  if (ignoreFileds.length > 0) {
    transforms.push(
      new FilterRootFields(
        (typeName: string, fieldName: string) =>
          !(
            ignoreFileds.includes(typeName) ||
            ignoreFileds.includes(`${typeName}.${fieldName}`)
          ),
      ),
    )
  }
  return transforms
}
