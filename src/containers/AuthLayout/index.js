import React, {Component} from 'react';
import CssModules from 'react-css-modules';

import styles from './styles.css';
class AuthLayout extends Component {
  render() {
    return (<div className={'login'}>
      <div className={'content'}>
        {this.props.children}
      </div>
    </div>);
  }
}

AuthLayout.propTypes = {
  children: React.PropTypes.node
};

export default CssModules(AuthLayout, styles);
