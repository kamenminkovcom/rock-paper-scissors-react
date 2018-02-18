import React from 'react';
import Hand from './Hand';
import {shallow} from 'enzyme';

describe('<Hand/>', () => {
    const handType = 'rock';
    const isCpu = true;
    const wrapper = shallow(<Hand isCpu={true} handType={handType}/>);
    const classNames = wrapper.props().className.split(' ');

    it('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should contain handType className', () => {
        expect(classNames.includes(handType)).toEqual(true);
    });

    it('Should contain rotate className', () => {
        const reverseClassName = 'rotate';
        expect(classNames.includes(reverseClassName)).toEqual(true);
    });
});