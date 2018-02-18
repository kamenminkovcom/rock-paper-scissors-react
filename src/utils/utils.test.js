import {getResult, randomizeHandTypes, bindTo, resizeCollection} from './utils';
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

    it('resizeCollection should not return collection with greater length than the second func arg', () => {
        const collection = [1, 2, 3, 4, 5];
        const count = 3;
        const resizedCollection = resizeCollection(collection, count);
        expect(resizedCollection.length <= count).toEqual(true);
    });

    it('resizeCollection should return collection with same length if the second func arg is greater', () => {
        const collection = [1, 2, 3];
        const count = 7;
        const resizedCollection = resizeCollection(collection, count);
        expect(resizedCollection.length === collection.length).toEqual(true);
    });

    it('resizeCollection should return new collection', () => {
        const collection = [1,2,3];
        const resizedCollection = resizeCollection(collection, collection.length);
        resizedCollection.push(10);
        expect(resizedCollection.length !== collection).toEqual(true);
    })
});