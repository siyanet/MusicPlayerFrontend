import { DELETE_SONG_REQUEST,DELETE_SONG_SUCCESS,DELETE_SONG_FAILURE, CLEAR_SONG_DELETE_STATE } from "../Actions/deleteSongAction";


const initialState = {
    success: null,
    error: null,
    loading: false,
};

export const deleteSongReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_SONG_REQUEST:
            return {
                ...state,
                success: null,
                error: null,
                loading: true,
            };
        case DELETE_SONG_SUCCESS:
            return {
                ...state,
                success: action.payload,
                error: null,
                loading: false,
            };
        case DELETE_SONG_FAILURE:
            return {
                ...state,
                success: null,
                error: action.payload,
                loading: false,
            };
        case CLEAR_SONG_DELETE_STATE:
            return{
                ...state,
                success: null,
                error: null,
                loading: false,
            };
        default:
            return state;
    }
};
