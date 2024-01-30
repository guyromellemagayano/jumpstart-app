import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Section from './Section'

describe('<Section />', () => {
  const childrenText = 'This is a section'
  const customClass = 'custom-section-class'

  it('renders the children', () => {
    render(<Section>{childrenText}</Section>)

    const sectionElement = screen.getByText(childrenText)
    expect(sectionElement).toBeInTheDocument()
  })

  it('applies a custom class', () => {
    render(<Section className={customClass}>{childrenText}</Section>)

    const sectionElement = screen.getByText(childrenText)
    expect(sectionElement).toHaveClass(customClass)
  })

  it('passes additional props to the section element', () => {
    const style = { backgroundColor: 'blue' }
    render(
      <Section style={style} id="section-container">
        {childrenText}
      </Section>
    )

    const sectionElement = screen.getByTestId('section-container')
    expect(sectionElement).toHaveStyle(
      `background-color: ${style.backgroundColor}`
    )
    expect(sectionElement).toHaveAttribute('id', 'section-container')
  })
})
