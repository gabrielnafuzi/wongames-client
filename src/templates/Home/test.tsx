import 'match-media-mock'

import React from 'react'

import { screen } from '@testing-library/react'

import { bannerSliderMock } from '@/components/BannerSlider/mock'
import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { highlightMock } from '@/components/Highlight/mock'
import { renderWithTheme } from '@/utils/tests'

import { Home } from '.'

const props = {
  banners: bannerSliderMock,
  newGames: [gameCardSliderMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gameCardSliderMock[0]],
  upcomingGames: [gameCardSliderMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gameCardSliderMock[0]],
  freeGames: [gameCardSliderMock[0]],
  freeHighlight: highlightMock,
}

jest.mock('@/components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: () => <div data-testid="Mock ShowCase" />,
  }
})

jest.mock('@/components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: () => <div data-testid="Mock BannerSlider" />,
  }
})

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(5)
  })
})
