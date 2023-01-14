import db from 'mongo'
import { RequestHandler } from 'express'
import { verifyPassword } from 'helpers/requestHelpers'

const login: RequestHandler = async (req, res) => {
    const { username, password } = req.body

    try {
        const {
            password: hash,
            username: _username,
            token,
            role,
        } = await db.users.findUserByUsername(username)

        const isPasswordCorrect = await verifyPassword(password, hash)

        if (isPasswordCorrect) {
            console.log(`User ${username} logged in.`)
            res.json({ username: _username, token, role })
            return
        }

        res.status(401).json({
            message: 'User does not exists or password is wrong.',
        })

        return
    } catch (error) {
        res.status(401).json({
            message: 'User does not exists or password is wrong.',
        })
    }
}

export default login
