import React, {Component, PropTypes} from 'react';
import CssModules from 'react-css-modules';

import styles from './styles.css';

class Button extends Component {
  render() {
    const {children} = this.props;

    return (<button {...this.props} className={'clear-fix'} styleName={'button'}>{children}</button>);
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired
};

export default CssModules(Button, styles);
