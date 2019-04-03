import { combineReducers } from 'redux';
import todo from './todo';
import modal from './modal';
import postReducer from './postReducer';

export default combineReducers({
	todos: todo,
	modal,
	post: postReducer
})