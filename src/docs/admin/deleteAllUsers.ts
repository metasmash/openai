export default {
    delete: {
        tags: ['Admin'],
        security: [{ bearerAuth: [] }],
        description: 'Delete all users (except admin)',
        operationId: 'deleteAllUsers',
        parameters: [],
        responses: {
            '204': {
                description: 'Users deleted',
            },
        },
    },
}
