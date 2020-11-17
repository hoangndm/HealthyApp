import {createSlice} from '@reduxjs/toolkit';
import {convertArrayToObject} from '@src/core/utils/functions';
import _ from 'lodash';

interface IDogs {
  ids: any;
  data: any;
  loading: boolean;
  error: string | null;
}

const INITIAL_STATE: IDogs = {
  ids: [],
  data: {},
  loading: false,
  error: null,
};

const dogs = createSlice({
  name: 'dogs',
  initialState: INITIAL_STATE,
  reducers: {
    getDogsList: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    getDogsListSuccess: (state, action) => ({
      ...state,
      data: action.payload.isResetData
        ? convertArrayToObject(action.payload, 'id')
        : _.merge({}, state.data, convertArrayToObject(action.payload, 'id')),
      ids: action.payload.isResetData
        ? _.uniq([...action.payload.map((e: any) => e.id)])
        : _.uniq([...state.ids, ...action.payload.map((e: any) => e.id)]),
      loading: false,
      error: null,
    }),
    getDogsListFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
});
export const {
  getDogsList,
  getDogsListSuccess,
  getDogsListFailure,
} = dogs.actions;

export default dogs.reducer;
