import { routeActions } from 'react-router-redux';
import * as Api from '../utils/ApiClient';
export const AUTH = 'AUTH';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_FORGOT = 'AAUTH_FORGOT';
export const AUTH_FORGOT_FAIL = 'AUTH_FORGOT_FAIL';
export const AUTH_FORGOT_SUCCESS = 'AUTH_FORGOT_SUCCESS';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAIL = 'AUTH_LOGOUT_FAIL';

const auth = (username) => ({type: AUTH, payload: {username}});

const loggedIn = (data) => ({
  type: AUTH_SUCCESS,
  payload: data
});

const failedLogin = (data) => ({
  type: AUTH_FAIL,
  payload: data
});


const _logout = () => ({ type: AUTH_LOGOUT });

const _logoutFail = (err) => ({
  type: AUTH_LOGOUT_FAIL,
  payload: err
});

const _logoutSuccess = () => ({
  type: AUTH_LOGOUT_SUCCESS
});

const forgot = (data) => ({
  type: AUTH_FORGOT,
  payload: data
});

const failedForgotPassword = (data) => ({
  type: AUTH_FORGOT_FAIL,
  payload: data
});

const successForgotPassword = (data) => ({
  type: AUTH_FORGOT_SUCCESS,
  payload: data
});

export const login = ({username, password}) => {

  return (dispatch) => {
    dispatch(auth(username));

    Api.login(username, password)
    .then((data) => {
      dispatch(loggedIn(data));
      sessionStorage.setItem('token', data.token);
      dispatch(routeActions.push('/'));
    })
    .catch( (error) => dispatch(failedLogin(error)));
  };

};

export const logout = () => (dispatch) => {
  dispatch(_logout());
  Api.logout()
  .then(() => {
    dispatch(_logoutSuccess());
    dispatch(routeActions.replace('/login'));
    sessionStorage.removeItem('token');
  })
  .catch((err) => dispatch(_logoutFail(err)));
};

export const loginCheckToken = () => {
  const token = sessionStorage.getItem('token');

  return (dispatch) => {
    dispatch(loggedIn({token}));
  };
};

export const forgotPassword = ({username}) => {
  return (dispatch) => {
    dispatch(forgot());

    Api.forgotPassword(username)
    .then((data) => {
      dispatch(successForgotPassword(data));
    })
    .catch( error => dispatch(failedForgotPassword(error)));
  };
};
