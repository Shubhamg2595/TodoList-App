import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default function TodosList(props) {
    const { getAllTodos, todoList } = props;
    const todos = todoList && Object.values(todoList);


    useEffect(() => {
        getAllTodos();
    }, [])

    function displayTodoList() {
        return todos.map(
            function (currentTodo, i) {
                return <Todo todo={currentTodo} key={i} />;
            });
    }


    return (
        <div>
            <h3>Todos List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos && todos.length > 0 ? displayTodoList() : null}
                </tbody>
            </table>
        </div>
    )
}