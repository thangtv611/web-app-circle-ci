import { expect } from "chai";
import {add} from '../../src/utils/utils';

describe('utils module', () => {

    it('should return add result correctly', () => {
        const result = add(1, 2);
        expect(result).to.equal(3);
    })
});