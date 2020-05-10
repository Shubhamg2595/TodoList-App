import { Constants } from '../Constants/constants'




export const fetchTodos = () => (
    {
        type: Constants.FETCH_TODOS,
    }
);

export const fetchTodosSuccess = (successres) => (
    {
        type: Constants.FETCH_TODOS_SUCCESS,
        payload: successres
    }
);

export const fetchTodosError = (error) => (
    {
        type: Constants.FETCH_TODOS_ERROR,
        payload: error,
    }
);

export const addTodo = (payload) => (
    {
        type: Constants.ADD_NEW_TODO,
        payload
    }
);

export const addTodoSuccess = (successres) => (
    {
        type: Constants.ADD_NEW_TODO_SUCCESS,
        payload: successres
    }
);

export const addTodoError = (error) => (
    {
        type: Constants.ADD_NEW_TODO_ERROR,
        payload: error,
    }
);


export const setActiveTodoItem = (todoId) => ({
    type: Constants.SET_ACTIVE_TODO,
    payload: todoId,
})


export const editTodoById = (todoId) => (
    {
        type: Constants.EDIT_TODO,
        payload: todoId,
    }
);

export const editTodoByIdSuccess = (successres) => (
    {
        type: Constants.EDIT_TODO_SUCCESS,
        payload: successres
    }
);

export const editTodoByIdError = (error) => (
    {
        type: Constants.EDIT_TODO_ERROR,
        payload: error,
    }
);

export const deleteTodoById = (todoId) => (
    {
        type: Constants.DELETE_TODO,
        payload: todoId,
    }
);

export const deleteTodoByIdSuccess = (successres) => (
    {
        type: Constants.DELETE_TODO_SUCCESS,
        payload: successres
    }
);

export const deleteTodoByIdError = (error) => (
    {
        type: Constants.DELETE_TODO_ERROR,
        payload: error,
    }
);


