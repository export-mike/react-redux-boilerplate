import {createReducer} from '../utils';
import {
  AUTH, AUTH_SUCCESS, AUTH_FAIL,
  AUTH_LOGOUT, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAIL,
  AUTH_FORGOT, AUTH_FORGOT_FAIL, AUTH_FORGOT_SUCCESS
} from '../actions/auth';

export default createReducer({
  token: null,
  username: '',
  tokenExpires: null,
  authFetch: false,
  authFailed: false,
  errorMessage: null,
  error: null,
  logoutFetch: false,
  forgot: {
    authForgetFetch: false,
    error: null,
    errorMessage: null,
    success: false
  }
}, {
  [AUTH]: (state, {username}) => {
    return Object.assign({}, state, {
      authFetch: true,
      username
    });
  },
  [AUTH_SUCCESS]: (state, {token, expires}) => {
    return Object.assign({}, state, {
      token,
      tokenExpires: expires,
      authFetch: false
    });
  },
  [AUTH_FAIL]: (state, {ErrorMessage, error}) => {
    return Object.assign({}, state, {
      errorMessage: ErrorMessage, // ensure it works this is the format of the phone app api.
      error,
      authFetch: false
    });
  },
  [AUTH_LOGOUT]: (state) => {
    return Object.assign({}, state, {
      logoutFetch: true
    });
  },
  [AUTH_LOGOUT_SUCCESS]: (state) => {
    return Object.assign({}, state, {
      logoutFetch: false,
      token: null,
      username: null
    });
  },
  [AUTH_LOGOUT_FAIL]: (state) => {
    return Object.assign({}, state, {
      logoutFetchFail: true
    });
  },
  [AUTH_FORGOT]: (state) => {
    return Object.assign({}, state, {
      forgot: {
        authForgetFetch: true,
        error: null,
        errorMessage: null,
        success: false
      }
    });
  },
  [AUTH_FORGOT_SUCCESS]: (state) => {
    return Object.assign({}, state, {
      forgot: {
        authForgetFetch: false,
        success: true,
        error: null,
        errorMessage: null
      }
    });
  },
  [AUTH_FORGOT_FAIL]: (state, {error, message}) => {
    return Object.assign({}, state, {
      forgot: {
        authForgetFetch: false,
        error,
        errorMessage: message,
        success: false
      }
    });
  }
});
