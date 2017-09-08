import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'
import posts from './fetch_post';
const rootReducer = combineReducers({
  posts,
  form: formReducer
});

export default rootReducer;