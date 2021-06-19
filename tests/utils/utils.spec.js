"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var utils_1 = require("../../src/utils/utils");
describe('utils module', function () {
    it('should return add result correctly', function () {
        var result = utils_1.add(1, 2);
        chai_1.expect(result).to.equal(3);
    });
});
