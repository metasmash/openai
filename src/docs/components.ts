export default {
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            },
        },
        schemas: {
            User: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: 'Unique user id',
                        example: 'eRfdga-89',
                    },
                    username: {
                        type: 'string',
                        description: 'The username',
                        example: 'John',
                    },
                    token: {
                        type: 'string',
                        description: 'User authentication token',
                        example: 'x-token-x',
                    },
                },
            },
            UserLogin: {
                type: 'object',
                properties: {
                    username: { type: 'string', example: 'John' },
                    password: { type: 'string', example: 'password' },
                },
            },
            UserSignUp: {
                type: 'object',
                properties: {
                    username: { type: 'string', example: 'John' },
                    password: { type: 'string', example: 'password' },
                },
            },
            Error: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                    },
                },
            },
        },
    },
}
