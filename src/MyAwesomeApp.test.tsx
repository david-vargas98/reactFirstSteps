import { describe, expect, test } from "vitest"; // function from vitest to test non-react functionalities
import { render, screen } from '@testing-library/react' // the 'testing library' needed to test the components

import { MyAwesomeApp } from "./MyAwesomeApp"; // my component to be tested

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        const { container } = render(<MyAwesomeApp />); // we use container to evaluate initial state
        //screen.debug(); // it allows to evaluate through constant changes (re-renders) made from the component

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Edgar'); // toContain checks if the 'Edgar' is contained into 'h1' independently if there's a space in between
        expect(h3?.innerHTML).toContain('Vargas');

        //const {container} = render(<MyAwesomeApp />);

        //console.log(container.innerHTML);
    });
    test('should render firstName and lastName - screen', () => {
        render(<MyAwesomeApp />);
        screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1
        // }); // if we want to get the first h1 we use this syntax

        const h1 = screen.getByTestId('first-name-title'); // we evaluate the element by using a 'data-testid' property

        console.log(h1.innerHTML);
    });

    // getting use of snapshots: use them if the component isn't gonna change anymore
    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);

        expect(container).toMatchSnapshot(); // generates a snapshot to compare with
    });

    // using attributes such as 'data-testid' is not a wise idea, since they're prone to change
    // however, is good to know their existence
    test('should match snapshot', () => {
        // we don't have any native snapshot method to get the html template, so we use 'data-testid'
        render(<MyAwesomeApp />);

        expect(screen.getByTestId('div-app')).toMatchSnapshot(); 
    });
});