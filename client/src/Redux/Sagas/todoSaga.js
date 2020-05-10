import { put } from 'redux-saga/effects'
import { fetchTodosSuccess, fetchTodosError, addTodo, addTodoError, addTodoSuccess } from '../Actions/actions';

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
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
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
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error Data', err.response.data);
            console.error('Error status', err.response.status);
            if (err.response.data && err.response.data.message) {
                yield put(addTodoError(err.response.data))
            }
        }
    }
}

// export function* fetchAllPostsSaga(action) {
//     console.log('fetchAllPostsSaga saga initiated', action);
//     try {
//         const page = action.pageNum;
//         const token = localStorage.getItem('token');
//         const loadPostsResponse = yield axios.get(`feed/posts?page=${page}`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         );
//         if (loadPostsResponse.status === 200) {
//             yield put(fetchPostsSuccess(loadPostsResponse.data))
//         }
//     }
//     catch (err) {
//         if (err.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.error('Error Data', err.response.data);
//             console.error('Error status', err.response.status);
//             if (err.response.data && err.response.data.message) {
//                 yield put(fetchPostsError(err.response.data))
//             }
//         }
//     }
// }

// export function* addNewPostSaga(action) {
//     console.log('addNewPostSaga saga initiated', action);
//     try {
//         const token = localStorage.getItem('token');
//         const addPostResponse = yield axios.post(`feed/post`,
//             action.payload,
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         );
//         if (addPostResponse.status === 201) {
//             debugger
//             yield put(addPostSuccess(addPostResponse.data))
//         }
//     }
//     catch (err) {
//         if (err.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.error('Error Data', err.response.data);
//             console.error('Error status', err.response.status);
//             if (err.response.data && err.response.data.message) {
//                 yield put(addPostError(err.response.data))
//             }
//         }
//     }
// }


// export function* fetchPostByIdSaga(action) {
//     console.log('fetchPostByIdSaga initiated', action);
//     const postId = action.payload;
//     try {
//         const token = localStorage.getItem('token');
//         const fetchPostResponse = yield axios.get(`feed/posts/${postId}`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         );
//         if (fetchPostResponse.status === 200) {
//             yield put(fetchPostByIdSuccess(fetchPostResponse.data))
//         }
//     }
//     catch (err) {
//         if (err.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.error('Error Data', err.response.data);
//             console.error('Error status', err.response.status);
//             if (err.response.data && err.response.data.message) {
//                 yield put(fetchPostByIdError(err.response.data))
//             }
//         }
//     }
// }
