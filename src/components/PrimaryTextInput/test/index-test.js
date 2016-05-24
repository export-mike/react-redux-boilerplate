import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import PrimaryTextInput from '../';
import TextInput from '../../TextInput';
// related: https://github.com/airbnb/enzyme/issues/76

describe('<PrimaryTextInput/>', () => {
  it('Should handleChange', () =>{
    const handleChange = sinon.spy();
    const wrapper = shallow(<PrimaryTextInput onChange={handleChange} placeholder={'Name'}/>);

    wrapper.find(TextInput).simulate('change', {target: {value: 'My new value'}});

    expect(handleChange.calledOnce).to.equal(true);
  });
});
