
export function usersReducer(state = {}, action) {

    switch(action.type) {
        case 'ADD':
            return [...state, action.user]
        default:
            return state
    }
}