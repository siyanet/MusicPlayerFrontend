
import { CLEAR_GET_SONGS_STATE, GET_SONGS_FAILURE, GET_SONGS_SUCCESS } from "../Actions/GetSongsActions";
const initialState = {
    songs: [],
    error: null,
};
const songsReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_SONGS_SUCCESS:
            return {...state, songs: action.payload};
        case GET_SONGS_FAILURE:
            return {...state, error: action.payload};
        case CLEAR_GET_SONGS_STATE:
            return{...state,songs: [],error: null};
            default:
            return state;

    }

}
export default songsReducer;