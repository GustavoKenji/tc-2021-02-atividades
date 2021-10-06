const generateRandomNumber = require('../src/random');

describe('Random', () => {
	test('should return -1 when start value is negative', () => {
		const start = -10;
		const end = 15;
		const res = generateRandomNumber(start, end);
		expect(res).toBe(-1);
	});
});