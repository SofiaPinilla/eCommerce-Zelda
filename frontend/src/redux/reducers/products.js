const product = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return {
                ...state,
                product: action.products
            }
        case 'LAST-PRODUCTS':
            return {
                ...state,
                lastProduct: action.lastProducts
            }
        case 'PRODUCT':
            return {
                ...state,
                productByName: action.productByName
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
export default product;