import {put, call, takeLatest, select} from 'redux-saga/effects';
import {getList, getListSuccess, getListFailure} from './slice';
import {listEventApi} from './api';
import _ from 'lodash';

export function* getListMealsSaga({payload}: {payload: any}) {
  try {
    const {isNextPage, resetData} = payload;
    const page = yield select((state) => state.meals.page);
    const fetchedPage = _.has(payload, 'resetData')
      ? 0
      : isNextPage
      ? page + 1
      : page;
    const response = yield call(listEventApi, fetchedPage);
    const newResponse = {
      isResetData: resetData || false,
      page: fetchedPage,
      data: response,
      total: response?.total,
    };
    if (_.has(payload, 'resetData')) {
      yield put(getListSuccess(newResponse));
    }
    yield put(getListSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(getListFailure(error));
  }
}
const mealsSaga = () => [takeLatest(getList, getListMealsSaga)];
export default mealsSaga();
