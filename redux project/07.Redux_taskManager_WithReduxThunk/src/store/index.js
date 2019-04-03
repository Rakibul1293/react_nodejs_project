import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
	console.log(action.type)
	console.log(store)
	// store.dispatch()
	next(action)
}

const middleware = [logger, thunk]

const store = createStore(rootReducer, composeEnhance(
    applyMiddleware(...middleware)
))

export default store;