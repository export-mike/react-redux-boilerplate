import React, {Component, PropTypes} from 'react';
import CssModules from 'react-css-modules';

import styles from './styles.css';

class InlineLink extends Component {
  _handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const {color} = this.props;
    return <a href="#" {...this.props} onClick={this._handleClick.bind(this)} styleName={color}> {this.props.children} </a>;
  }
}

InlineLink.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
};

InlineLink.defaultProps = {
  onClick: () => {},
  color: 'default'
};

export default CssModules(InlineLink, styles);
