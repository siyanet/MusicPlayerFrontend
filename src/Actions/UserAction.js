export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
export const USER_FETCH_REQUEST = 'USER_FETCH_REQUEST';
export const USER_STATE_CLEAR = 'USER_STATE_CLEAR';

export const userFetchSuccess = (user) => ({
    type: USER_FETCH_SUCCESS,
    payload: user
});
export const userFetchRequest = () => ({
    type: USER_FETCH_REQUEST
});
export const userFetchFailure = (error) => ({
    type: USER_FETCH_FAILURE,
    payload: error,
});
export const userStateClear = () => ({
    type: USER_STATE_CLEAR

});