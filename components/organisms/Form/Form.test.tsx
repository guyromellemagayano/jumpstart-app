import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import Form from './Form'

describe('<Form />', () => {
  it('submits the correct data', async () => {
    const mockOnSubmit = jest.fn()
    render(
      <Form onSubmit={mockOnSubmit}>
        <input name="testField" />
        <button type="submit">Submit</button>
      </Form>
    )

    // Simulate user typing in the input field
    fireEvent.change(screen.getByRole('textbox', { name: /testField/i }), {
      target: { value: 'testValue' }
    })

    // Click the submit button
    fireEvent.click(screen.getByText('Submit'))

    // Check if the mock function was called with the expected data
    expect(mockOnSubmit).toHaveBeenCalledWith({ testField: 'testValue' })
  })
})
