import {createSelector} from 'reselect';
import _ from 'lodash';

const listNotiSelector = (state: any) => state.noti?.list;
const listIdsSelector = (state: any) => state.noti?.ids;

export const getListNotiSelector = createSelector(
  [listNotiSelector, listIdsSelector],
  (data, ids) => _.values(_.map(ids, (id) => data[id])),
);
