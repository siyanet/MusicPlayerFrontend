export const CREATE_SONG_SUCCESS = 'CREATE_SONG_SUCCESS';
export const CREATE_SONG_FAILURE = 'CREATE_SONG_FAILURE';
export const CREATE_SONG_REQUEST = 'CREATE_SONG_REQUEST';
export const CLEAR_CREATE_SONG_STATE = 'CLEAR_CREATE_SONG_STATE';
export const createSongSuccess = (song) =>({
    type: CREATE_SONG_SUCCESS,
    payload: song,
});
export const createSongRequest = (formData)=>({
    type: CREATE_SONG_REQUEST,
    payload: formData,
});
export const createSongFailure = (error) =>({
    type: CREATE_SONG_FAILURE,
    payload: {error},
});
export const clearCreateSongState = () =>({
    type: CLEAR_CREATE_SONG_STATE
});
