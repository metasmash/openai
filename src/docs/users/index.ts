import getUserInfo from './getUserInfo'
import login from './login'
import createStudent from './createUser'

export default {
    '/me': { ...getUserInfo },
    '/login': { ...login },
    '/create-student': { ...createStudent },
}
