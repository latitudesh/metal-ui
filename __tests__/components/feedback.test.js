import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Feedback} from "../../src";


describe('Feedback', () => {
    test('opens form on click', async () => {
        render(<Feedback email={true} />)

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))

        await waitFor(() => screen.getByText('Email'))

        expect(screen.getByLabelText('Email')).toHaveValue('')
    });

    test('closes form on clicking outside', async () => {
        render(<div>
            Outside
            <Feedback email={true} />
        </div>)

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))
        expect(screen.getByTestId('form').getAttribute('class')).toContain('opacity-100')
        fireEvent.click(screen.getByText('Outside'))
        expect(screen.getByTestId('form').getAttribute('class')).toContain('opacity-0')
    })
});
