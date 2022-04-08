import 'match-media-mock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { Base } from '.'

jest.mock('@/components/Menu', () => {
  return {
    __esModule: true,
    Menu: () => <div data-testid="Mock Menu" />,
  }
})

jest.mock('@/components/Footer', () => {
  return {
    __esModule: true,
    Footer: () => <div data-testid="Mock Footer" />,
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Heading' })).toBeInTheDocument()
  })
})
