import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FirstStepsApp } from './FirstStepsApp';

// mock creation for ItemCounter: this allows us to keep the ItemCounter dependency but without rendering it, it's a simulation of it:
vi.mock("./shopping-cart/ItemCounter", () => ({
    ItemCounter: () => <div data-testid="ItemCounter" />,
}));


// Challenge: make the snapshot from the component
describe('FirstStepsApp', () => {
    test('should match snapshot', () => { //instructor says won't show this test anymore for the rest of the course
        //! 1. Arrange and 2. Act (implicitly)
        render(<FirstStepsApp />);

        //! 3. Assert
        expect(screen.getByRole('root')).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter components', () => {
        //! 1. Arrange
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemCounter'); // getting by 'data-testid'

        expect(itemCounters.length).toBe(3);
    });
});