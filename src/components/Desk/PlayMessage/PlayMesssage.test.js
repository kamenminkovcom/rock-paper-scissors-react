import React from 'react';
import {shallow} from 'enzyme';
import PlayMessage from './PlayMessage';

describe('<PlayMessage/>', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<PlayMessage/>);
        expect(wrapper).toMatchSnapshot();
    })
});