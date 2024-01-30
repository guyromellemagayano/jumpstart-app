import { render, screen } from '@testing-library/react'

import Input from './Input'

describe('<Input />', () => {
  let registerMock: jest.Mock<any, any, any>, errorsMock: unknown

  beforeEach(() => {
    registerMock = jest.fn()
    errorsMock = {}
  })

  test('renders an input element with placeholder', () => {
    render(
      <Input
        placeholder="Test input"
        name="TestInput"
        register={registerMock}
        errors={errorsMock}
      />
    )

    const inputElement = screen.getByPlaceholderText('Test input')
    expect(inputElement).toBeInTheDocument()
  })
})
