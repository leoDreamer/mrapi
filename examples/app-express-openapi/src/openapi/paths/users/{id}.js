/**
 * This file was generated by mrapi
 * Do not make changes to this file directly
 */

exports.default = function (mrapiFn) {
  async function GET(req, res, next) {
    const data = await mrapiFn.findOne(req, res, next, {
      modelName: 'user',
    })
    if (data.code === 0) {
      res.status(200).json(data)
    } else {
      res.status(500).json(data)
    }
  }
  GET.apiDoc = {
    description: 'Query the user by parameter.',
    operationId: 'getOneUser',
    tags: ['users'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        type: 'integer',
        required: true,
        description: 'id',
      },
    ],
    responses: {
      200: {
        description: 'The user information',
        schema: {
          $ref: '#/definitions/User',
        },
      },
      default: {
        description: 'Unexpected error',
        schema: {
          $ref: '#/definitions/Error',
        },
      },
    },
  }
  async function PUT(req, res, next) {
    const data = await mrapiFn.update(req, res, next, {
      modelName: 'user',
    })
    if (data.code === 0) {
      res.status(204).json(data)
    } else {
      res.status(500).json(data)
    }
  }
  PUT.apiDoc = {
    description: 'Update a user.',
    operationId: 'updateOneUser',
    tags: ['users'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        type: 'integer',
        required: true,
        description: 'id',
      },
      {
        name: 'data',
        in: 'body',
        schema: {
          $ref: '#/definitions/UserCreateInput',
        },
        required: true,
      },
    ],
    responses: {
      204: {
        description: 'User updated successfully.',
        schema: {
          $ref: '#/definitions/User',
        },
      },
      default: {
        description: 'Unexpected error',
        schema: {
          $ref: '#/definitions/Error',
        },
      },
    },
  }
  async function DELETE(req, res, next) {
    const data = await mrapiFn.delete(req, res, next, {
      modelName: 'user',
    })
    if (data.code === 0) {
      res.status(200).json(data)
    } else {
      res.status(500).json(data)
    }
  }
  DELETE.apiDoc = {
    description: 'Delete user.',
    operationId: 'deleteOneUser',
    tags: ['users'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        type: 'integer',
        required: true,
        description: 'id',
      },
    ],
    responses: {
      200: {
        description: 'User deleted successfully.',
      },
      default: {
        description: 'Unexpected error',
        schema: {
          $ref: '#/definitions/Error',
        },
      },
    },
  }
  return {
    GET,
    PUT,
    DELETE,
  }
}
