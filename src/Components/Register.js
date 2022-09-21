import React, { useState } from 'react';

const Register = ({ addTodo }) => {
  const [input, setInput] = useState({title: '', description: ''});

  function handleChange(event) {
    const { name, value } = event.target;
    setInput(previousNote => {
            return {
                ...previousNote,
                [name]: value
            };
        });
  }

  const submit = (event) => {
    event.preventDefault();
    if (!input.title||!input.description) {
        alert('Please enter an event');
    } else {
        addTodo(input.title, input.description);
        setInput({ title: '', description: '' });
    }
  };
    
  return (
    <article className='todo-create'>
      <form className='todo-create__form'>
        <h2 className='todo-create__header'>Register New ToDo</h2>
        <label for='txtTodoItemToAdd'>Title:</label>
        <input
          id='txtTodoItemToAdd'
          className='todo-create__title'
          name='title'
          placeholder='Please enter a title.'
          value={input.title}
          onChange={handleChange}
        />
        <label for='descTodoItemToAdd'>Description:</label>
        <input
          id='descTodoItemToAdd'
          className='todo-create__note'
          name='description'
          placeholder='Please add a note.'
          value={input.description}
          onChange={handleChange}
        />
        <button id="btnAddTodo" className='todo-create__button' onClick={submit}>
            Add
        </button>
      </form>
    </article>
  );
};

export default Register;