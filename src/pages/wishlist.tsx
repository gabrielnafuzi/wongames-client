import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { highlightMock } from '@/components/Highlight/mock'
import { Wishlist, WishlistTemplateProps } from '@/templates'

type GetStaticPropsWishlist = GetStaticProps<WishlistTemplateProps>
type WishlistPageWithProps = NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
>

const WishlistPage: WishlistPageWithProps = (props) => {
  return <Wishlist {...props} />
}

export const getStaticProps: GetStaticPropsWishlist = async () => {
  return {
    props: {
      games: gameCardSliderMock,
      recommendedGames: gameCardSliderMock.slice(0, 5),
      recommendedHighlight: highlightMock,
    },
  }
}

export default WishlistPage
