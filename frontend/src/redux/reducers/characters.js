const characters = (state = {}, action) => {
    switch (action.type) {
        case 'CHARACTERS':
            return {
                ...state,
                character: action.characters
            }
        default:
            return state
    }
}
export default characters;