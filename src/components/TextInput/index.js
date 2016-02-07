import React, {Component} from 'react';
import CssModules from 'react-css-modules';

import styles from './styles.css';

class TextInput extends Component {
  render() {
    return <input {...this.props} styleName={'input'}/>;
  }
}

export default CssModules(TextInput, styles);
