import { takeLatest,call,put } from "redux-saga/effects";
import { DELETE_SONG_REQUEST, deleteSongFailure, deleteSongSuccess } from "../Actions/deleteSongAction";
import axiosInstance from "../Components/AxiosInstance";

function deleteSong(songId){
    try{
        return axiosInstance.delete(`/songDelete/${songId}/`);
    }
    catch(e){
        throw new Error("error while deleting the data");
    }
    

}
function* deleteSongWorker(action){
    const songId = action.payload.payload;
    
    try{
        const song = yield call(deleteSong,songId);
        yield put(deleteSongSuccess(song));
    }
    catch(e){
        yield put(deleteSongFailure(e.message));
    }

}
function* deleteSongSaga(){
    yield takeLatest(DELETE_SONG_REQUEST,deleteSongWorker);

}
export default deleteSongSaga;