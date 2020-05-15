import store from '../store';
import axios from 'axios';
import { clearCart } from './products';


export const order = async(productIds) => {
    try {
        const res = await axios.post('http://localhost:3002/orders', { productIds }, {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        })
        store.dispatch({
            type: 'ORDER',
            payload: res.data
        })
    } catch (error) {
        console.error(error)
    }
    clearCart()
}