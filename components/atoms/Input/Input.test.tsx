import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import Input from './Input'

describe('<Input />', () => {
  test('renders an input element with placeholder', () => {
    render(<Input placeholder="Test input" name="TestInput" />)

    const inputElement = screen.getByPlaceholderText('Test input')
    expect(inputElement).toBeInTheDocument()
  })

  test('renders an input element of type password', () => {
    render(<Input type="password" name="TestPassword" />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveAttribute('type', 'password')
  })

  test('displays a validation message when there is an error', () => {
    render(<Input name="TestError" required />)

    const inputElement = screen.getByRole('textbox')
    fireEvent.blur(inputElement)
    expect(screen.getByText('Required Field')).toBeInTheDocument()
  })
})
