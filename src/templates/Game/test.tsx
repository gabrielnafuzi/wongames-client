import { screen } from '@testing-library/react'

import { galleryMock } from '@/components/Gallery/mock'
import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { gameDetailsMock } from '@/components/GameDetails/mock'
import { gameInfoMock } from '@/components/GameInfo/mock'
import { highlightMock } from '@/components/Highlight/mock'
import { renderWithTheme } from '@/utils/tests'

import 'match-media-mock'
import { Game, GameTemplateProps } from '.'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: gameDetailsMock,
  upcomingGames: gameCardSliderMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gameCardSliderMock,
}

// #region mocks
jest.mock('@/components/Menu', () => ({
  __esModule: true,
  Menu: () => <div data-testid="Mock Menu" />,
}))

jest.mock('@/components/Gallery', () => ({
  __esModule: true,
  Gallery: () => <div data-testid="Mock Gallery" />,
}))

jest.mock('@/components/GameDetails', () => ({
  __esModule: true,
  GameDetails: () => <div data-testid="Mock GameDetails" />,
}))

jest.mock('@/components/GameInfo', () => ({
  __esModule: true,
  GameInfo: () => <div data-testid="Mock GameInfo" />,
}))

jest.mock('@/components/ShowCase', () => ({
  __esModule: true,
  ShowCase: () => <div data-testid="Mock ShowCase" />,
}))
// #endregion

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none',
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)',
      }
    )
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('img', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)',
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)',
      }
    )
  })
})
