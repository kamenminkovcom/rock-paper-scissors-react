import React from 'react';
import {shallow} from 'enzyme';
import ScoreBar from './ScoreBar';

describe('<ScoreBar/>', () => {
   it('Should render correctly', () => {
        const wrapper = shallow(<ScoreBar cpuScores={1} playerScores={1}/>);
       expect(wrapper).toMatchSnapshot();
   });
});