import {possibleResults} from '../constants/game';

export const bindTo = (...args) => context => {
    args.forEach(arg => context[arg] = context[arg].bind(context));
};

export const randomizeHandTypes = handTypesCount =>
        Math.floor(Math.random() * handTypesCount);

export const getResult = (cpuPoints, playerPoints) => {
    const diff =  playerPoints - cpuPoints;
    switch (diff) {
        case 0:
            return possibleResults.draw;
        case 1:
            return possibleResults.win;
        default:
            return possibleResults.lose;
    }
};