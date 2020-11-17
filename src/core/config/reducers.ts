import {combineReducers} from 'redux';
import auth from '../../screens/Auth/redux/reducer';
import event from '../../screens/Event/redux/reducer';
import noti from '../../screens/Notification/redux/slice';
import {Global} from '../../core/utils/appHelper';
import AsyncStorage from '@react-native-community/async-storage';

const appReducers = combineReducers({
  auth,
  event,
  noti,
});

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_REDUX') {
    // eslint-disable-next-line no-console
    AsyncStorage.clear();
    console.log('RESET_REDUX Called');
    Global.token = '';
    state = undefined;
  }
  return appReducers(state, action);
};

export default rootReducer;
