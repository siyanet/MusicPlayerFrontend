import { takeEvery,put,call } from "redux-saga/effects";
import { USER_REGISTER_REQUEST, userRegisterError, userRegisterSuccess } from "../Actions/RegiserAction";

function register(formData, api) {
    return fetch(api, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error("can't register user");
            });
        }
        return response.json();
    });
}

function* registerWorker (action) {
    const {username,password}= action.payload;
    try{
        const formData = new FormData();
        formData.append('username',username);
        formData.append('password',password);
       
        
           const  api = "https://siyanet.pythonanywhere.com/api/register";
           yield call(register,formData,api);
        
        yield put(userRegisterSuccess());
    }
    catch(e){
       yield put(userRegisterError(e.message));
    }
}
function* registerSaga(){
    yield takeEvery(USER_REGISTER_REQUEST,registerWorker);
}
export default registerSaga;