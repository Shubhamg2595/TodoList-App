import React, { useState } from 'react';
import axios from 'axios';
import { uniqueId } from '../utils/uniqueId';
import { Redirect } from 'react-router-dom'

export default function CreateTodo(props) {

    const { addNewTodoItem } = props;


    const [todo_description, setTodo_Description] = useState('')
    const [todo_responsible, setTodo_Responsible] = useState('')
    const [todo_priority, setTodo_Priority] = useState('')
    const [todo_completed, setTodo_Completed] = useState(false)

    function onChangeTodoDescription(e) {
        setTodo_Description(e.target.value)
    }

    function onChangeTodoResponsible(e) {
        setTodo_Responsible(e.target.value);
    }

    function onChangeTodoPriority(e) {
        setTodo_Priority(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${todo_description}`);
        console.log(`Todo Responsible: ${todo_responsible}`);
        console.log(`Todo Priority: ${todo_priority}`);
        console.log(`Todo Completed: ${todo_completed}`);
        const newTodo = {
            _id: uniqueId(),
            todo_description: todo_description,
            todo_responsible: todo_responsible,
            todo_priority: todo_priority,
            todo_completed: todo_completed
        }
        
        addNewTodoItem(newTodo)
        setTodo_Description('');
        setTodo_Responsible('');
        setTodo_Priority('');
        setTodo_Completed('');
        

        props.history.push('/')
    }

    return (
        <div style={{ marginTop: 20 }}>
            <h3>Create New Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        className="form-control"
                        value={todo_description}
                        onChange={onChangeTodoDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text"
                        className="form-control"
                        value={todo_responsible}
                        onChange={onChangeTodoResponsible}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityLow"
                            value="Low"
                            checked={todo_priority === 'Low'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityMedium"
                            value="Medium"
                            checked={todo_priority === 'Medium'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityHigh"
                            value="High"
                            checked={todo_priority === 'High'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}