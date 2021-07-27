import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import {Feedback} from "../../src";

const testEndpoint = 'http://test-endpoint.local';

describe('Feedback', () => {
    test('opens form on click', async () => {
        render(<Feedback />)

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))

        await waitFor(() => screen.getByText('Email'))

        expect(screen.getByLabelText('Email')).toHaveValue('')
    });

    test('closes form on clicking outside', async () => {
        render(<div data-testid={'outside'}>
            <Feedback />
        </div>)

        expect(screen.getByTestId('form')).toHaveAttribute('aria-expanded', 'false')
        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))
        expect(screen.getByTestId('form')).toHaveAttribute('aria-expanded', 'true')
        fireEvent.mouseDown(screen.getByTestId('outside'))
        expect(screen.getByTestId('form')).toHaveAttribute('aria-expanded', 'false')
    })

    test('closes form on hitting escape', async () => {
        render(<div>
            Outside
            <Feedback />
        </div>)

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))
        expect(screen.getByTestId('form')).toHaveAttribute('aria-expanded', 'true')
        fireEvent.keyDown(screen.getByLabelText('Feedback'), { key: 'Escape', code: 'Escape' })
        expect(screen.getByTestId('form')).toHaveAttribute('aria-expanded', 'false')
    })

    test('submits form on hitting enter key with meta key', async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve({ ok: true, json: () => Promise.resolve() })
        });
        global.fetch = fetchMock

        // TODO what happens when enter is hit elsewhere?
        render(<div>
            Outside
            <Feedback url={testEndpoint} />
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
        }
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
              method: "POST",
              body: JSON.stringify(body),
        });
    })

    test('submits form with keyboard navigation', async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve({ ok: true, json: () => Promise.resolve() })
        });
        global.fetch = fetchMock

        // TODO what happens when enter is hit elsewhere?
        render(<div>
            Outside
            <Feedback url={testEndpoint} />
        </div>)

        userEvent.keyboard('{Enter}test@email.com');
        userEvent.tab()
        // Enter feedback
        userEvent.keyboard('This is great!');
        // Tab to emoji radio button
        userEvent.tab()
        // Select the emoji radio then use right arrow to select the next one
        userEvent.keyboard('{Enter}{ArrowRight}');
        userEvent.tab()
        userEvent.keyboard('{Enter}');

        await waitFor(() => screen.getByText('Your feedback has been received!'))
        const body = {
            url: testEndpoint,
            note: 'This is great!',
            email: 'test@email.com',
            emotion: '🙂'
        }
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    })
    test('dont show inputs in case of error', async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve({ ok: false, status: 404, json: () => Promise.resolve() })
        });
        global.fetch = fetchMock
        render(<div>
            Outside
            <Feedback url={testEndpoint} />
        </div>)

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@email.com' }});
        fireEvent.change(screen.getByLabelText('Feedback'), { target: { value: 'This is great!' }});

        userEvent.type(screen.getByLabelText('Feedback'), '{meta}{enter}');

        await waitFor(() => screen.getByText('Sorry, we couldn\'t send your feedback. Status: 404'))
        expect(screen.queryByLabelText('Email')).not.toBeInTheDocument()
        expect(screen.queryByLabelText('Feedback')).not.toBeInTheDocument()
        const body = {
            url: testEndpoint,
            note: 'This is great!',
            email: 'test@email.com',
        }
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    })

    test('submits form correctly if email is provided as a prop', async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve({ ok: true, json: () => Promise.resolve() })
        });
        global.fetch = fetchMock

        // TODO what happens when enter is hit elsewhere?
        render(<div>
            Outside
            <Feedback url={testEndpoint} email={'prop@email.com'}/>
        </div>)

        expect(
            screen.queryByLabelText('Email'),
        ).not.toBeInTheDocument()

        fireEvent.click(screen.getByRole('button', { name: 'Feedback' }))
        fireEvent.change(screen.getByLabelText('Feedback'), { target: { value: 'This is great!' }});

        userEvent.type(screen.getByLabelText('Feedback'), '{meta}{enter}');

        await waitFor(() => screen.getByText('Your feedback has been received!'))
        const body = {
            url: testEndpoint,
            note: 'This is great!',
            email: 'prop@email.com',
        }
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    })
});
