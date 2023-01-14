import express from 'express'
import s from 'service/adminService'

const router = express.Router()

// an example of admin privilege route to get users and delete all users
router.route('/users').get(s.getUsers).delete(s.deleteAllUsers)

export default router
