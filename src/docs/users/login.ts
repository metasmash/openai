export default {
    post: {
        tags: ['Authentication'],
        description: 'Login',
        operationId: 'login',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UserLogin',
                    },
                },
            },
        },
        responses: {
            '201': {
                description: 'Authenticated successfully',
            },
            '500': {
                description: 'Server error',
            },
        },
    },
}
