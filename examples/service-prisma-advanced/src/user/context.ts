import type { mrapi } from '@mrapi/service'
import type { PrismaClient } from '.prisma/user-client'

export interface Context {
  req: mrapi.Request
  res: mrapi.Response
  prisma: PrismaClient
  userId: number
}

/**
 * Create custom context function
 * You can extend or overwrite default values: {req, res, prisma}
 * @export
 * @param {mrapi.CreateContextParams} _params
 * @returns {Partial<Context>}
 */
export function createContext(
  _params: mrapi.CreateContextParams,
): Partial<Context> {
  return {
    userId: 1,
  }
}
