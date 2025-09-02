import { describe, expect, test } from 'vitest';
import { render ,screen } from '@testing-library/react';

import { FirstStepsApp } from './FirstStepsApp';

// Challenge: make the snapshot from the component
describe('FirstStepsApp', () => {
    test('should match snapshot', () => { //instructor says won't show this test anymore for the rest of the course
        render(<FirstStepsApp />);

        expect(screen.getAllByRole('root')).toMatchSnapshot();
    })
});