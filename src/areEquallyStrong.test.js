const solution = require('./areEquallyStrong.js');

test('test 1', () => {
    expect(solution(10, 15, 15, 10)).toBe(true);
});

test('test 2', () => {
    expect(solution(15, 10, 15, 10)).toBe(true);
});

test('test 3', () => {
    expect(solution(15, 10, 15, 9)).toBe(false);
});

test('test 4', () => {
    expect(solution(10, 5, 5, 10)).toBe(true);
});

test('test 5', () => {
    expect(solution(10, 15, 2, 20)).toBe(false);
});

test('test 6', () => {
    expect(solution(10, 20, 10, 20)).toBe(true);
});

test('test 7', () => {
    expect(solution(5, 20, 20, 5)).toBe(true);
});

test('test 8', () => {
    expect(solution(20, 15, 5, 20)).toBe(false);
});

test('test 9', () => {
    expect(solution(5, 10, 5, 10)).toBe(true);
});

test('test 10', () => {
    expect(solution(1, 10, 10, 0)).toBe(false);
});

test('test 11', () => {
    expect(solution(5, 5, 10, 10)).toBe(false);
});

test('test 12', () => {
    expect(solution(10, 5, 10, 6)).toBe(false);
});

test('test 13', () => {
    expect(solution(1, 1, 1, 1)).toBe(true);
});

test('test 14', () => {
    expect(solution(0, 10, 10, 0)).toBe(true);
});
