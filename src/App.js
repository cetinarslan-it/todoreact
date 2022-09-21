import React, { useEffect, useState } from "react";
import Register from "./Components/Register";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const saveData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const addTodo = (title, description) => {
    setTodos((previousTodos) => {
      return [
        ...previousTodos,
        { title, description, completed: false, id: uuidv4() },
      ];
    });
    saveData(todos);
  };

 

 

  return (
    <article className="App">
      <header class="header">
        <h1 class="header-title">Cetin's ToDo List</h1>
      </header>
      <Register addTodo={addTodo} />
      <footer class="footer">
        <p>Copyright&copy; 2022 - All rights reserved.</p>
      </footer>
    </article>
  );
};

export default App;