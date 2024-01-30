import { render, screen } from '@testing-library/react'

import Label from './Label'

describe('<Label />', () => {
  it('renders the label with correct text', () => {
    render(<Label>Test Label</Label>)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('applies custom class names', () => {
    const customClassName = 'my-custom-class'
    render(<Label className={customClassName}>Test Label</Label>)
    expect(screen.getByText('Test Label')).toHaveClass(customClassName)
  })
})
