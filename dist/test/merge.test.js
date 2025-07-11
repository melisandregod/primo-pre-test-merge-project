"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../src/merge");
describe('merge function', () => {
    test('merge three sorted arrays correctly', () => {
        const a = [1, 3, 5];
        const b = [2, 4, 6];
        const c = [9, 7, 0];
        const result = (0, merge_1.merge)(a, b, c);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
    });
    test('merge with empty array', () => {
        expect((0, merge_1.merge)([], [], [3, 2, 1])).toEqual([1, 2, 3]);
    });
    test('all arrays empty', () => {
        expect((0, merge_1.merge)([], [], [])).toEqual([]);
    });
    test('merge with duplicates', () => {
        expect((0, merge_1.merge)([1, 2], [2, 3], [3, 2, 1])).toEqual([1, 1, 2, 2, 2, 3, 3]);
    });
});
