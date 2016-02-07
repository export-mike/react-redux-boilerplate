import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {routeActions} from 'react-router-redux';
import {reduxForm} from 'redux-form';
import CssModules from 'react-css-modules';

import * as actionCreators from '../../actions/auth';
import PrimaryTextInput from '../../components/PrimaryTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import InlineMessage from '../../components/InlineMessage';
import InlineLink from '../../components/InlineLink';

import styles from './styles.css';

const mapStateToProps = ({auth}) => ({auth});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const validate = ({username, password}) => {
  const errors = {};
  if (!username) {
    errors.username = 'Required';
  } else if (username.length <= 6) {
    errors.username = 'Username must be 6 characters or more';
  }

  if (!password) {
    errors.password = 'Required';
  } else if (password.length <= 8) {
    errors.password = 'password must be 8 characters or more';
  }

  return errors;
};

class Login extends Component {

  render() {
    const {
      fields: {
        username,
        password
      },
      auth: {authFetch},
      handleSubmit,
      dispatch,
      actions: {
        login
      }
    } = this.props;

    return (
      <form styleName={'form'} onSubmit={handleSubmit(data => login(data))}>
        <h1> Log in </h1>
        {username.touched && username.error && <InlineMessage type={'error'} message={username.error}/>}
        <PrimaryTextInput type={'text'} placeholder={'Username'} {...username}/>
        {password.touched && password.error && <InlineMessage type={'error'} message={password.error}/>}
        <PrimaryTextInput type={'password'} placeholder={'Password'} {...password}/>

        <div className={'clear-fix'} styleName={'actions'}>
          <InlineLink onClick={() => {dispatch(routeActions.push('/forgot'));}}>Forgot Password?</InlineLink>
          <PrimaryButton onClick={handleSubmit(data => login(data))} loading={authFetch}>LOG IN</PrimaryButton>
        </div>
      </form>
      );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    username: PropTypes.object,
    password: PropTypes.object
  }),
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,

  // Our defined Props
  auth: PropTypes.shape({
    errorMessage: PropTypes.string,
    authFetch: PropTypes.bool.isRequired,
    authFailed: PropTypes.bool.isRequired
  }),
  actions: PropTypes.object
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'login',
  fields: ['username', 'password'],
  validate
})(CssModules(Login, styles)));
