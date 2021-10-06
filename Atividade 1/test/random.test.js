const generateRandomNumber = require('../src/random');

describe('Random', () => {
	test('should return -1 when start value is negative', () => {
		const start = -10;
		const end = 15;
		const res = generateRandomNumber(start, end);
		expect(res).toBe(-1);
	});

	test('should return -1 when end value is negative', () => {
		const start = 15;
		const end = -10;
		const res = generateRandomNumber(start, end);
		expect(res).toBe(-1);
	});
});