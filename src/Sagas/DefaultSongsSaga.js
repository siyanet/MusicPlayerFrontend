import { takeEvery,put,call } from "redux-saga/effects";
import { GET_DEFAULT_SONGS_FETCH, getDefaultSongsFailure, getDefaultSongsSuccess } from "../Actions/DefaultSongAction";


function defaultSongs() {
    return fetch('https://siyanet.pythonanywhere.com/api/defaultsong')
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(errorData.detail || "something went wrong");
                });
            }
            return response.json();
        });
}

function* defaultSongWorker () {
    try{
        const defaultSong = yield call(defaultSongs);
        yield put(getDefaultSongsSuccess(defaultSong));
    }
    catch(e){
       yield put(getDefaultSongsFailure(e.message));
    }
}
function* defaultSongSaga(){
    yield takeEvery(GET_DEFAULT_SONGS_FETCH,defaultSongWorker);
}
export default defaultSongSaga;