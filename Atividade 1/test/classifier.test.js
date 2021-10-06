const classifier = require('../src/classifier');

describe('Classifier', () => {
	test('should throw exception for invalid age', () => {
		const name = 'Gustavo';
		const age = -10;
		
		expect(() => {
			classifier(name, age);
		}).toThrow('Idade inválida');
	});

	test('the person should be a child', () => {
		const name = 'Gustavo';
		const age = 7;
		let person = classifier(name, age);
		
		expect(person).toBe('Gustavo é criança');
	});

	test('the person should be a teenager', () => {
		const name = 'Gustavo';
		const age = 18;
		let person = classifier(name, age);
		
		expect(person).toBe('Gustavo é adolescente');
	});

	test('the person should be an adult', () => {
		const name = 'Gustavo';
		const age = 21;
		let person = classifier(name, age);
		
		expect(person).toBe('Gustavo é adulto');
	});

	test('the person should be an old man/woman', () => {
		const name = 'Gustavo';
		const age = 77;
		let person = classifier(name, age);
		
		expect(person).toBe('Gustavo é idoso');
	})
});