import { call, put, takeEvery } from 'redux-saga/effects';

function* logInSaga(action) {
    try {
        const response = yield call(loIn, action.payload);
        
    }
}


function* saga( ) {
    yield takeEvery('TRY_LOG_IN', logInSaga);
    yield takeEvery('TRY_LOG_IN', signInSaga);
}

export default saga;