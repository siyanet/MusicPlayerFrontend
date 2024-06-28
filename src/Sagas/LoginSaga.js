import { takeEvery,call,put } from "redux-saga/effects";
import { LOGIN_REQUEST, loginError, loginSuccess } from "../Actions/LoginAction";



function login(formData, api) {
    return fetch(api, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error("something went wrong");
            });
        }
        return response.json();
    });
}
function* loginWorker (action) {
    const {username,password}= action.payload;
    try{
        const formData = new FormData();
        formData.append('username',username);
        formData.append('password',password);
        const  api = "https://siyanet.pythonanywhere.com/api/token/access";
        const tokens = yield call(login,formData,api);
        const { access, refresh } = tokens;
        localStorage.clear();
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
    
    yield put(loginSuccess());
}
catch(e){
   yield put(loginError(e.message));
}
}
function* loginSaga(){
yield takeEvery(LOGIN_REQUEST,loginWorker);
}
export default loginSaga;