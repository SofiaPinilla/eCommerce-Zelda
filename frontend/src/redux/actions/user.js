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
export const getUserInfo = async() => {
    try {
        const res = await axios.get('http://localhost:3002/users/info', {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        })
        store.dispatch({
            type: 'GET_INFO',
            user: res.data
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}

export const logout = async() => {
    const res = await axios.get('http://localhost:3002/users/logout', {
        headers: {
            authorization: localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    store.dispatch({
        type: 'LOGOUT'
    })
    return res;
}