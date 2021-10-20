import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }

    const completeToDo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updatedTodos)
    }


    return (
        <div>
            <h1>What would you like to do Today?</h1>
            <ToDoForm onSubmit={addTodo} />
            <ToDo todos={todos} completeToDo={completeToDo}/>
        </div>
    )
}

export default ToDoList
