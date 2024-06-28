import { takeLatest,put,call } from "redux-saga/effects";
import { UPDATE_SONG_FAILURE,UPDATE_SONG_REQUEST, UPDATE_SONG_SUCCESS } from "../Actions/UpdateSongsActions";
import axiosInstance from "../Components/AxiosInstance";

 function updateSong(songId, updatedData) {
 
    
    try{
        return axiosInstance.patch(`songUpdate/${songId}/`,updatedData);
    }
catch(e){
    throw new Error("can't update the song");
}}

        


function* update(action) {
    const { payload } = action.payload;
    try {
        const updatedData = { title: payload.updatedTitle, artist: payload.updatedArtist };
        const updatedSong = yield call(updateSong, payload.songId, updatedData);
        
        yield put({
            type: UPDATE_SONG_SUCCESS,
            payload: updatedSong,
        });
    } catch (e) {
        yield put({
            type: UPDATE_SONG_FAILURE,
            payload: { error: e.message },
        });
    }
}

export function* updateSongSaga() {
    yield takeLatest(UPDATE_SONG_REQUEST, update);
}

