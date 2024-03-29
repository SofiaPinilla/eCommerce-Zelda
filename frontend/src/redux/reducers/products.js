const product = (state = { cart: [] }, action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return {
                ...state,
                product: action.products
            }
        case 'ADD_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'SEARCH':
            return {
                ...state,
                search: action.payload
            }
        case 'SET_CART':
            return {
                ...state,
                cart: action.payload
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                product: action.payload
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
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
        case 'GET_PRODUCT_DETAIL':
            return {
                ...state,
                productDetail: action.payload
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