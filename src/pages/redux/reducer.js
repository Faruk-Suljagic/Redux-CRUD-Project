import * as actions from './actionTypes'

const initialState = {
    users: [],
    user: {},
    loading: true,
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
         
        case actions.GET_USERS: {
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }
        case actions.DELETE_USER:
        case actions.ADD_USER:
            return {
                ...state,
                loading: false,

            }
        default:
            return state;
    }
}

export default usersReducer;