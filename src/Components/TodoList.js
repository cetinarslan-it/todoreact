import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, toggleTodos, removeTodos }) => (
  <article className='todo-container' id='todoList'>
    {todos.map(todo => (
    <TodoCard key={todo.id}
              toggleTodos={toggleTodos}
              removeTodos={removeTodos}
              todo={todo}/>
            ))}
  </article>
);

export default TodoList;