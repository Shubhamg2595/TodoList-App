import { put } from 'redux-saga/effects'
import { fetchTodosSuccess, fetchTodosError, addTodo, addTodoError, addTodoSuccess, editTodoByIdSuccess, editTodoByIdError, deleteTodoById, deleteTodoByIdSuccess, deleteTodoByIdError } from '../Actions/actions';

const posts = [
    {
        _id: "5eb7fd30aea05479dd6ff2a4",
        todo_description: "setup TODO app with react",
        todo_responsible: "Shubham Gupta",
        todo_priority: "High",
        todo_completed: true,
    },
    {
        _id: "5eb7fd30aea05479dd6ff214",
        todo_completed: false,
        todo_description: "test",
        todo_priority: "Medium",
        todo_responsible: "sdaa",
    }
]

export function* fetchTodosSaga(action) {
    console.log('fetchTodosSaga initiated', action);
    try {
        // yield put(fetchTodosSuccess(posts));
        yield put(fetchTodosSuccess());
    }
    catch (err) {
        if (err.response) {
           
            console.error('Error Data', err.response.data);
            console.error('Error status', err.response.status);
            if (err.response.data && err.response.data.message) {
                yield put(fetchTodosError(err.response.data))
            }
        }
    }
}


export function* addNewTodoItemSaga(action) {
    console.log('addNewTodoItemSaga initiated', action);
    try {
        yield put(addTodoSuccess(action.payload));
    }
    catch (err) {
        if (err.response) {
           
            console.error('Error Data', err.response.data);
            console.error('Error status', err.response.status);
            if (err.response.data && err.response.data.message) {
                yield put(addTodoError(err.response.data))
            }
        }
    }
}

export function* updateTodoItemSaga(action) {
    console.log('updateTodoItemSaga initiated', action);
    try {
        yield put(editTodoByIdSuccess(action.payload));
    }
    catch (err) {
        if (err.response) {
           
            console.error('Error Data', err.response.data);
            console.error('Error status', err.response.status);
            if (err.response.data && err.response.data.message) {
                yield put(editTodoByIdError(err.response.data))
            }
        }
    }
}

export function* deleteTodoItemSaga(action) {
    console.log('deleteTodoItemSaga initiated', action);
    try {
        yield put(deleteTodoByIdSuccess(action.payload));
    }
    catch (err) {
        if (err.response) {
           
            console.error('Error Data', err.response.data);
            console.error('Error status', err.response.status);
            if (err.response.data && err.response.data.message) {
                yield put(deleteTodoByIdError(err.response.data))
            }
        }
    }
}
