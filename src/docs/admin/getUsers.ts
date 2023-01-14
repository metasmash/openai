export default {
    get: {
        tags: ['Admin'],
        security: [{ bearerAuth: [] }],
        description: 'Get all users',
        operationId: 'getUsers',
        parameters: [],
        responses: {
            '200': {
                description: 'Retrieve the whole user list',
            },
        },
    },
}
