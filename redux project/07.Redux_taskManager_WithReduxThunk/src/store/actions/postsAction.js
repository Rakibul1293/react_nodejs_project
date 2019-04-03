import axios from 'axios';
import { LOADING_STATE, LOAD_POSTS } from './actionType';

export const fetchPosts = () => dispatch => {
    dispatch({ type: LOADING_STATE, payload: true })

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            dispatch({ type: LOAD_POSTS, payload: res.data })
            dispatch({ type: LOADING_STATE, payload: false })
        })
        .catch(error => console.log(error))
}