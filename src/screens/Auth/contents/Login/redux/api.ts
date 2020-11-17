import {get, post} from '@utils/api';

export const loginApi = async (data: any) => post('/users/login', data);
