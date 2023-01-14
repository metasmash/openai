import { RequestHandler } from 'express'
import { decodeToken, getToken } from '../helpers/requestHelpers'
import _ from 'lodash'
import { UserRole } from '../mongo/schema/users'

// a generic function returning a request handler.
// call checkUserIs(UserRole)(req,res,next) inside your requests, mostly used inside middlewares.
const checkUserIs =
    (
        role: UserRole
    ): RequestHandler => // on créer une fonction...
    async (req, res, next) => {
        //... qui retourne une fonction
        const token = getToken(req)

        const payload = await decodeToken(token)
        const userRole = _.get(payload, 'role')

        if (userRole !== role) {
            const errorMessage = `Unauthorized: you're not asggined to role: ${role}`

            console.log(errorMessage)
            res.status(401).json({ message: errorMessage })
            return
        }

        next()
    }

export default { checkUserIs }
