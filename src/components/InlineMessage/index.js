import React, {Component, PropTypes} from 'react';
import CssModules from 'react-css-modules';

import styles from './styles.css';

class InlineErrorMessage extends Component {
  render() {
    const {type, message} = this.props;
    return <span {...this.props} styleName={type}> {message} </span>;
  }
}

InlineErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default CssModules(InlineErrorMessage, styles);
