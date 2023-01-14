import db from 'mongo'
import { RequestHandler } from 'express'
import { generateHashPassword, generateToken } from 'helpers/requestHelpers'
import { UserRole } from 'mongo/schema/users'

const createUser =
    (role: UserRole): RequestHandler =>
    async (req, res) => {
        const { password, username } = req.body

        const token = generateToken(username)

        const hash = await generateHashPassword(password)

        const userForm = {
            username,
            password: hash,
            token,
            role,
        }

        try {
            await db.users.createUser(userForm)
        } catch (error) {
            res.status(400).json({
                message: "A user you're trying to create already exists",
            })
            return
        }

        res.json({
            token,
            role,
            username,
        })
    }

export default createUser
