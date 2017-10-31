import { createStore, combineReducers } from 'redux';
import { todos } from './todos'
import { visibilityFilter } from './visibilityFilter'

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());