import { takeLatest,put,call } from "redux-saga/effects";
import { CREATE_SONG_REQUEST, createSongFailure, createSongSuccess } from "../Actions/CreateSongsActions";
import axiosInstance from "../Components/AxiosInstance";


function createSong(data){
    try{
        return axiosInstance.post("/songs/create",data);
    }
catch(e){
    throw new Error("can't create song");
}}






function* createSongWorker(action){
    const formData = action.payload;
    try{
        const song = yield call(createSong,formData);
        yield put(createSongSuccess(song));
    }
    catch(e){
        yield put(createSongFailure(e.message));
    }

}
function* createSongSaga(){
    yield takeLatest(CREATE_SONG_REQUEST,createSongWorker);
}
export default createSongSaga;