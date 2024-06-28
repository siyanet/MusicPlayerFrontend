
import {
    UPDATE_SONG_SUCCESS,
    UPDATE_SONG_FAILURE,
    UPDATE_SONG_REQUEST,
    CLEAR_UPDATE_SONG_STATE,
  } from '../Actions/UpdateSongsActions';
  
  const initialState = {
    success: null,
    error: null,
    loading: false,
  };
  
  const updateSongsReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_SONG_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          success: null,
        };
      case UPDATE_SONG_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          success: true,
        };
      case UPDATE_SONG_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          success: null
        };
      case CLEAR_UPDATE_SONG_STATE:
        return{
          ...state,
          loading: false,
          error: null,
          success: null
        };
      default:
        return state;
    }
  };
  
  export default updateSongsReducer;
  