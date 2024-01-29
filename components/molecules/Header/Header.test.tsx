import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  it('renders the children content', () => {
    const headerContent = 'Header Content'
    render(<Header>{headerContent}</Header>)

    const headerElement = screen.getByText(headerContent)
    expect(headerElement).toBeInTheDocument()
  })

  it('applies a custom class', () => {
    const customClass = 'my-custom-class'
    render(<Header className={customClass}>Header Content</Header>)

    const headerElement = screen.getByRole('banner')
    expect(headerElement).toHaveClass('header', customClass)
  })

  it('passes additional props to the header element', () => {
    const testId = 'header'
    render(<Header data-testid={testId}>Header Content</Header>)

    const headerElement = screen.getByTestId(testId)
    expect(headerElement).toBeInTheDocument()
  })
})
