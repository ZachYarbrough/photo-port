import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contaact component', () => {
    it('renders', () => {
        render(<ContactForm />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('h1 element is visible', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('h1Tag')).toHaveTextContent('Contact me');
    });

    it('button is visible', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('buttonTag')).toHaveTextContent('Submit');
    });
})