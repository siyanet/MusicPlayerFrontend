
import { USER_FETCH_FAILURE,USER_FETCH_REQUEST,USER_FETCH_SUCCESS, USER_STATE_CLEAR } from '../Actions/UserAction';
  
  const initialState = {
    success: null,
    error: null,
    loading: false,
  };
  
  const userFetchReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_FETCH_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          success: null,
        };
      case USER_FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          success: action.payload,
        };
      case USER_FETCH_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          success: null
        };
     case USER_STATE_CLEAR:
        return{
            ...state,
            loading: false,
            error: null,
            success:null
        }
      default:
        return state;
    }
  };
  
  export default userFetchReducer;