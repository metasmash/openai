import db from 'mongo'
import { RequestHandler } from 'express'

const deleteAllUsers: RequestHandler = async (req, res) => {
    try {
        await db.users.deleteAllUsers()
    } catch (error) {
        res.status(400).json({
            message: 'Impossible to delete all users.',
        })
        return
    }

    console.log('ADMIN: All users deleted')

    res.status(204).json({ message: `All users deleted` })
}

export default deleteAllUsers
