import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./todolist.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="list">
      <div className="intro">
        <h1>what would you like to do today?</h1>
      </div>
      <div className="add-todo">
        <TodoForm onSubmit={addTodo} />
      </div>
      <div className="user-list">
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          className="todo"
        />
      </div>
    </div>
  );
}

export default TodoList;
