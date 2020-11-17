import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import events from '../contents/redux/slice';

const persistConfig = {
  key: 'event',
  storage: AsyncStorage,
};
const event = persistReducer(
  persistConfig,
  combineReducers({
    events,
  }),
);
export default event;
