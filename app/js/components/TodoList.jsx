import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions/todos';

const Todo = ({
	onClick,
	completed,
	text
}) => (
	<li
		onClick={onClick}
		style={
			{'textDecoration': completed ? 'line-through' : 'none'}
		}
		className={
			completed ? 'completed' : ''
		}
	>
	{text}
	</li>
)

const TodoList = ({
	todos,
	onTodoClick
}) => (
	<ul>
		{todos.map((todo) => 
			<Todo 
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
			/>
		)}
	</ul>
)

const getVisibileTodos = (
	todos,
	filter
) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(
				t => t.completed
			)
		case 'SHOW_ACTIVE':
			return todos.filter(
				t => !t.completed
			)
	}
}

const mapStateToProps = (
  state
) => {
  return {
    todos: getVisibileTodos(
    	state.todos,
			state.visibilityFilter
    )
  };
};

// defines and maps the onTodoClick function which calls the toggleTodo action to be dispatched??
const mapDispatchToProps = (
  dispatch
) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);