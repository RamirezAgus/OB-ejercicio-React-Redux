import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { API_CALL_REQUEST } from '../actions/asyncActions'

//Watcher Saga
export function* watcherSaga(){
    //Listens the action and starts a Worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

//Worker Saga
export function* workerSaga(action){
    try {
        const response = yield call(fetchHttp(action.payload.request))
        //We obtain the token from response
        const token = response.data.token;
        yield put ({
            type: action.payload.okAction, // API_CALL_SUCCESS
            payload: {
                token: token
            } 
        });
    } catch (error) {
        yield put ({
            type: action.payload.failAction, //API_CALL_FAILURE
            payload: {
                error: error
            }
        });
    }
}

function fetchHttp(request){
    return function(){
        return(axios(request))
    }
}