import {createSelector} from 'reselect';
import _ from 'lodash';

const listEventSelector = (state: any) => state.meals.list;
const listIdsSelector = (state: any) => state.meals.ids;

export const getListEventSelector = createSelector(
  [listEventSelector, listIdsSelector],
  (data, ids) => _.values(_.map(ids, (id) => data[id])),
);
