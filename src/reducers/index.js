import { combineReducers } from 'redux';


// экспортируем наш редюссер
import  { todos } from './todos';

export default combineReducers({
  todos,
})
 // это комбайн редюсеров
