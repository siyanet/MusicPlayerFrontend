export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';

export const userRegisterSuccess = () => ({
    type: 'USER_REGISTER_SUCCESS'
});
export const userRegisterRequest = (username,password,method) => ({
    type : 'USER_REGISTER_REQUEST',
    payload: {username,password}
});
export const userRegisterError = (error) =>({
    type: 'USER_REGISTER_ERROR',
    payload: error
});