import React, {Component} from 'react';
import TextInput from '../TextInput';
import CssModules from 'react-css-modules';

import styles from './styles.css';

class PrimaryInput extends Component {
  render() {
    return <TextInput {...this.props} styles={styles}/>;
  }
}

export default CssModules(PrimaryInput, styles);
