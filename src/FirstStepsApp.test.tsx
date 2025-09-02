import { afterEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FirstStepsApp } from './FirstStepsApp';

// refactored version
// spy function "vi.fn()" : it keeps a  record of calls and arguments, this allows to know which props were called
const mockItemCounter = vi.fn((props: unknown) => {
    return (<div data-testid="ItemCounter" />)
});

vi.mock("./shopping-cart/ItemCounter", () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}));

// mock creation for ItemCounter: this allows us to keep the ItemCounter dependency but without rendering it, it's a simulation of it:
// vi.mock("./shopping-cart/ItemCounter", () => ({
//     ItemCounter: (props: unknown) => (
//         <div
//             data-testid="ItemCounter"
//             name={props.name}
//             quantity={props.quantity}
//         />
//     )
// }));


// Challenge: make the snapshot from the component
describe('FirstStepsApp', () => {

    // this clears all of the mocks, which clears the resulting tests (it's like starting from zero for each test)
    afterEach(() => {
        vi.clearAllMocks();
    });

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

    test('should render ItemCOunter with correct props', () => {
        //! 1. Arrange and 2. Act (implicitly)
        render(<FirstStepsApp />)

        //! 3. Assertion(s)
        expect(mockItemCounter).toHaveBeenCalledTimes(3) //It fails if we don't clean all of the mocks
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Nintendo switch 2",
            quantity: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Pro controller", 
            quantity: 3 
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Super smash", 
            quantity: 5
        });
    });
});