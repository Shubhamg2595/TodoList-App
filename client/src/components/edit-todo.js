import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditTodo(props) {

    const { updateTodoItem, todoList } = props;

    const [todo_description, setTodo_Description] = useState('')
    const [todo_responsible, setTodo_Responsible] = useState('')
    const [todo_priority, setTodo_Priority] = useState('')
    const [todo_completed, setTodo_Completed] = useState(false)

    useEffect(() => {

        if(props.match.params.id in todoList)
        {
            const activeTodo = todoList[props.match.params.id]
            setTodo_Description(activeTodo.todo_description);
                setTodo_Responsible(activeTodo.todo_responsible);
                setTodo_Priority(activeTodo.todo_priority);
                setTodo_Completed(activeTodo.todo_completed);
        }

    }, [])


    function onChangeTodoDescription(e) {
        setTodo_Description(e.target.value)

    }

    function onChangeTodoResponsible(e) {
        setTodo_Responsible(e.target.value);

    }

    function onChangeTodoPriority(e) {
        setTodo_Priority(e.target.value)

    }

    function onChangeTodoCompleted(e) {
        setTodo_Completed(!todo_completed);

    }

    function onSubmit(e) {
        e.preventDefault();
        const updatedTodoItem = {
            _id: props.match.params.id,
            todo_description: todo_description,
            todo_responsible: todo_responsible,
            todo_priority: todo_priority,
            todo_completed: todo_completed
        };
        updateTodoItem(updatedTodoItem);
        // axios.post('http://localhost:4000/todos/update/' + props.match.params.id, obj)
        //     .then(res => console.log(res.data));

        props.history.push('/');
    }



    return (
        <div>
            <h3>Update Todo</h3>
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
                  <div className="form-check">
                      <input type="checkbox"
                          className="form-check-input"
                          id="completedCheckbox"
                          name="completedCheckbox"
                          onChange={onChangeTodoCompleted}
                          checked={todo_completed}
                          value={todo_completed}
                      />
                      <label className="form-check-label" htmlFor="completedCheckbox">
                          Completed
                          </label>
                  </div>
                  <br />
                  <div className="form-group">
                      <input type="submit" value="Update Todo" className="btn btn-primary" />
                  </div>
              </div>
          </form> 
          
        </div>
    )
}