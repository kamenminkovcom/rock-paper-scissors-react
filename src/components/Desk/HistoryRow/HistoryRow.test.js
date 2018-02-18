import React from 'react';
import {shallow} from 'enzyme';
import HistoryRow from './HistoryRow';
import {possibleResults, handTypes} from '../../../constants/game';

describe('<HistoryRow/>', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<HistoryRow result={possibleResults.win}
                                            playerChoice={handTypes.rock}
                                            cpuChoice={handTypes.paper}/>);
        expect(wrapper).toMatchSnapshot();
    })
});