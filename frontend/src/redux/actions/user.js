import store from '../store';
import axios from 'axios';

export const login = async(user) => {
    try {
        const res = await axios.post('http://localhost:3002/users/login', user)
        store.dispatch({
            type: 'LOGIN',
            user: res.data
        })
        localStorage.setItem('authToken', res.data.token);
    } catch (error) {
        console.error(error)
    }
}
export const register = async(user) => {
    try {
        const res = await axios.post('http://localhost:3002/users/register', user)
        store.dispatch({
            type: 'REGISTER',
            user: res.data
        })
    } catch (error) {
        console.error(error)
    }
}