import { takeEvery,call, put } from "redux-saga/effects";
import { GET_SONGS_FETCH, getSongsFailure, getSongsSuccess } from "../Actions/GetSongsActions";
import axiosInstance from "../Components/AxiosInstance";
function songsFetch(){
    try{
        return axiosInstance.get("/songs/");
    }
catch(e){
    throw new Error("can't fetch data");
}}

function* workerFetchSongs(){
    try{
        const response = yield call(songsFetch);
        const songs = response.data;
        yield put(getSongsSuccess(songs));
    }
    catch(e){
        yield put(getSongsFailure(e.message));
    }
}
function* songsSaga(){
    yield takeEvery(GET_SONGS_FETCH,workerFetchSongs);
}
export default songsSaga;