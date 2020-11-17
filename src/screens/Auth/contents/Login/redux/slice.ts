import {createSlice} from '@reduxjs/toolkit';

interface ILogin {
  data: any;
  loading: boolean;
  error: string | null;
}

const INITIAL_STATE: ILogin = {
  data: {},
  loading: false,
  error: null,
};

const login = createSlice({
  name: 'login',
  initialState: INITIAL_STATE,
  reducers: {
    Login: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    LoginSuccess: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
      error: null,
    }),
    LoginFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    logout: (state) => ({
      ...state,
      data: {},
    }),
  },
});
export const {Login, LoginFailure, LoginSuccess, logout} = login.actions;

export default login.reducer;
