import { render, screen } from '@testing-library/react'

import Heading from './Heading'

describe('<Heading />', () => {
  it('renders the correct heading level', () => {
    render(<Heading level={1}>Test Heading</Heading>)
    const headingElement = screen.getByText('Test Heading')

    expect(headingElement.tagName).toBe('H1')
  })
})
