import { combineReducers } from 'redux'
import todos from './todos'
import filters from './filters';

const todoApp = combineReducers({
  todos:todos,
  filters:filters
})

export default todoApp;