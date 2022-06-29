import 'match-media-mock'

import { screen } from '@testing-library/react'

import { exploreSidebarMock } from '@/components/ExploreSidebar/mock'
import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { renderWithTheme } from '@/utils/tests'

import { GamesTemplate } from '.'

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock base">{children}</div>
  ),
}))

jest.mock('@/components/ExploreSidebar', () => ({
  __esModule: true,
  ExploreSidebar: () => <div data-testid="Mock ExploreSidebar" />,
}))

jest.mock('@/components/GameCard', () => ({
  __esModule: true,
  GameCard: () => <div data-testid="Mock GameCard" />,
}))

describe('<Games />', () => {
  it('should render sections', () => {
    renderWithTheme(
      <GamesTemplate
        filterItems={exploreSidebarMock}
        games={[gameCardSliderMock[0]]}
      />
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Show more' })
    ).toBeInTheDocument()
  })
})
