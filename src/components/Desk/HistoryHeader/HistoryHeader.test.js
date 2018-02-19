import React from 'react';
import {shallow} from 'enzyme';
import HistoryHeader from './HistoryHeader';

describe('<HistoryHeader/>', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<HistoryHeader count={1}/>);
        expect(wrapper).toMatchSnapshot();
    });
});