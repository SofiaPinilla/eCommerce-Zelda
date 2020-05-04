const products = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return {
                ...state,
                product: action.products
            }
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
export default products;