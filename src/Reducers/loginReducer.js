import { LOGIN_CLEAR, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Actions/LoginAction";


const initialState = {
    error: null,
    loading: false,
    success: null,
};

export const loginReducer = (state = initialState,action) =>{
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                error: null,
                loading: true,
                success: null,
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                error: null,
                loading: false,
                success: true
            };
        case LOGIN_ERROR:
            return{
                ...state,
                error: action.payload.error,
                loading: false,
                success: false,
            };
        case LOGIN_CLEAR:
            return{
                ...state,
                error:null,
                loading: false,
                success: null,
            };
            default:
                return state;

        

    }
    

} ;