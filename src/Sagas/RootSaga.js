import { all } from 'redux-saga/effects';
import songsSaga from './FetchSongsSaga';
import { updateSongSaga } from './UpdateSongSaga';
import createSongSaga from './CreateSongSaga';
import deleteSongSaga from './deleteSongSaga';
import registerSaga from './UserRegisterSaga';
import loginSaga from './LoginSaga';
import userSaga from './userFetchSaga';
import defaultSongSaga from './DefaultSongsSaga';


export default function* rootSaga() {
    yield all([
     songsSaga(),
     updateSongSaga(),
     createSongSaga(),
     deleteSongSaga(),
     registerSaga(),
     loginSaga(),
     userSaga(),
     defaultSongSaga(),

    ]);
  }