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

    test('closes form on hitting escape', async () => {
        render(<div>
            Outside
            <Feedback email={true} />
        </div>)

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))
        expect(screen.getByTestId('form').getAttribute('class')).toContain('opacity-100')
        fireEvent.keyPress(screen.getByRole('button', { name: 'Feedback' }), { key: 'Escape', code: 'Escape' })
        expect(screen.getByTestId('form').getAttribute('class')).toContain('opacity-0')
    })

    test.skip('submits form on hitting enter key', async () => {
        // TODO what happens when enter is hit elsewhere?
        render(<div>
            Outside
            <Feedback email={true} />
        </div>)

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@email.com' }});
        fireEvent.change(screen.getByLabelText('Feedback'), { target: { value: 'This is great!' }});

        fireEvent.keyPress(screen.getByTestId('submit-button'), { key: 'Enter', code: 'Enter' })

        await waitFor(() => screen.getByText('Your feedback has been received!'))
    })
});
