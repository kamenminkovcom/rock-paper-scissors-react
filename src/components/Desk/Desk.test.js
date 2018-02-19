import React from 'react';
import {shallow, mount} from 'enzyme';
import Desk from './Desk';
import HistoryRow from './HistoryRow/HistoryRow';
import PlayMessage from './PlayMessage/PlayMessage';
import ResultMessage from './ResultMessage/ResultMessage';
import {handTypes, possibleResults} from '../../constants/game';
import uid from 'uid';

describe('<Desk/>', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Desk history={[]} playFunc={() => {
        }} isPlaying={true}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should not render history rows with no history', () => {
        const wrapper = shallow(<Desk history={[]} playFunc={() => {
        }} isPlaying={true}/>);
        expect(wrapper.find(HistoryRow).length === 0).toEqual(true);
    });

    it('Should render HistoryRow instance when have history', () => {
        const game = {
            cpuChoice: handTypes.rock,
            playerChoice: handTypes.paper,
            result: possibleResults.win,
            id: uid()
        };
        const wrapper = shallow(<Desk history={[game]} playFunc={() => {
        }} isPlaying={true}/>);
        expect(wrapper.find(HistoryRow).length === 1).toEqual(true);
    });

    it('Should render multiple HistoryRow instances', () => {
        const historyCount = 10;
        const history = [];
        const choices = Object.values(handTypes);
        for (let i = 1; i <= historyCount; i++) {
            const game = {
                cpuChoice: choices[i % choices.length],
                playerChoice: choices[i % choices.length],
                result: possibleResults.draw,
                id: uid()
            };
            history.push(game);
        }
        const wrapper = shallow(<Desk isPlaying={true} playFunc={() => {}} history={history}/>);
        expect(wrapper.find(HistoryRow).length === historyCount).toEqual(true);
    });

    it('Should not render play massage if isPlaying is false', () => {
        const wrapper = mount(<Desk history={[]} playFunc={() => {
        }} isPlaying={false}/>);
        expect(wrapper.find(PlayMessage).children().length === 0).toEqual(true);
    });

    it('Should render play massage if isPlaying is true', () => {
        const wrapper = mount(<Desk history={[]} playFunc={() => {
        }} isPlaying={true}/>);
        expect(wrapper.find(PlayMessage).children().length > 0).toEqual(true);
    });

    it('Should not render result massage if isPlaying is true', () => {
        const wrapper = mount(<Desk history={[]} playFunc={() => {
        }} isPlaying={true}/>);
        expect(wrapper.find(ResultMessage).children().length === 0).toEqual(true);
    });

    it('Should not render result massage if isPlaying is true and has no history', () => {
        const wrapper = mount(<Desk history={[]} playFunc={() => {
        }} isPlaying={false}/>);
        expect(wrapper.find(ResultMessage).children().length === 0).toEqual(true);
    });

    it('Should render result massage if isPlaying is true and has history', () => {
        const game = {
            cpuChoice: handTypes.rock,
            playerChoice: handTypes.paper,
            result: possibleResults.win,
            id: uid()
        };
        const wrapper = mount(<Desk history={[game]} playFunc={() => {
        }} isPlaying={false}/>);
        expect(wrapper.find(ResultMessage).children().length > 0).toEqual(true);
    });
});