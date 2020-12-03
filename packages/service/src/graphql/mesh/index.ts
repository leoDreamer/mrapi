import { GraphQLSchema } from 'graphql'
import { tryRequire } from '@mrapi/common'
import {
  getGraphqlSchema,
  getOpenapiSchema,
  resolverComposition,
  prefixTransform
} from './tools'

export async function getMeshSchema(sources: Array<any>): Promise<GraphQLSchema> {
  const { stitchSchemas } = tryRequire(
    '@graphql-tools/stitch',
    'Please install it manually.',
  )
  const schemas: Array<GraphQLSchema> = []
  const remoteSchemas: Array<GraphQLSchema | null> = await Promise.all(sources.map(c => {
    let fn: Promise<GraphQLSchema | null>
    switch(c.type) {
      case 'openapi':
        fn = getOpenapiSchema(c.endpoint, c.headers)
        break
      case 'graphql':
        fn = getGraphqlSchema(c.endpoint, c.headers)
        break
      default:
        fn = Promise.reject('mesh type error')
    }
    return fn.catch(err => {
      console.error(`[Error] Fetch remote source <${c.name}> error,`, err)
      return null
    })
  }))

  for (let i = 0, len = remoteSchemas.length; i < len; i++) {
    const { name, compositions, prefixTransforms } = sources[i]
    const schema = remoteSchemas[i]
    const subSchema: {[type: string]: any} = { schema }

    if (!schema) {
      console.error(`[Error] mesh source <${name}> fail`)
      continue
    }
    // resolver composition
    if (compositions) 
      try {
        subSchema.schema = resolverComposition(
          name,
          schema as GraphQLSchema,
          compositions
        )
      } catch (err) {
        console.error(`[Error] composition ${name} resolver fail`)
      }

    // wrap and transform
    if (prefixTransforms)
      try {
        subSchema.transforms = prefixTransform(
          prefixTransforms.prefix,
          prefixTransforms.renameType,
          prefixTransforms.renameField,
          prefixTransforms.ignoreList,
        )
      } catch (err) {
        console.error(`[Error] transform ${name} prefix fail`)
      }

      schemas.push(subSchema as GraphQLSchema)
  }
  return schemas.length > 1
    ? stitchSchemas({
        subschemas: schemas
      })
    : schemas[0]
}