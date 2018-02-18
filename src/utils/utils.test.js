import {getResult, randomizeHandTypes, bindTo} from './utils';
import {possibleResults} from '../constants/game';

describe('utils', () => {
    it('getResult should return string', () => {
        const result = getResult(1, 1);
        expect(typeof result).toEqual('string');
    });

    it('getResult should return on of possibleResults', () => {
        const result = getResult(1, 0);
        expect(Object.values(possibleResults).includes(result)).toEqual(true);
    });

    it('rendomizeHandTypes should return integer', () => {
        const randomNumber = randomizeHandTypes(10);
        expect(randomNumber === parseInt(randomNumber, 10)).toEqual(true);
    });

    it('randomizeHandTypes should return number in range [0, funcArg]', () => {
        const funcArg = 15;
        const randomizeNumber = randomizeHandTypes(funcArg);
        expect(randomizeNumber >= 0 && randomizeNumber <= funcArg).toEqual(true);
    });
});