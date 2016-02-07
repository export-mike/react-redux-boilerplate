import React, {Component, PropTypes} from 'react';
import Button from '../Button';
import CssModules from 'react-css-modules';

import styles from './styles.css';

class PrimaryButton extends Component {
  render() {
    const {children} = this.props;

    return (<Button {...this.props} styles={styles}>{children}</Button>);
  }
}

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

export default CssModules(PrimaryButton, styles);
