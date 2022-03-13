import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'

import { items as bannersMock } from '@/components/BannerSlider/mock'
import { items as gamesMock } from '@/components/GameCardSlider/mock'
import { item as highlightMock } from '@/components/Highlight/mock'
import { Home, HomeTemplateProps } from '@/templates'

type IndexPage = NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
>

type GetServerSidePropsHome = GetServerSideProps<HomeTemplateProps>

const Index: IndexPage = ({ children: _, ...props }) => {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSidePropsHome = async () => {
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
