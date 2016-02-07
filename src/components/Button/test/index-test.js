import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Button from '../';

describe('<Button/>', () => {
  it('Should handleClick', () =>{
    const handleClick = sinon.spy();
    const wrapper = shallow(<Button onClick={handleClick}> hi! </Button>);

    wrapper.find('button').simulate('click', {preventDefault: () => {}});

    expect(handleClick.calledOnce).to.equal(true);
  });

  it('Should render inner text', () => {
    const wrapper = shallow(<Button> hi </Button>);
    expect(wrapper.text()).to.contain('hi');
  });
});
