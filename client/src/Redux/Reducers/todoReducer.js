import { Constants } from '../Constants/constants';

export const initialState = {
    loading: false,
    todos: [],
    totalTodos: 0,
    error: null,
    activeTodoId: null,
}



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


        case Constants.SET_ACTIVE_TODO:
            console.log('SET_ACTIVE_TODO REDUCER');
            debugger;
            return {
                ...state,
                activeTodoId: action.payload,
            }

        case Constants.EDIT_TODO:
            console.log('EDIT_TODO REDUCER');
            return {
                ...state,
                loading: true,
            }
        case Constants.EDIT_TODO_SUCCESS:
            console.log('EDIT_TODO_SUCCESS REDUCER');
            // debugger
            // let updatedTodo = todoListReducer([action.payload])
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [action.payload._id]: action.payload
                },
                loading: false,
            }
        case Constants.EDIT_TODO_ERROR:
            console.log('EDIT_TODO_ERROR REDUCER');
            return {
                ...state,
                error: action.payload.error
            }

        case Constants.DELETE_TODO:
            console.log('DELETE_TODO REDUCER');
            return {
                ...state,
                loading: true,
            }
        case Constants.DELETE_TODO_SUCCESS:
            console.log('DELETE_TODO_SUCCESS REDUCER');
            delete state.todos[action.payload]
         
            return {
                ...state,
                loading: false,
            }
        case Constants.DELETE_TODO_ERROR:
            console.log('DELETE_TODO_ERROR REDUCER');
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
