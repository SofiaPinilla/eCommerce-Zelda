const user = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return {
                ...state,
                user: action.user
            }
        case 'REGISTER':
            return {
                ...state,
                user: action.user
            }
        case 'GET_INFO':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
export default user;