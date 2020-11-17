import {put, call, takeLatest} from 'redux-saga/effects';
import {getDogsList, getDogsListSuccess, getDogsListFailure} from './slice';
import {fetchListDogs} from './api';

export function* getListDogsSaga() {
  try {
    const response = yield call(fetchListDogs);
    yield put(getDogsListSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(getDogsListFailure(error));
  }
}
const dogsSaga = () => [takeLatest(getDogsList, getListDogsSaga)];
export default dogsSaga();
