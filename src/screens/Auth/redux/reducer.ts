import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import login from '../contents/Login/redux/slice';

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};
const auth = persistReducer(
  persistConfig,
  combineReducers({
    login,
  }),
);
export default auth;
