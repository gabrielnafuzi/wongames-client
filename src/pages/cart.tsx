import type { NextPage, GetServerSideProps } from 'next'

import { cartListMock } from '@/components/CartList/mock'
import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { highlightMock } from '@/components/Highlight/mock'
import { paymentOptionsMock } from '@/components/PaymentOptions/mock'
import { Cart, CartTemplateProps } from '@/templates'

type GetServerSidePropsCart = GetServerSideProps<CartTemplateProps>

const CartPage: NextPage<CartTemplateProps> = (props) => {
  return <Cart {...props} />
}

export const getServerSideProps: GetServerSidePropsCart = async () => {
  return {
    props: {
      recommendedGames: gameCardSliderMock,
      recommendedHighlight: highlightMock,
      items: cartListMock,
      total: '$ 565,00',
      cards: paymentOptionsMock,
    },
  }
}

export default CartPage
