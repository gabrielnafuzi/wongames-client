import 'match-media-mock'

import React from 'react'

import { screen } from '@testing-library/react'

import { items as bannersMock } from '@/components/BannerSlider/mock'
import { items as gamesMock } from '@/components/GameCardSlider/mock'
import { item as highlightMock } from '@/components/Highlight/mock'
import { renderWithTheme } from '@/utils/tests'

import { Home } from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock,
}

jest.mock('@/components/Menu', () => {
  return {
    __esModule: true,
    Menu: () => <div data-testid="Mock Menu" />,
  }
})

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
  it('should render menu, sections and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(5)
  })
})
