// Rule of thump, a test file must contain at least one test, otherwise it will fail
import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

// we use describe to group tests

//add testing
describe('add', () => {
    test('should add two positive numbers', () => {
        //! 1. Arrange
        const a = 1;
        const b = 2;
    
        //! 2. Act
        const result = add(a, b);
    
        //! 3. Assertion
        expect(result).toBe(a + b);
    });
    test('should add two negative numbers', () => {
        //! 1. Arrange
        const a = -4;
        const b = -5;
    
        //! 2. Act
        const result = add(a, b);
    
        //! 3. Assertion
        expect(result).toBe(a + b);
    });
});

//  Challenges:

//Subtract testing
describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        //! 1. Arrange
        const a = 4;
        const b = 5;

        //! 2.Act
        const result = subtract(a, b);

        //! 3.Assertion
        expect(result).toBe(a - b);
    });
    test('should subtract two negative numbers', () => {
        //! 1. arrange
        const a = -7;
        const b = -9;

        //! 2. Act
        const result = subtract(a, b);

        //! 3. Assertion
        expect(result).toBe(a - b);
    });
});

//multiply testing
describe('multiply', () => {
    test('multiply one positive and one negative number', () => {
        //! 1. Arrange
        const a = 10;
        const b = -54;

        //! 2. Act
        const result = multiply(a, b);

        //! 3. Assertion
        expect(result).toBe(a * b);
    });
    test('multiply two negative numbers', () => {
        //! 1. Arrange
        const a = 43;
        const b = 33;

        //! 2. Act
        const result = multiply(a, b);

        //! 3. Assertion
        expect(result).toBe(a * b);
    });
});

describe('divide', () => {
    test('should divide two positive numbers', () => {
        //! 1. Arrange
        const a = 43;
        const b = 34;

        //! 2.Act
        const result = divide(a, b);

        //! 3.Assertion
        expect(result).toBe(a/b);
    });
});