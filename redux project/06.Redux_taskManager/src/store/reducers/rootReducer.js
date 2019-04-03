import { combineReducers } from 'redux';
import todo from './todo';
import modal from './modal';

export default combineReducers({
	todos: todo,
	modal
})