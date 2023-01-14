export default {
    get: {
        tags: ['Authentication'],
        security: [{ bearerAuth: [] }],
        description: 'Get user information',
        operationId: 'getUserInfo',
        parameters: [],
        responses: {
            '200': {
                description: 'User retrieved!',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/User',
                        },
                    },
                },
            },
        },
    },
}
