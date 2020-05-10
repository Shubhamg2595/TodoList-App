import { takeEvery } from 'redux-saga/effects'
import { Constants } from '../Constants/constants';
import { fetchTodosSaga,addNewTodoItemSaga } from './todoSaga';


// watcher Saga
function* rootSaga() {
    yield takeEvery(Constants.FETCH_TODOS, fetchTodosSaga)
    yield takeEvery(Constants.ADD_NEW_TODO, addNewTodoItemSaga)
}

export default rootSaga;