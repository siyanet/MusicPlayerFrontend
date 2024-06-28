import { LOGOUT_REQUEST, LOGOUT_STATE_CLEAR } from '../Actions/LogoutAction';

const initialState = {
    loggedOut: false,
};

const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_REQUEST:
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return {
                ...state,
                loggedOut: true,
            };
        case LOGOUT_STATE_CLEAR:
            return{
                ...state,
                loggedOut: false
            }
        default:
            return state;
    }
};

export default logoutReducer;
