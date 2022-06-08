import { USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_FETCH_REQUEST, USER_FETCH_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../actions/usersAction"

let initialState = {
    users: [],
    loading: false
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CREATE_REQUEST:
        case USER_FETCH_REQUEST:
        case USER_UPDATE_REQUEST:
        case USER_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_CREATE_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload.user
            }
        case USER_UPDATE_SUCCESS:
            let tmpUpdateState = [...state.users];
            let updateIndex = tmpUpdateState.findIndex((user) => user.userName === action.payload.userName)
            tmpUpdateState[updateIndex] = {
                ...tmpUpdateState[updateIndex],
                lname: action.payload.lName
            }
            return {
                loading: false,
                users: tmpUpdateState
            }
        case USER_DELETE_SUCCESS:
            let tmpDeleteState = [...state.users];
            let deleteIndex = tmpDeleteState.findIndex((user) => user.userName === action.payload)
            tmpDeleteState.splice(deleteIndex, 1)
            return {
                loading: false,
                users: tmpDeleteState
            }

        default: return state
    }
}