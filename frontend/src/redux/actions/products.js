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
            category: res.data.ProductId
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