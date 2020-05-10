import { takeEvery } from 'redux-saga/effects'
import { Constants } from '../Constants/constants';
import { fetchTodosSaga, addNewTodoItemSaga, updateTodoItemSaga, deleteTodoItemSaga } from './todoSaga';


// watcher Saga
function* rootSaga() {
    yield takeEvery(Constants.FETCH_TODOS, fetchTodosSaga)
    yield takeEvery(Constants.ADD_NEW_TODO, addNewTodoItemSaga)
    yield takeEvery(Constants.EDIT_TODO, updateTodoItemSaga)
    yield takeEvery(Constants.DELETE_TODO, deleteTodoItemSaga)
}

export default rootSaga;