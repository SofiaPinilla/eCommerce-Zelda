const category = (state = {}, action) => {
    switch (action.type) {
        case 'CATEGORIES':
            return {
                ...state,
                categories: action.categories
            }
        case 'CATEGORY':
            return {
                ...state,
                category: action.category
            }
        default:
            return state
    }
}
export default category;