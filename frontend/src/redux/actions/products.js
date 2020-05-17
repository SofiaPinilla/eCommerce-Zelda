import store from '../store';
import axios from 'axios';

export const products = async() => {
    try {
        const res = await axios.get('http://localhost:3002/products')
        store.dispatch({
            type: 'PRODUCTS',
            products: res.data
        })
    } catch (error) {
        console.error(error)
    }
}
export const addProduct = async(formData) => {
    try {
        const res = await axios.post('http://localhost:3002/products', formData, {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        })
        store.dispatch({
            type: 'ADD_PRODUCTS',
            products: res.data
        })
        products();
    } catch (error) {
        console.error(error)
    }
}
export const editProduct = async(_id, formData) => {
    try {
        const res = await axios.put('http://localhost:3002/products/' + _id, formData, {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        })
        store.dispatch({
            type: 'ADD_PRODUCTS',
            products: res.data
        })
        products();
    } catch (error) {
        console.error(error)
    }
}
export const deleteProduct = async(_id) => {
    try {
        const res = await axios.delete('http://localhost:3002/products/' + _id, {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        })
        store.dispatch({
            type: 'DELETE_PRODUCTS',
            payload: res.data
        })
        products();
    } catch (error) {
        console.error(error)
    }
}



export const getProductDetail = async(_id) => {
    try {
        const res = await axios.get('http://localhost:3002/products/' + _id) //hacemos la petición para obtener ese producto en detalle
        store.dispatch({
            type: 'GET_PRODUCT_DETAIL',
            payload: res.data
        })
    } catch (error) {
        console.error(error)
    }
}
export const lastProducts = async() => {
    try {
        const res = await axios.get('http://localhost:3002/products/new')
        store.dispatch({
            type: 'LAST-PRODUCTS',
            lastProducts: res.data
        })
    } catch (error) {
        console.error(error)
    }
}
export const categories = async() => {
    try {
        const res = await axios.get('http://localhost:3002/categories/')
        store.dispatch({
            type: 'CATEGORIES',
            categories: res.data
        })
    } catch (error) {
        console.error(error)
    }
}
export const category = async(categoryName) => {
    try {
        const res = await axios.get('http://localhost:3002/categories/name/' + categoryName)
        store.dispatch({
            type: 'CATEGORY',
            category: res.data.productIds
        })
    } catch (error) {
        console.error(error)
    }
}
export const productByName = async(productName) => {
    try {
        const res = await axios.get('http://localhost:3002/products/name/' + productName)
        store.dispatch({
            type: 'PRODUCT',
            productByName: res.data
        })
    } catch (error) {
        console.error(error)
    }
}
export const like = async(_id, product) => {
    try {
        await axios.put('http://localhost:3002/products/likes/' + _id, product, {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type: 'LIKE',
        })
        products();
        getProductDetail(_id);
    } catch (error) {
        console.error(error)
    }
}
export const unLike = async(_id, product) => {
    try {
        await axios.put('http://localhost:3002/products/disLikes/' + _id, product, {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type: 'UNLIKE',
        })
        products();
        getProductDetail(_id);
    } catch (error) {
        console.error(error)
    }
}
export const addCart = (productDetail) => {
    const { product } = store.getState();
    if (!product.cart.map(product => product._id).includes(productDetail._id)) {
        store.dispatch({
            type: 'ADD_CART',
            payload: {...productDetail, units: 1 }
        })
    }
}
export const setCart = (products) => store.dispatch({
    type: 'SET_CART',
    payload: products
})
export const clearCart = () => {
    store.dispatch({
        type: 'CLEAR_CART'
    })
}
export const addComment = async(_id, formData) => {
    try {
        await axios.put(`http://localhost:3002/products/reviews/${_id}`, formData, {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        });
        store.dispatch({
            type: 'COMMENT',
        })
        products();
        getProductDetail(_id);
    } catch (error) {
        console.error(error)
    }
}