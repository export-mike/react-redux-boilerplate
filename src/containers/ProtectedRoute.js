import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';

const mapStateToProps = ({auth}) => {
  return {
    auth
  };
};

export default (Component) => {
  class ProtectedRoute extends React.Component {
    componentWillMount() {
      const {auth, dispatch} = this.props;

      if (!auth.token) {
        const redirectAfterLogin = this.props.location.pathname;
        dispatch(routeActions.push(`/login?next=${redirectAfterLogin}`));
      }
    }

    render() {
      return (<Component/>);
    }

  }

  ProtectedRoute.propTypes = {
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    })
  };

  return connect(mapStateToProps)(ProtectedRoute);
};
