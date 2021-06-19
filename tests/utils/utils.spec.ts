import { expect } from "chai";
import {add, sub} from '../../src/utils/utils';

describe('utils module', () => {

    it('should return add result correctly', () => {
        const result = add(1, 2);
        expect(result).to.equal(3);
    });

    it('should return sub failer', () => {
        const result = sub(3, 1);
        expect(result).to.equal(2);
    });
});