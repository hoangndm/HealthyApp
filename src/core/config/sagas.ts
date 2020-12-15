import {all} from 'redux-saga/effects';
import authSaga from '../../screens/Auth/redux/saga';
import notiSaga from '../../screens/Notification/redux/saga';
import mealSaga from '../../screens/Food/redux/saga';
export default function* root() {
  yield all([...authSaga, ...notiSaga, ...mealSaga]);
}
