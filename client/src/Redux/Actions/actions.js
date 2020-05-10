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



export const editTodoById = (postId) => (
    {
        type: Constants.EDIT_TODO_POST,
        payload: postId,
    }
);

export const editTodoByIdSuccess = (successres) => (
    {
        type: Constants.EDIT_TODO_POST_SUCCESS,
        payload: successres
    }
);

export const editTodoByIdError = (error) => (
    {
        type: Constants.EDIT_TODO_POST_ERROR,
        payload: error,
    }
);


