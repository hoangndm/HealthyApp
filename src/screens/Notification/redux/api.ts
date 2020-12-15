import {get} from '@utils/api';
import {isUndefined} from 'lodash';

export const listNotifiApi = async (page: number) => {
  const NUMBER_OF_PROPERTY_PER_PAGE = 7;
  let offset = page * NUMBER_OF_PROPERTY_PER_PAGE;
  offset = Math.max(offset, 0);
  let baseUrl = '/notifications?' + `limit=${NUMBER_OF_PROPERTY_PER_PAGE}`;
  if (!isUndefined(offset) && offset >= 0) {
    baseUrl += `&offset=${offset}`;
  }
  return get(baseUrl);
};
