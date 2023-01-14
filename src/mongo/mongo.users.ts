import { userInformation, UserRole } from './schema/users'
import schema from './schema'
import { ignoreCase } from 'helpers/mongoHelpers'

const { Users } = schema

export default {
    findUsers: async () =>
        Users.find(
            {
                role: { $ne: UserRole.ADMIN },
            },
            userInformation
        ),

    findUserByUsername: async (username) =>
        Users.findOne(
            { username: ignoreCase(username) },
            { ...userInformation, password: 1 }
        ),

    userExistsByToken: async (token) => Users.exists({ token }),

    adminExists: async () => Users.exists({ username: 'admin' }),

    userExistsByUsername: async (username) =>
        Users.exists({ username: ignoreCase(username) }),

    findUserByToken: async (token: string) =>
        Users.findOne({ token }, userInformation),

    updateToken: async (username, token) =>
        Users.updateOne({ username }, { token }),

    createUser: async (payload: {
        username: string
        password: string
        token: string
        role?: UserRole
    }) => Users.create(payload),

    createUsers: async (users) => Users.create(users),

    findRoleByToken: async (token) => Users.findOne({ token }, { role: 1 }),

    deleteAllUsers: async () =>
        Users.deleteMany({
            role: { $ne: UserRole.ADMIN },
        }),
}
