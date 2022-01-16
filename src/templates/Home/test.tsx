import 'match-media-mock'

import { screen } from '@testing-library/react'

import { items as bannersMock } from '@/components/BannerSlider/mock'
import { items as gamesMock } from '@/components/GameCardSlider/mock'
import { item as highlightMock } from '@/components/Highlight/mock'
import { renderWithTheme } from '@/utils/tests'

import { Home } from '.'

const props = {
  banners: bannersMock,
  newGamers: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByRole('heading', { name: /news/i })).toHaveStyle({
      color: '#030517',
      borderLeft: '0.7rem solid #3CD3C1'
    })

    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveStyle({
      color: '#FAFAFA',
      borderLeft: '0.7rem solid #3CD3C1'
    })

    expect(screen.getByRole('heading', { name: /upcoming/i })).toHaveStyle({
      color: '#FAFAFA',
      borderLeft: '0.7rem solid #3CD3C1'
    })

    expect(screen.getByRole('heading', { name: /free games/i })).toHaveStyle({
      color: '#FAFAFA',
      borderLeft: '0.7rem solid #3CD3C1'
    })
  })

  it('should render section elements', () => {
    renderWithTheme(<Home {...props} />)

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    // card game ( 5 sections with 4 cards each = 5 * 4 = 20 cards )
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20)

    // highlight
    expect(screen.getAllByText(/red dead is back!/i)).toHaveLength(3)
  })
})
