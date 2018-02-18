export const handTypes = {
    paper: 'paper',
    rock: 'rock',
    scissors: 'scissors',
};

export const gameRules = {
    [handTypes.paper]: {
        [handTypes.paper]: 0,
        [handTypes.rock]: 1,
        [handTypes.scissors]: 0,
    },
    [handTypes.rock]: {
        [handTypes.rock]: 0,
        [handTypes.scissors]: 1,
        [handTypes.paper]: 0
    },
    [handTypes.scissors]: {
        [handTypes.scissors]: 0,
        [handTypes.paper]: 1,
        [handTypes.rock]: 0
    }
};

export const possibleResults = {
    win: 'win',
    lose: 'lose',
    draw: 'draw'
};

//may we would like to change classNames and it should not break the logic
export const classNames = {
    [possibleResults.win]: 'win',
    [possibleResults.lose]: 'lose',
    [possibleResults.draw]: 'draw'
};

export const gameHistoryCount = 5;

export const defaultChoices = {
    cpuChoice: undefined,
    playerChoice: undefined
};