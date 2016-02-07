import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CssModules from 'react-css-modules';

import styles from './styles.css';

class Home extends Component {

  render() {
    const {auth: {username}} = this.props;

    return (
      <div>
        <div styleName={'container'}>
          <h1> Hi {username} </h1>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.shape({
    username: PropTypes.string
  })
};

const mapStateToProps = ({auth}) => ({
  auth
});

export default connect(mapStateToProps)(CssModules(Home, styles));
