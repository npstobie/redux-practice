import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx'
import VisibilityFilter from './VisibilityFilter.jsx'
import store from '../reducers';


const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <VisibilityFilter />
  </div>
);

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)