import express from 'express'
import s from 'service/authenticationService'
import authMd from 'middleware/authenticationMiddleware'
import { UserRole } from '../mongo/schema/users'

const router = express.Router()

// this endpoint retrieve the user information based on the Bearer token inside the request headers
router.get('/me', authMd.isUserAuthenticated, s.getUserInfo)

// in order to create a user
router.post(
    '/signup',
    authMd.usernameOrPasswordNotEmpty,
    authMd.isUsernameAvailable,
    s.createUser(UserRole.USER)
)

// return the token and the user information. It has to be persistent client side (inside cookies for localstorage)
router.post(
    '/login',
    authMd.usernameOrPasswordNotEmpty,
    authMd.checkUserExistsByName,
    s.login
)

export default router
