import React from 'react';
import {shallow} from 'enzyme';
import Desk from './Desk';

describe('<Desk/>', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Desk history={[]} handleClick={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    });
});