/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {convertArrayToObject} from '@utils/functions';
import _ from 'lodash';

interface IMeals {
  ids: any;
  list: any;
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
}

const INITIAL_STATE: IMeals = {
  ids: [],
  list: {},
  loading: false,
  error: null,
  total: 0,
  page: 0,
};

const meals = createSlice({
  name: 'meals',
  initialState: INITIAL_STATE,
  reducers: {
    getList: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    getListSuccess: (state, action) => ({
      ...state,
      list: action.payload.isResetData
        ? convertArrayToObject(action.payload.data, 'id')
        : _.merge(
            {},
            state.list,
            convertArrayToObject(action.payload.data, 'id'),
          ),
      ids: action.payload.isResetData
        ? _.uniq([...action.payload.data.map((e: any) => e.id)])
        : _.uniq([...state.ids, ...action.payload.data.map((e: any) => e.id)]),
      loading: false,
      page: action.payload.page,
      total: action.payload.total,
      error: null,
    }),
    getListFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});
export const {getList, getListSuccess, getListFailure} = meals.actions;

export default meals.reducer;
