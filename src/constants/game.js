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