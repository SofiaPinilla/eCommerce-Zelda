import store from '../store';
import axios from 'axios';


export const order = async(productId) => {
    try {
        const res = await axios.post('http://localhost:3002/orders/', { productId }, {
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

}