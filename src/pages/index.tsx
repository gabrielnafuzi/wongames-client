import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

import { items as bannersMock } from '@/components/BannerSlider/mock'
import { items as gamesMock } from '@/components/GameCardSlider/mock'
import { item as highlightMock } from '@/components/Highlight/mock'
import { Home, HomeTemplateProps } from '@/templates'

const Index: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  ({ children: _, ...props }) => {
    return <Home {...props} />
  }

export const getServerSideProps: GetServerSideProps<HomeTemplateProps> =
  async () => {
    return {
      props: {
        banners: bannersMock,
        newGames: gamesMock,
        mostPopularHighlight: highlightMock,
        mostPopularGames: gamesMock,
        upcomingGames: gamesMock,
        upcomingHighlight: highlightMock,
        upcomingMoreGames: gamesMock,
        freeGames: gamesMock,
        freeHighlight: highlightMock,
      },
    }
  }

export default Index
