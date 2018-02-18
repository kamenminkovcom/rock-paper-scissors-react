import React from 'react';
import {shallow} from 'enzyme';
import HandButton from './HandButton';
import {handTypes} from '../../../constants/game';

describe('<HandButton/>', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<HandButton handleClick={() => {}} handType={handTypes.rock}/>);
        expect(wrapper).toMatchSnapshot();
    })
});