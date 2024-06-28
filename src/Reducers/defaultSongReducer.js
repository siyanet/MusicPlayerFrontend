import { GET_DEFAULT_SONGS_FAILURE,GET_DEFAULT_SONGS_SUCCESS } from "../Actions/DefaultSongAction";

const initialState = {
    songs: [],
    error: null,
};
const defaultSongsReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_DEFAULT_SONGS_SUCCESS:
            return {...state, songs: action.payload};
        case GET_DEFAULT_SONGS_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;

    }

}
export default defaultSongsReducer;