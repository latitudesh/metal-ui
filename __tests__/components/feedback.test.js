import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import {Feedback} from "../../src";

const testEndpoint = 'http://test-endpoint.local';

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
        fireEvent.keyPress(screen.getByLabelText('Feedback'), { key: 'Escape', code: 'Escape' })
        expect(screen.getByTestId('form').getAttribute('class')).toContain('opacity-0')
    })

    test('submits form on hitting enter key with meta key', async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve()
        });
        global.fetch = fetchMock

        // TODO what happens when enter is hit elsewhere?
        render(<div>
            Outside
            <Feedback email={true} url={testEndpoint} />
        </div>)

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@email.com' }});
        fireEvent.change(screen.getByLabelText('Feedback'), { target: { value: 'This is great!' }});

        userEvent.type(screen.getByLabelText('Feedback'), '{meta}{enter}');

        await waitFor(() => screen.getByText('Your feedback has been received!'))
        const body = {
            url: testEndpoint,
            note: 'This is great!',
            email: 'test@email.com',
            emotion: null
        }
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
              method: "POST",
              body: JSON.stringify(body),
        });
    })

    test('dont show inputs in case of error', async () => {
        const fetchMock = jest.fn((url) => {
            throw { message: 'Test error' };
        });
        global.fetch = fetchMock
        render(<div>
            Outside
            <Feedback email={true} url={testEndpoint} />
        </div>)

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@email.com' }});
        fireEvent.change(screen.getByLabelText('Feedback'), { target: { value: 'This is great!' }});

        userEvent.type(screen.getByLabelText('Feedback'), '{meta}{enter}');

        await waitFor(() => screen.getByText('Test error'))
        expect(screen.queryByLabelText('Email')).not.toBeInTheDocument()
        expect(screen.queryByLabelText('Feedback')).not.toBeInTheDocument()
        const body = {
            url: testEndpoint,
            note: 'This is great!',
            email: 'test@email.com',
            emotion: null
        }
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    })
    test.todo('focus on email the first time')
    test.todo('preserve focus')
    test.todo('should close on hitting escape on feedback textarea')
});
