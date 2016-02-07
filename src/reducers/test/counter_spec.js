import {expect} from 'chai';
import reducer from '../counter';

describe('Counter Reducer', () => {
  it('Should handle INCREMENT', () => {
    const initialState = {count: 0};

    const newState = reducer(initialState, {type: 'INCREMENT'});

    expect(newState).to.eql({
      count: 1
    });
  });

  it('Should handle DECREMENT', () => {
    const initialState = {count: 1};

    const newState = reducer(initialState, {type: 'DECREMENT'});

    expect(newState).to.eql({
      count: 0
    });
  });
});
