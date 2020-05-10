import { Constants } from '../Constants/constants';

export const initialState = {
    loading: false,
    todos: [],
    totalTodos: 0,
    error: null,
    currentTodo: null,
}

let newTodo;
let updatedTodos;


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case Constants.FETCH_TODOS:
            console.log('FETCH_TODOS REDUCER');
            return {
                ...state,
                loading: true,
            }
        case Constants.FETCH_TODOS_SUCCESS:
            console.log('FETCH_TODOS_SUCCESS REDUCER');
            // let totalItems = action.payload.length;
            // let modTodos = todoListReducer(action.payload);
            return {
                ...state,
                // todos: modTodos,
                // totalTodos: totalItems,
                loading: false,
            }
        case Constants.FETCH_TODOS_ERROR:
            console.log('FETCH_TODOS_ERROR REDUCER');
            return {
                ...state,
                error: action.payload.error
            }


        case Constants.ADD_NEW_TODO:
            console.log('ADD_NEW_TODO REDUCER');
            return {
                ...state,
                loading: true,
            }
        case Constants.ADD_NEW_TODO_SUCCESS:
            console.log('ADD_NEW_TODO_SUCCESS REDUCER');
            let newTodo = todoListReducer([action.payload])
            return {
                ...state,
                todos: { ...newTodo, ...state.todos },
                totalPosts: state.totalTodos + 1,
                loading: false,
            }
        case Constants.ADD_NEW_TODO_ERROR:
            console.log('ADD_NEW_TODO_ERROR REDUCER');
            return {
                ...state,
                error: action.payload.error
            }

        default:
            return state;

    }
}


function todoListReducer(todoList) {
    let reducedTodos = {};
    todoList.map(todo => {
        reducedTodos[todo._id] = { ...todo }

    })
    return reducedTodos;
}
