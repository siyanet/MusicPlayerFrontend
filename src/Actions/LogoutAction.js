export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_STATE_CLEAR = 'LOGOUT_STATE_CLEAR';

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST,
});
export const logoutStateClear = () => ({
    type: LOGOUT_STATE_CLEAR,
});