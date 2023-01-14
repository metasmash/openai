import db from 'mongo'
import { getToken } from 'helpers/requestHelpers'
import { RequestHandler } from 'express'

const getUserInfo: RequestHandler = async (req, res) => {
    const token = getToken(req)
    const user = await db.users.findUserByToken(token)

    res.json(user)
}

export default getUserInfo
