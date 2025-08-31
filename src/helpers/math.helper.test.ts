// Rule of thump, a test file must contain at least one test, otherwise it will fail
import { expect, test } from 'vitest';
import { add } from './math.helper';

test('should add two positive numbers', () => {
    //! 1. Arrange
    const a = 1;
    const b = 2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assertion
    expect(result).toBe(a + b);
});