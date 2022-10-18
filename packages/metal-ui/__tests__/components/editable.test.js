/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Editable from "../../src/Editable";

describe('Components/Generic/Editable', () => {
  it('should work on clicking outside', async () => {
    const onSave = jest.fn(() => Promise.resolve(true))
    render(
      <div>
        <div data-testid={'outside'} tabIndex={0} />
        <Editable value={'first'} onSave={onSave} />
      </div>
    )
    await screen.getByRole('textbox')
    screen.getByRole('textbox').click()
    userEvent.type(screen.queryByRole('textbox'), '-modified')
    screen.queryByTestId('outside').focus()
    expect(onSave).toHaveBeenCalledWith('first-modified')
  })
  it('should update on hitting enter', async () => {
    const onSave = jest.fn(() => Promise.resolve(true))
    render(<Editable value={'first'} onSave={onSave} />)
    await screen.findByRole('textbox')
    userEvent.type(screen.queryByRole('textbox'), '{Enter}')
    userEvent.type(screen.queryByRole('textbox'), '-modified')
    userEvent.type(screen.queryByRole('textbox'), '{Enter}')
    expect(onSave).toHaveBeenCalledWith('first-modified')
  })
  it('should not update on hitting escape', async () => {
    const onSave = jest.fn()
    render(<Editable value={'first'} onSave={onSave} />)
    await screen.findByRole('textbox')
    screen.queryByRole('textbox').click()
    userEvent.type(screen.queryByRole('textbox'), '-modified{Escape}')
    expect(onSave).not.toHaveBeenCalled()
  })
})
