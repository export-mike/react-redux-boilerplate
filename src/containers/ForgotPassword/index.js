import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';

import * as actionCreators from '../../actions/auth';
import PrimaryTextInput from '../../components/PrimaryTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import InlineMessage from '../../components/InlineMessage';

import styles from '../Login/styles.css';

const mapStateToProps = ({auth}) => {
  return {
    auth
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const validate = ({username}) => {
  const errors = {};
  if (!username) {
    errors.username = 'Required';
  } else if (username.length <= 6) {
    errors.username = 'Username must be 6 characters or more';
  }

  return errors;
};

class ForgotPassword extends Component {

  render() {
    const {
      fields: {
        username
      },
      auth: {forgot: {authForgetFetch, errorMessage, success}},
      handleSubmit,
      actions: {
        forgotPassword
      }
    } = this.props;

    return (
      <form className={styles.form} onSubmit={handleSubmit(data => forgotPassword(data))}>
        <h1> FORGOT Password </h1>
        {!success && errorMessage && <InlineMessage type={'error'} message={errorMessage}/>}
        {success && <InlineMessage type={'success'} message={'Please check your email for instructions.'}/>}
        {username.touched && username.error && <InlineMessage type={'error'} message={username.error}/>}
        <PrimaryTextInput type={'text'} placeholder={'Username'} {...username}/>
        <div className={styles.actions}>
          <PrimaryButton onClick={handleSubmit(data => forgotPassword(data))} loading={authForgetFetch}> Send </PrimaryButton>
        </div>
      </form>
      );
  }
}

ForgotPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    username: PropTypes.object
  }),
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,

  // Our defined Props
  auth: PropTypes.shape({
    forgot: PropTypes.shape({
      authForgetFetch: PropTypes.bool.isRequired,
      errorMessage: PropTypes.string,
      success: PropTypes.bool.isRequired
    })
  }),
  actions: PropTypes.object
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'forgot-password',
  fields: ['username'],
  validate
})(ForgotPassword));
