import Config from 'react-native-config';
import _ from 'lodash';

const globalVar: any = global;

const checkIfErrorOccurs = (res: any) => {
  return {
    code: res.status,
    res,
  };
};

const TIME_OUT = 10000;

async function xfetch(
  path: RequestInfo,
  headerOptions: RequestInit,
  ops = {noParse: false},
) {
  const normalFetch = fetch(path, headerOptions);
  if (ops.noParse) {
    return timeoutPromise(TIME_OUT, normalFetch);
  }
  const res: any = await timeoutPromise(
    TIME_OUT,
    normalFetch.then(checkIfErrorOccurs),
  );

  if (res.code < 300) {
    if (res.code === 204) {
      return {success: true};
    }
    const response = await res.res.json();
    return response;
  }
  try {
    const response = await res.res.json();
    const err = {
      code: res.code,
      message: response.message,
    };
    throw err;
  } catch (e) {
    if (res.code === 426) {
      const err = {
        code: res.code,
        message:
          'We have had some significant upgrades for the app. Please click below to upgrade your app!',
      };
      throw err;
    } else {
      const err = {
        code: res.code,
        message: e.message ? e.message : 'Something wrong. Please try again.',
      };
      throw err;
    }
  }
}

export const timeoutPromise = function timeoutPromise(ms: any, promise: any) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Request time out! Please try again.'));
    }, ms);
    promise.then(
      (res: any) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err: any) => {
        clearTimeout(timeoutId);
        reject(err);
      },
    );
  });
};

export default xfetch;

function requestWrapper(method: string) {
  return async (_url: string, _data: any = null, _params: any = {}) => {
    let url = _url;
    let data = _data;
    let params = _params;
    const isFullUrl = _.startsWith(url, 'http');

    url = isFullUrl ? url : Config.API_URL + url;
    console.log('url', url);
    if (method === 'GET') {
      // is it a GET?
      // GET doesn't have data
      params = data;
      if (params !== null) {
        url = `${url}?${getQuerystring(params)}`;
      }
      data = null;
    } else if (data === Object(data)) {
      // (data === Object(data)) === _.isObject(data)
      data = JSON.stringify(data);
    }

    interface IRequest {
      method: string;
      headers: any;
      body: Object | null;
    }

    // default params for fetch = method + (Content-Type)
    const defaults: IRequest = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: null,
    };

    if (globalVar.token && !isFullUrl) {
      defaults.headers.Authorization = `${globalVar.token}`;
    }
    if (data) {
      defaults.body = data;
    }

    const paramsObj = {
      ...defaults,
      headers: {...params, ...defaults.headers},
    };
    return xfetch(url, paramsObj);
  };
}

function getQuerystring(params: any) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map((k) => `${esc(k)}=${esc(params[k])}`)
    .join('&');
}

export const get = requestWrapper('GET');
export const post = requestWrapper('POST');
export const put = requestWrapper('PUT');
export const patch = requestWrapper('PATCH');
export const del = requestWrapper('DELETE');
