import React from 'react';

const TodoCard = ({ todo, toggleTodos, removeTodos }) => (
  <article
    className={`todo--toggle-completed
    ${todo.completed ? 'todo--completed' : 'todo'}`} >
    <div className='todo-text-container' onClick={() => toggleTodos(todo.id)} >
      <h3 className='todo__title'> {todo.title}</h3>
      <p className='todo__note'> {todo.description}</p>
    </div>
    <button
      className={todo.completed ? 'todo__button--remove' : 'todo__button--hide'}
      onClick={() => {removeTodos(todo.id);}}>
      Remove
    </button>
  </article>
);

export default TodoCard;