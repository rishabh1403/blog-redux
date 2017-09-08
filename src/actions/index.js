
import axios from 'axios';

export function fetchPosts(){
    const request = axios.get('http://reduxblog.herokuapp.com/api/posts?key=jain');
    return {
        type : 'FETCH_POSTS',
        payload: request
    }
}

export function addPost(values, cb){
    const request = axios.post('http://reduxblog.herokuapp.com/api/posts?key=jain',values)
                    .then(()=> cb());
    return {
        type : 'CREATE_POSTS',
        payload: request
    }
}

export function fetchPost(id){
    const request = axios.get(`http://reduxblog.herokuapp.com/api/posts/${id}?key=jain`);
    return {
        type : 'FETCH_POST',
        payload: request
    }
}