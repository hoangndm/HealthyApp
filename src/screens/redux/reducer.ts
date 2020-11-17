import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import dogs from '../Dogs/redux/slice';

const persistConfig = {
  key: 'dogs',
  storage: AsyncStorage,
};
const main = persistReducer(
  persistConfig,
  combineReducers({
    dogs,
  }),
);
export default main;
