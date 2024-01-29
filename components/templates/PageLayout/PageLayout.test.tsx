import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import PageLayout from './PageLayout'

describe('PageLayout', () => {
  test('renders children correctly', () => {
    render(
      <PageLayout>
        <div>Test Child</div>
      </PageLayout>
    )

    const childElement = screen.getByText('Test Child')
    expect(childElement).toBeInTheDocument()
  })

  test('applies custom class names', () => {
    const customClassName = 'custom-layout-class'
    render(
      <PageLayout className={customClassName}>
        <div>Test Content</div>
      </PageLayout>
    )

    const layoutElement = screen.getByRole('main')
    expect(layoutElement).toHaveClass(customClassName)
  })
})
