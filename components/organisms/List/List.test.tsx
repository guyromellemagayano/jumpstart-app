import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import List from './List'

describe('List', () => {
  test('renders list items', () => {
    render(<List items={['Item 1', 'Item 2', 'Item 3']} />)

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })
})
