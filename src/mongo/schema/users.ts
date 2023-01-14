import mongoose from 'mongoose'

const Schema = mongoose.Schema

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

const Users = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: mongoose.Schema.Types.Mixed,
        default: UserRole.USER,
        enum: {
            values: [UserRole.USER, UserRole.ADMIN],
            message: 'Invalid role',
        },
        required: true,
    },
})

export const userInformation = { username: 1, role: 1, token: 1, _id: 1 }

export default mongoose.model('users', Users)
