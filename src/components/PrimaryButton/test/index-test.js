import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import PrimaryButton from '../';
import Button from '../../Button';

describe('<PrimaryButton/>', () => {
  it('Should handleClick', () =>{
    const handleClick = sinon.spy();
    const wrapper = shallow(<PrimaryButton onClick={handleClick}> hi! </PrimaryButton>);

    wrapper.find(Button).simulate('click', {preventDefault: () => {}});

    expect(handleClick.calledOnce).to.equal(true);
  });

  it('Should render inner text', () => {
    const wrapper = shallow(<Button> hi </Button>);
    expect(wrapper.text()).to.contain('hi');
  });
});
