import store from '../store';
import axios from 'axios';

export const characters = async() => {
    try {
        const res = await axios.get('http://localhost:3002/characters')
        store.dispatch({
            type: 'CHARACTERS',
            characters: res.data
        })
    } catch (error) {
        console.error(error)
    }
}