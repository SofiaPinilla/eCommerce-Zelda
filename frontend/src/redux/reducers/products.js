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
        case 'PRODUCTS-NAME':
            return {
                ...state,
                productsName: action.productsName
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