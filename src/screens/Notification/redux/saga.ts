import {put, call, takeLatest, select} from 'redux-saga/effects';
import {getList, getListSuccess, getListFailure} from './slice';
import {listNotifiApi} from './api';
import _ from 'lodash';

export function* getListNotiSaga({payload}: {payload: any}) {
  try {
    const {isNextPage, resetData} = payload;
    const page = yield select((state) => state.noti.page);
    const fetchedPage = _.has(payload, 'resetData')
      ? 0
      : isNextPage
      ? page + 1
      : page;
    const response = yield call(listNotifiApi, fetchedPage);
    const newResponse = {
      isResetData: resetData || false,
      page: fetchedPage,
      data: response.results,
      total: response.total,
    };
    if (_.has(payload, 'resetData')) {
      yield put(getListSuccess(newResponse));
    }
    yield put(getListSuccess(newResponse));
  } catch (error) {
    yield put(getListFailure(error));
  }
}
const notiSaga = () => [takeLatest(getList, getListNotiSaga)];
export default notiSaga();
