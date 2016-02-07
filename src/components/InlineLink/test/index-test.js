import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import InlineLink from '../';

describe('<InlineLink/>', () => {
  it('Should handleClick', () =>{
    const handleClick = sinon.spy();
    const wrapper = shallow(<InlineLink message={'hi'} onClick={handleClick}> hi! </InlineLink>);

    wrapper.find('a').simulate('click', {preventDefault: () => {}});

    expect(handleClick.calledOnce).to.equal(true);
  });

  it('Should render inner text', () => {
    const wrapper = shallow(<InlineLink> hi </InlineLink>);
    expect(wrapper.text()).to.contain('hi');
  });
});
