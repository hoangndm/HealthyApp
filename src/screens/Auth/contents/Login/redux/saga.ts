import {put, call, takeLatest, select} from 'redux-saga/effects';
import {Login, LoginSuccess, LoginFailure, logout} from './slice';
import {loginApi} from './api';
import {Global} from '@src/core/utils/appHelper';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '@utils/navigation';
import rootStack from '@screens/routes';
import homeStack from '@screens/Home/routes';
import authStack from '@screens/Auth/routes';

async function removeAsyncStorageData() {
  await AsyncStorage.removeItem('persist:auth');
  await AsyncStorage.removeItem('persist:root');
  return true;
}

export function* LoginSaga({payload}: {payload: any}) {
  try {
    const data = payload;
    const response = yield call(loginApi, data);
    Global.user = response;
    Global.token = response.token;
    yield put(LoginSuccess(response));
    const requiredLogin = yield select((state) => state.auth.login.data.token);
    if (requiredLogin) {
      yield call(NavigationService.navigate, rootStack.homeStack, {
        screen: homeStack.homeScreen,
      });
    } else {
      yield call(NavigationService.goBack);
    }
  } catch (error) {
    yield put(LoginFailure(error));
  }
}
export function* LogoutSaga() {
  try {
    yield call(removeAsyncStorageData);
    yield put({type: 'RESET_REDUX'});
    const requiredLogin = yield select((state) => state.auth.login.data.token);
    if (!requiredLogin) {
      yield call(NavigationService.navigate, rootStack.authStack, {
        screen: authStack.loginScreen,
      });
    } else {
      yield call(NavigationService.goBack());
    }
    return true;
  } catch (error) {
    return false;
  }
}
const loginSaga = () => [
  takeLatest(Login, LoginSaga),
  takeLatest(logout, LogoutSaga),
];
export default loginSaga();
