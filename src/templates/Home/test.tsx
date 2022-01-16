import 'match-media-mock'

import { screen } from '@testing-library/react'

import { items as bannersMock } from '@/components/BannerSlider/mock'
import { items as gamesMock } from '@/components/GameCardSlider/mock'
import { item as highlightMock } from '@/components/Highlight/mock'
import { renderWithTheme } from '@/utils/tests'

import { Home } from '.'

const props = {
  banners: bannersMock,
  newGamers: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render menu, sections and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

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

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    // card game ( 5 sections with 1 cards each = 5 * 1 = 5 cards )
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)

    // highlight
    expect(screen.getAllByText(/red dead is back!/i)).toHaveLength(3)
  })
})
