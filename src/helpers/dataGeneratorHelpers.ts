import { generateHashPassword, generateTokenWithRole } from './requestHelpers'
import { UserRole } from 'mongo/schema/users'
import db from 'mongo'

export const generateAdmin = async () => {
    const adminAlreadyExists = await db.users.adminExists()

    // if the admin already exists in the database, we do not create it and we escape the function with return statement
    if (adminAlreadyExists) {
        console.log('Admin user bootstrapped')
        return
    }

    try {
        // replace username and password by whatever you want
        const username = 'admin'
        const password = 'admin'

        const token = generateTokenWithRole(username, UserRole.ADMIN)
        const hash = await generateHashPassword(password)

        // we create the user "admin" with a special token including the role: admin.
        await db.users.createUser({
            username,
            token,
            password: hash,
            role: UserRole.ADMIN,
        })

        console.log('Admin user bootstrapped')
        return
    } catch (error) {
        console.log(error)
        return
    }
}
