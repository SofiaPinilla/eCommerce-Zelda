const user = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.user
            }
        case 'REGISTER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
export default user;