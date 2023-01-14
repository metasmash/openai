import basicInfo from './basicInfo'
import components from './components'
import users from './users'
import admin from './admin'

export default {
    ...basicInfo,
    ...components,
    paths: { ...users, ...admin },
}
