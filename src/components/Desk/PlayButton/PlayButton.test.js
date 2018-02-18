import React from 'react';
import {shallow} from 'enzyme';
import PlayButton from './PlayButton';

describe('<PlayButton/>', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<PlayButton playFunc={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    })
});