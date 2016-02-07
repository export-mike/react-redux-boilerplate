import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import counter from './counter';
import auth from './auth';

export default combineReducers({
  auth,
  counter,
  routing: routeReducer,
  form: formReducer
});
