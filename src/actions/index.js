
import axios from 'axios';

export function fetchPosts(){
    const request = axios.get('http://reduxblog.herokuapp.com/api/posts?key=jain');
    return {
        type : 'FETCH_POSTS',
        payload: request
    }
}