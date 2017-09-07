import { combineReducers } from 'redux';
import posts from './fetch_post';
const rootReducer = combineReducers({
  posts
});

export default rootReducer;