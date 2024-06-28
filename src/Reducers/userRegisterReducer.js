import { USER_REGISTER_ERROR, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Actions/RegiserAction";

const initialState = {
    error: null,
    loading: false,
    success: null,
};

export const userRegisterReducer = (state = initialState,action) =>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return{
                ...state,
                error: null,
                loading: true,
                success: null,
            };
        case USER_REGISTER_SUCCESS:
            return{
                ...state,
                error: null,
                loading: false,
                success: true
            };
        case USER_REGISTER_ERROR:
            return{
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
            };
            default:
                return state;

        

    }
    

} ;