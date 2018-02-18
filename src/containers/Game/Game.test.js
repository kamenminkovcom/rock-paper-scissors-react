import React from 'react';
import {shallow} from 'enzyme';
import Game from './Game';
import {handTypes, gameHistoryCount, defaultChoices} from '../../constants/game';

describe('<Game/>', () => {
    let wrapper;
    const defaultChoicesTypes = {
        cpuChoice: typeof defaultChoices.cpuChoice,
        playerChoice: typeof defaultChoices.playerChoice,
    };

    beforeEach(() => {
        wrapper = shallow(<Game/>);
    });

    it('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should initialize history as array', () => {
        expect(Array.isArray(wrapper.state().history)).toEqual(true);
    });

    it('Should initialize empty history array', () => {
        expect(wrapper.state().history.length === 0).toEqual(true);
    });

    it('Should push at history after player plays', () => {
        wrapper.instance().choseHandType(handTypes.rock);
        expect(wrapper.state().history.length === 1).toEqual(true);
    });

    it('Should push at history after multiple plays', () => {
        const times = 4;
        for (let i = 1; i <= times; i++) {
            wrapper.instance().choseHandType(handTypes.rock);
        }
        expect(wrapper.state().history.length === times).toEqual(true);
    });

    it('History should not be more than gameHistoryCount constant', () => {
        const times = gameHistoryCount + 1;
        for (let i = 1; i <= times; i++) {
            wrapper.instance().choseHandType(handTypes.rock);
        }
        expect(wrapper.state().history.length === gameHistoryCount).toEqual(true);
    });

    it('Should initialize cpuChoice correctly', () => {
        expect(typeof wrapper.state().cpuChoice === defaultChoicesTypes.cpuChoice).toEqual(true);
    });

    it('Should initialize playerChoice correctly', () => {
        expect(typeof wrapper.state().playerChoice === defaultChoicesTypes.playerChoice).toEqual(true);
    });

    it('Should set playerChoice after play', () => {
        wrapper.instance().choseHandType(handTypes.rock);
        expect(typeof wrapper.state().playerChoice === 'string').toEqual(true);
    });

    it('Should set cpuChoice after play', () => {
        wrapper.instance().choseHandType(handTypes.rock);
        expect(typeof wrapper.state().cpuChoice === 'string').toEqual(true);
    });

    it('Should set correct playerChoice after play', () => {
        wrapper.instance().choseHandType(handTypes.rock);
        expect(wrapper.state().playerChoice === handTypes.rock).toEqual(true);
    });

    it('Should set correct one of types cpuChoice', () => {
        wrapper.instance().choseHandType(handTypes.rock);
        expect(Object.values(handTypes).includes(wrapper.state().cpuChoice)).toEqual(true);
    });

    it('Should initialize isPlaying correctly', () => {
       expect(wrapper.state().isPlaying).toEqual(false);
    });

    it('Should set inPlaying correctly after play buton is clicked', () => {
        wrapper.instance().startGame();
        expect(wrapper.state().isPlaying).toEqual(true);
    });

    it('Should set default cpuChoice after play button is clicked for second time', () => {
        wrapper.instance().startGame();
        wrapper.instance().choseHandType(handTypes.rock);
        wrapper.instance().startGame();
        expect(typeof wrapper.state().cpuChoice === defaultChoicesTypes.cpuChoice).toEqual(true);
    });

    it('Should set default playerChoice after play button is clicked for second time', () => {
        wrapper.instance().startGame();
        wrapper.instance().choseHandType(handTypes.rock);
        wrapper.instance().startGame();
        expect(typeof wrapper.state().playerChoice === defaultChoicesTypes.playerChoice).toEqual(true);
    });
});