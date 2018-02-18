import React from 'react';
import {shallow} from 'enzyme';
import ResultMessage from './ResultMessage';
import {possibleResults} from '../../../constants/game';

describe('<ResultMessage/>', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<ResultMessage message={possibleResults.win} result={possibleResults.win}/>);
        expect(wrapper).toMatchSnapshot();
    })
});