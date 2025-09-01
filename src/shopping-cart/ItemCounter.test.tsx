import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        //! 1. Arrange
        const name = 'Item';

        //! 2. Act
        render(<ItemCounter name={name} />);

        //! 3. Assertion 
        expect(screen.getByText(name)).toBeDefined(); // toBeDefined: it must exists
        expect(screen.getByText(name)).not.toBeNull();

        screen.debug();
    });
    test('should render with custom quantity', () => {
        //! 1. Arrange
        const name = 'Nintendo Switch 2';
        const quantity = 3;

        //! 2. Act
        render(<ItemCounter name={name} quantity={quantity} />);

        //! 3. Assertion 
        expect(screen.getByText(quantity)).toBeDefined(); // toBeDefined: it must exists
        screen.debug();
    });
});