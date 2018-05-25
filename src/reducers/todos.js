// Подхватываем событие
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, action.payload.text
      ]
    default:
      return state;
  }
}
export { todos };
// экспорт для комбайна
