import { GetServerSideProps, NextPage } from 'next'

import { bannerSliderMock } from '@/components/BannerSlider/mock'
import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { highlightMock } from '@/components/Highlight/mock'
import { Home, HomeTemplateProps } from '@/templates'

type GetServerSidePropsHome = GetServerSideProps<HomeTemplateProps>

const Index: NextPage<HomeTemplateProps> = (props) => {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSidePropsHome = async () => {
  return {
    props: {
      banners: bannerSliderMock,
      newGames: gameCardSliderMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gameCardSliderMock,
      upcomingGames: gameCardSliderMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gameCardSliderMock,
      freeGames: gameCardSliderMock,
      freeHighlight: highlightMock,
    },
  }
}

export default Index
