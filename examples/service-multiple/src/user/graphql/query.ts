import { extendType, stringArg, objectType } from 'nexus'
import { Context } from '../context'

const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id', { description: 'id' })
    t.nonNull.string('name', { description: 'user name' })
  },
})

const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: User,
      args: { name: stringArg() },
      async resolve(_, { name }, ctx: Context) {
        console.log('user', ctx.req.headers)
        return {
          id: 1,
          name: name || 'x',
        }
      },
    })
  },
})

export { userQuery }
