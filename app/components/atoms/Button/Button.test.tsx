import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  test('renders button with correct text', () => {
    render(<Button>Click me</Button>)

    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
  })

  test('handles onClick event', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const buttonElement = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('applies custom class names', () => {
    const customClassName = 'my-custom-class'
    render(<Button className={customClassName}>Click me</Button>)

    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toHaveClass(customClassName)
  })
})
