import { fireEvent, render, screen } from "@testing-library/react";
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

        //screen.debug();
    });
    test('should render with custom quantity', () => {
        //! 1. Arrange
        const name = 'Nintendo Switch 2';
        const quantity = 3;

        //! 2. Act
        render(<ItemCounter name={name} quantity={quantity} />);

        //! 3. Assertion 
        expect(screen.getByText(quantity)).toBeDefined(); // toBeDefined: it must exists
        //screen.debug();
    });

    test('should increase count when +1 button is pressed', () => {
        //! 1. Arrange: component is rendered and buttons destructured
        render(<ItemCounter name={"Test increase button"} quantity={1} />);
        
        const [buttonAdd] = screen.getAllByRole('button'); // we get the buttons by using destructing

        //! 2. Act: simulates pressing the button with handleAdd function
        fireEvent.click(buttonAdd);

        //! 3. Assertion
        expect(screen.getByText('2')).toBeDefined();

    });
    // Challenges:
    test('should decrease count when -1 button is pressed', () => {
        //quantity = 5
        //! 1. Arrange
        const quantity = 5
        render(<ItemCounter name={"Test decrease button"} quantity={quantity} />);

        const [, buttonSubtract] = screen.getAllByRole('button');

        //! 2. Act
        fireEvent.click(buttonSubtract);

        //! 3. Assertion
        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease when -1 button is pressed and quantity and quantity is 1', () => {
        //quantity = 1
        //! 1. Arrange
        const quantity = 1
        render(<ItemCounter name={"Test decrease button 2"} quantity={quantity} />)

        const [, buttonSubtract] = screen.getAllByRole('button');

        //! 2. Act
        fireEvent.click(buttonSubtract);

        //! 3 Assertion
        expect(screen.getByText(1)).toBeDefined();
    });
});