import { combineReducers } from 'redux'

const moduleStore = require('./reducers/module').default

const sessionStore = require('./reducers/session').default

const mainReducer = combineReducers({
    moduleStore,
    sessionStore
})

export default mainReducer