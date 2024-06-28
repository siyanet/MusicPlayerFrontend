export const GET_DEFAULT_SONGS_SUCCESS = 'GET_DEFAULT_SONGS_SUCCESS';
export const GET_DEFAULT_SONGS_FAILURE = 'GET_DEFAULT_SONGS_FAILURE';
export const GET_DEFAULT_SONGS_FETCH = 'GET_DEFAULT_SONGS_FETCH';

export const getDefaultSongsSuccess = (songs) => ({
    type: GET_DEFAULT_SONGS_SUCCESS,
    payload: songs
});
export const getDefaultSongsFetch = () => ({
    type: GET_DEFAULT_SONGS_FETCH,
});
export const getDefaultSongsFailure = (error) => ({
    type: GET_DEFAULT_SONGS_FAILURE,
    payload: error,
});