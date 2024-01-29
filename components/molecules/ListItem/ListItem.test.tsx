import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ListItem from './ListItem'

describe('ListItem', () => {
  test('renders list item with correct content', () => {
    const testContent = 'List Item Content'
    render(<ListItem>{testContent}</ListItem>)

    const listItemElement = screen.getByText(testContent)
    expect(listItemElement).toBeInTheDocument()
  })

  test('applies custom class names', () => {
    const customClassName = 'custom-class'
    render(<ListItem className={customClassName}>List Item Content</ListItem>)

    const listItemElement = screen.getByText('List Item Content')
    expect(listItemElement).toHaveClass(customClassName)
  })
})
