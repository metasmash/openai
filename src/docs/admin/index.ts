import getUsers from './getUsers'
import deleteAllUsers from './deleteAllUsers'

export default {
    '/admin/users': { ...getUsers, ...deleteAllUsers },
}
