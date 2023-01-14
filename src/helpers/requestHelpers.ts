import _ from 'lodash'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserRole } from '../mongo/schema/users'

export const salt = 10 // todo: set from env variable

export const jwtSecretKey = 'shh hhh' //todo: set from env variable

// retrieve the token from your request headers
export const getToken = (req: any): string =>
    _.replace(req.headers.authorization, 'Bearer ', '')

// generate a hashed password based on salt
export const generateHashPassword = async (password: string) =>
    await bcrypt.hash(password, salt)

// return true or false if the password is correct when compared with hash
export const verifyPassword = async (
    password: string,
    hash: string
): Promise<boolean> => await bcrypt.compare(password, hash as string)

// generate a fresh token
export const generateToken = (username) =>
    jwt.sign({ username }, jwtSecretKey, { expiresIn: '365d' })

// generate a fresh token with a role as payload inside the token
export const generateTokenWithRole = (username: string, role: UserRole) =>
    jwt.sign({ username, role }, jwtSecretKey, { expiresIn: '365d' })

// decode the token to retrieve token's metadata
export const decodeToken = async (token: string) =>
    await jwt.verify(token, jwtSecretKey)

// retrieve pagination params if the request use a paginated mongo query
export const getPaginationParams = (req) => {
    // here we get the max value between the query param and another value in case the user enter a negative value for page and limit

    const page = _.max([_.toNumber(req.query.page || 1), 1])
    const limit = _.max([_.toNumber(req.query.limit || 0), 0])

    return { page, limit }
}

// not mandatory, but can be used to retrieve the number of page based on numberOfDocuments and limit
export const getNumberOfPages = (numberOfDocuments, limit) => {
    // In case limit is equal to 0, we don't want to divide by zero.
    // So we are defining numberOfPages at 1 if limit is 0
    return limit === 0 ? 1 : _.ceil(numberOfDocuments / limit)
}
