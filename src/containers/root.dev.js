import React, {Component} from 'react';
import DevTools from './DevTools';
import Routes from './routes';

class Root extends Component {
  render() {
    return (
      <div>
        <Routes/>
        <DevTools/>
      </div>
      );
  }
}

export default Root;
