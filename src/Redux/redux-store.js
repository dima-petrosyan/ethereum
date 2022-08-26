import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import graphReducer from './graphReducer.js'

const reducers = combineReducers({
	graph: graphReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store