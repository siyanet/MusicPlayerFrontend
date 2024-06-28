export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_CLEAR = 'LOGIN_CLEAR';
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});
export const loginRequest = (username,password) => ({
    type : LOGIN_REQUEST,
    payload: {username,password}
});
export const loginError = (error) =>({
    type: LOGIN_ERROR,
    payload: error
});
export const clearLoginState = () =>({
    type: LOGIN_CLEAR
});