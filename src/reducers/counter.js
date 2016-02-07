import {createReducer} from '../utils';

const initialState = {count: 0};

export default createReducer(initialState, {
  ['INCREMENT']: (state) => ({
    count: state.count + 1
  }),
  ['DECREMENT']: (state) => ({
    count: state.count - 1
  })
});
