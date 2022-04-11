import {
  AddShoppingCart,
  FavoriteBorder,
} from '@styled-icons/material-outlined'

import { Heading, Ribbon, Button } from '@/components'
import { formatCurrency } from '@/utils/currency'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

export const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{formatCurrency(price)}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <Button icon={<AddShoppingCart />} size="large">
          Add to cart
        </Button>

        <Button icon={<FavoriteBorder />} size="large" minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
