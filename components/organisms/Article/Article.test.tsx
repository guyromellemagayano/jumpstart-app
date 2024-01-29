import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Article from './Article'

describe('<Article />', () => {
  const childrenText = 'This is an article'
  const customClass = 'custom-article-class'

  it('renders the children', () => {
    render(<Article>{childrenText}</Article>)
    const articleElement = screen.getByText(childrenText)
    expect(articleElement).toBeInTheDocument()
  })

  it('applies a custom class', () => {
    render(<Article className={customClass}>{childrenText}</Article>)
    const articleElement = screen.getByTestId('article-container')
    expect(articleElement).toHaveClass(customClass)
  })

  it('passes additional props to the article element', () => {
    const style = { backgroundColor: 'red' }
    render(
      <Article style={style} id="test-article">
        {childrenText}
      </Article>
    )
    const articleElement = screen.getByTestId('article-container')
    expect(articleElement).toHaveStyle(
      `background-color: ${style.backgroundColor}`
    )
    expect(articleElement).toHaveAttribute('id', 'test-article')
  })
})
