export default {
    post: {
        tags: ['Authentication'],
        description: 'Create user',
        operationId: 'createUser',
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UserSignUp',
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
