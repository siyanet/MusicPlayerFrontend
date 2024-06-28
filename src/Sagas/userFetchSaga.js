import { takeEvery,call, put } from "redux-saga/effects";
import axiosInstance from "../Components/AxiosInstance";
import { USER_FETCH_REQUEST, userFetchFailure, userFetchSuccess } from "../Actions/UserAction";
function userFetch(){
    try{
        return axiosInstance.get("/user",);
    }
catch(e){
    throw new Error("can't fetch user");
}}

function* workerFetchuser(){
    try{
        const response = yield call(userFetch);
        const user = response.data;
        yield put(userFetchSuccess(user));
    }
    catch(e){
        yield put(userFetchFailure(e.message));
    }
}
function* userSaga(){
    yield takeEvery(USER_FETCH_REQUEST,workerFetchuser);
}
export default userSaga;