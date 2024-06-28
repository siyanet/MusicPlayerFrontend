
import { CLEAR_CREATE_SONG_STATE, CREATE_SONG_FAILURE, CREATE_SONG_REQUEST, CREATE_SONG_SUCCESS } from "../Actions/CreateSongsActions";


const initialState = {
    success: null,
    error: null,
    loading: false,
};
export const createSongReducer = (state = initialState,action) =>{
    switch(action.type){
        case CREATE_SONG_REQUEST:
            return{
                ...state,
                success: null,
                error:null,
                loading: true,
            };
        case CREATE_SONG_SUCCESS:
            return{
                ...state,
            success: true,
            error: null,
            loading: false};
     
        case CREATE_SONG_FAILURE:
            return{
                ...state,
                success: null,
                error: action.payload.error,
                loading: false,
            };
        case CLEAR_CREATE_SONG_STATE:
            return{
                ...state,
                success: null,
                error: null,
                loading: false,
            }
            default: 
           return state;
    }
}