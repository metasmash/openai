import db from '../../mongo'
import { RequestHandler } from 'express'

const getUsers: RequestHandler = async (req, res) => {
    // filter every user with a username different from "admin"
    const users = await db.users.findUsers()

    console.log('ADMIN: Users retrieved')
    res.json(users)
}

export default getUsers
