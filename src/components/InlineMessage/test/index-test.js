import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import InlineLink from '../';

describe('<InlineLink/>', () => {
  it('Should render success inner text', () => {
    const wrapper = shallow(<InlineLink type={'success'} message={'hi'}/>);
    expect(wrapper.text()).to.contain('hi');
  });

  it('Should render error inner text', () => {
    const wrapper = shallow(<InlineLink type={'error'} message={'hi'}/>);
    expect(wrapper.text()).to.contain('hi');
  });

  it('Should render success inner text', () => {
    const wrapper = shallow(<InlineLink type={'success'} message={'hi'}/>);
    expect(wrapper.text()).to.contain('hi');
  });
});
