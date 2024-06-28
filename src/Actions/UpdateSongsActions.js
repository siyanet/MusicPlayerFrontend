export const UPDATE_SONG_SUCCESS = 'UPDATE_SONG_SUCCESS';
export const UPDATE_SONG_FAILURE = 'UPDATE_SONG_FAILURE';
export const UPDATE_SONG_REQUEST = 'UPDATE_SONG_REQUEST';
export const CLEAR_UPDATE_SONG_STATE = 'CLEARE_UPDATE_SONG_STATE';

export const updateSongSuccess = (song) => ({
    type: UPDATE_SONG_SUCCESS,
    payload: song
});
export const updateSongRequest = (payload) => ({
    type: UPDATE_SONG_REQUEST,
    payload: {payload},
});
export const updateSongFailure = (error) => ({
    type: UPDATE_SONG_FAILURE,
    payload: error,
});
export const clearUpdateSongState = () =>({
    type: CLEAR_UPDATE_SONG_STATE
});