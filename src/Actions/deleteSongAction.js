export const DELETE_SONG_SUCCESS = 'DELETE_SONG_SUCCESS';
export const DELETE_SONG_FAILURE = 'DELETE_SONG_FAILURE';
export const DELETE_SONG_REQUEST = 'DELETE_SONG_REQUEST';
export const CLEAR_SONG_DELETE_STATE  ='CLEAR_SONG_DELETE_STATE';
export const deleteSongSuccess = (song) => ({
    type: DELETE_SONG_SUCCESS,
    payload: song
});
export const deleteSongRequest = (payload) => ({
    type: DELETE_SONG_REQUEST,
    payload: {payload}
});
export const deleteSongFailure = (error) => ({
    type: DELETE_SONG_FAILURE,
    payload: error,
});
export const clearSongDeleteState = () => ({
    type: CLEAR_SONG_DELETE_STATE,
});