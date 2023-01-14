import db from 'mongo'
import { getToken } from '../helpers/requestHelpers'
import { RequestHandler } from 'express'

const isUsernameAvailable: RequestHandler = async (req, res, next) => {
    const { username } = req.body

    const usernameAlreadyExists = await db.users.userExistsByUsername(username)
    if (usernameAlreadyExists) {
        const errorMessage = `Username ${username} already exists.`
        console.log(errorMessage)
        res.status(409).json({ message: errorMessage })
        return
    }

    next()
}

const isUserAuthenticated: RequestHandler = async (req, res, next) => {
    const token = getToken(req)

    const usernameAlreadyExists = await db.users.userExistsByToken(token)
    if (!usernameAlreadyExists) {
        const errorMessage = `User is not authenticated.`

        console.log(errorMessage)
        res.status(409).json({ message: errorMessage })
        return
    }

    next()
}

const checkUserExistsByName: RequestHandler = async (req, res, next) => {
    const { username } = req.body

    const usernameAlreadyExists = await db.users.userExistsByUsername(username)
    if (!usernameAlreadyExists) {
        const errorMessage = `User does not exists or password is wrong.`

        console.log(errorMessage)
        res.status(409).json({ message: errorMessage })
        return
    }

    next()
}

const usernameOrPasswordNotEmpty: RequestHandler = async (req, res, next) => {
    const { username, password } = req.body

    if (username === '' || password === '') {
        const errorMessage = 'Username or password is empty'

        console.log(errorMessage)
        res.status(401).json({ message: errorMessage })
        return
    }

    next()
}

export default {
    isUsernameAvailable,
    isUserAuthenticated,
    usernameOrPasswordNotEmpty,
    checkUserExistsByName,
}
