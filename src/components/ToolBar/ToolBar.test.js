import React from 'react';
import {shallow} from 'enzyme';
import ToolBar from './ToolBar';
import {handTypes} from '../../constants/game';


describe('<ToolBar/>', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<ToolBar handTypes={Object.values(handTypes)} choseHandType={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    });
});