import type { GetServerSideProps, NextPage } from 'next'

import { exploreSidebarMock } from '@/components/ExploreSidebar/mock'
import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { GamesTemplate, GamesTemplateProps } from '@/templates'

type GetServerSidePropsGames = GetServerSideProps<GamesTemplateProps>

const GamesPage: NextPage<GamesTemplateProps> = (props) => {
  return <GamesTemplate {...props} />
}

export const getServerSideProps: GetServerSidePropsGames = async () => {
  return {
    props: {
      games: gameCardSliderMock,
      filterItems: exploreSidebarMock,
    },
  }
}

export default GamesPage
