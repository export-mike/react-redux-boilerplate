import {expect} from 'chai';
import reducer from '../auth';

describe('auth reducer', () => {

  it('Handles AUTH', () => {
    const initialState = {
      token: null,
      tokenExpires: null,
      username: null,
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    };

    const newState = reducer(initialState, {type: 'AUTH', payload: {username: 'admin'}});

    expect(newState).to.eql({
      token: null,
      tokenExpires: null,
      username: 'admin',
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    });

  });

  it('Handles AUTH_SUCCESS', () => {


    const initialState = {
      token: null,
      tokenExpires: null,
      username: 'admin',
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    };

    const expireDate = new Date();

    const newState = reducer(initialState, {
      type: 'AUTH_SUCCESS',
      payload: {
        token: '1234',
        expires: expireDate
      }
    });

    expect(newState).to.eql({
      token: '1234',
      tokenExpires: expireDate,
      username: 'admin',
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    });

  });

  it('Handles AUTH_FAIL', () => {

    const initialState = {
      token: null,
      tokenExpires: null,
      username: null,
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    };

    const error = new Error();

    const newState = reducer(initialState, {
      type: 'AUTH_FAIL',
      payload: {
        ErrorMessage: 'An Error Occurred',
        error
      }
    });

    expect(newState).to.eql({
      token: null,
      tokenExpires: null,
      username: null,
      authFetch: false,
      authFailed: false,
      errorMessage: 'An Error Occurred',
      error: error,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    });
  });

  it('Handles AUTH_FORGOT', () => {

    const initialState = {
      token: null,
      tokenExpires: null,
      username: null,
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    };

    const newState = reducer(initialState, {type: 'AUTH_FORGOT'});

    expect(newState).to.eql({
      token: null,
      tokenExpires: null,
      username: null,
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    });

  });

  it('Handles AUTH_FORGOT_SUCCESS', () => {

    const initialState = {
      token: null,
      tokenExpires: null,
      username: null,
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    };

    const newState = reducer(initialState, {type: 'AUTH_FORGOT_SUCCESS'});

    expect(newState).to.eql({
      token: null,
      tokenExpires: null,
      username: null,
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: true
      }
    });
  });

  it('Handles AUTH_FORGOT_FAIL', () => {

    const initialState = {
      token: null,
      tokenExpires: null,
      username: null,
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    };

    const error = new Error();

    const newState = reducer(initialState, {
      type: 'AUTH_FORGOT_FAIL',
      payload: {
        message: 'Something Wrong Happened',
        error
      }
    });

    expect(newState).to.eql({
      token: null,
      tokenExpires: null,
      username: null,
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null,
      forgot: {
        authForgetFetch: false,
        error: error,
        errorMessage: 'Something Wrong Happened',
        success: false
      }
    });
  });

  it('Handles auth AUTH_LOGOUT', () => {
    const initialState = {
      token: '1234',
      tokenExpires: null,
      username: 'admin',
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
    };

    const newState = reducer(initialState, {
      type: 'AUTH_LOGOUT'
    });

    expect(newState).to.eql({
      token: '1234',
      tokenExpires: null,
      username: 'admin',
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: true,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    });
  });

  it('Handles auth AUTH_LOGOUT_SUCCESS', () => {
    const initialState = {
      token: '1234',
      tokenExpires: null,
      username: 'username',
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: true,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    };

    const newState = reducer(initialState, {
      type: 'AUTH_LOGOUT_SUCCESS'
    });

    expect(newState).to.eql({
      token: null,
      tokenExpires: null,
      username: null,
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
    });
  });

  it('Handles auth AUTH_LOGOUT_FAIL', () => {
    const initialState = {
      token: '1234',
      tokenExpires: null,
      username: 'admin',
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: false,
      logoutFetchFail: false,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    };

    const newState = reducer(initialState, {
      type: 'AUTH_LOGOUT_FAIL'
    });

    expect(newState).to.eql({
      token: '1234',
      tokenExpires: null,
      username: 'admin',
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: false,
      logoutFetchFail: true,
      forgot: {
        authForgetFetch: false,
        error: null,
        errorMessage: null,
        success: false
      }
    });
  });
});
