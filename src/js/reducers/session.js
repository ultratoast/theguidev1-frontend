const START_NEW_SESSION = 'START_NEW_SESSION'

const REQUEST_NEW_SESSION = 'REQUEST_NEW_SESSION'

const initialState = {
    components: {
        userSession: undefined
    }
}

function sessionStore(state,action) {
    let actionObject = {
        REQUEST_NEW_SESSION: Object.assign({}, state, {
            userSession: action.session,
            lastUpdated: action.receivedAt,
            isBuilding: true
        }),
        START_NEW_SESSION: Object.assign({}, state, {
            userSession: action.session,
            lastUpdated: action.receivedAt,
            isBuilding: false
        }),
        "default" : state
    }
    return actionObject[action.type] || actionObject["default"]
}

function handleSessionActions(state,action) {
    return Object.assign({}, state, {
        components: sessionStore(state.components,action)
    })
}

function session(state,action) {
    if (typeof state === "undefined") {
        return initialState
    }
    let actionObject = {
        REQUEST_NEW_SESSION: handleSessionActions(state,action),
        START_NEW_SESSION: handleSessionActions(state,action),
        "default": state
    }
    return actionObject[action.type] || actionObject["default"]
}

export default session