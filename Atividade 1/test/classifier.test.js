const classifier = require('../src/classifier');

describe('Classifier', () => {
	test('should throw exception for invalid age', () => {
		const name = 'Gustavo';
		const age = -10;
		
		expect(() => {
			classifier(name, age);
		}).toThrow('Idade inválida');
	});
});