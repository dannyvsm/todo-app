import React, { useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import "./todo.css";

function Todo({ todos, completeTodo, removeTodo }) {
  // const [edit, setEdit] = useState({
  //     id: null,
  //     value: ''
  // })

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiDeleteBack2Line
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        {/* <FiEdit2
                    onClick={() => setEdit({ id: todo.id, value: todo.text})}
                    className='edit-icon'
                /> */}
      </div>
    </div>
  ));
}

export default Todo;
