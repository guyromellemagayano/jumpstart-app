import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import Form from './Form'

describe('<Form />', () => {
  it('submits the correct data', () => {
    const mockOnSubmit = jest.fn()
    render(
      <Form onSubmit={mockOnSubmit}>
        <input name="testField" />
        <button type="submit">Submit</button>
      </Form>
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'testValue' }
    })

    fireEvent.click(screen.getByText('Submit'))

    expect(mockOnSubmit).toHaveBeenCalledWith({ testField: 'testValue' })
  })
})
