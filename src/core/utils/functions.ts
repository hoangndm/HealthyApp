import _ from 'lodash';

export function convertArrayToObject(arr: any, key: any): object {
  return _.reduce(
    arr,
    (result: any, cur) => {
      result[cur[key]] = cur;
      return result;
    },
    {},
  );
}
export function formatDataFlatList(arrObj: any, obj: any) {
  arrObj.map((item: any) => {
    for (const property in obj) {
      if (property.localeCompare(item.key) === 0) {
        item.value = obj[property];
      }
    }
  });
  return arrObj;
}
