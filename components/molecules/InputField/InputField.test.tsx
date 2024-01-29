import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import InputField from './InputField'

describe('InputField', () => {
  const inputProps = {
    name: 'testInput',
    type: 'text',
    placeholder: 'Enter text'
  }
  const labelProps = {
    htmlFor: 'testInput'
  }
  const labelContent = 'Test Label'

  test('renders input and label with correct properties', () => {
    render(
      <InputField
        inputProps={inputProps}
        labelProps={labelProps}
        labelContent={labelContent}
      />
    )

    const inputElement = screen.getByPlaceholderText('Enter text')
    const labelElement = screen.getByText('Test Label')

    expect(inputElement).toBeInTheDocument()
    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toHaveAttribute('for', 'testInput')
  })

  test('applies custom class names', () => {
    const customClassName = 'custom-class'
    render(
      <InputField
        className={customClassName}
        inputProps={inputProps}
        labelProps={labelProps}
        labelContent={labelContent}
      />
    )

    const inputFieldContainer = screen.getByTestId('input-field-container')
    expect(inputFieldContainer).toHaveClass(customClassName)
  })
})
