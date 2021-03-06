import { screen } from '@testing-library/react'

import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { highlightMock } from '@/components/Highlight/mock'
import { renderWithTheme } from '@/utils/tests'

import { Wishlist, WishlistTemplateProps } from '.'

const props: WishlistTemplateProps = {
  games: gameCardSliderMock.slice(0, 5),
  recommendedGames: gameCardSliderMock,
  recommendedHighlight: highlightMock,
}

jest.mock('@/components/ShowCase', () => ({
  __esModule: true,
  ShowCase: () => <div data-testid="Mock ShowCase" />,
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gameCardSliderMock}
        recommendedHighlight={highlightMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
