import {createSelector} from 'reselect';
import _ from 'lodash';

const dogsDataSelector = (state: any) => state.main.dogs?.data;
const dogsIdsSelector = (state: any) => state.main.dogs?.ids;

export const getDogsListSelector = createSelector(
  [dogsDataSelector, dogsIdsSelector],
  (data, ids) => _.values(_.map(ids, (id) => data[id])),
);
