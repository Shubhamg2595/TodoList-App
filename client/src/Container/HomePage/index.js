import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../logo.png";


import CreateTodo from "../../components/create-todo";
import EditTodo from "../../components/edit-todo";
import TodosList from "../../components/todos-list";

import { fetchTodos, addTodo, editTodoById, deleteTodoById } from '../../Redux/Actions/actions'

import { connect } from 'react-redux';


function Home(props) {
    const { getAllTodos, todoList, addNewTodoItem, updateTodoItem, updateActiveTodoItem, removeTodoItem } = props;
    return (
        <Router>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#" target="_blank" rel="noopener noreferrer">
                        <img src={logo} width="30" height="30" alt="Todo App" />
                    </a>
                    <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                    <div className="collpase nav-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Todos</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Todo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route path="/"
                    exact
                    render={props => (
                        <TodosList
                            getAllTodos={getAllTodos}
                            todoList={todoList}
                            updateActiveTodoItem={updateActiveTodoItem}
                            removeTodoItem={removeTodoItem}
                        />
                    )}
                />
                <Route path="/create"

                    render={props => (
                        <CreateTodo
                            {...props}
                            addNewTodoItem={addNewTodoItem}
                        />
                    )}
                />

                <Route path="/edit/:id"
                    render={props => (
                        <EditTodo
                            {...props}
                            todoList={todoList}
                            updateTodoItem={updateTodoItem}
                        />
                    )}
                />
            </div>
        </Router>
    );
}




function mapStateToProps(state) {
    return {
        todos: state.todo.todos,
        loading: state.todo.loading,
        todoList: state.todo.todos,
        activeTodoItem: state.todo.activeTodoId,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllTodos: () => dispatch(fetchTodos()),
        addNewTodoItem: (todoItem) => dispatch(addTodo(todoItem)),
        updateTodoItem: (todoItem) => dispatch(editTodoById(todoItem)),
        removeTodoItem: (todoId) => dispatch(deleteTodoById(todoId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);