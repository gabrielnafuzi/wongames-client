import {
  Container,
  Divider,
  Heading,
  ShowCase,
  CartList,
  PaymentOptions,
  Empty,
} from '@/components'
import type {
  PaymentOptionsProps,
  CartListProps,
  HighlightProps,
  GameCardProps,
} from '@/components'
import { Base } from '@/templates/Base'

import * as S from './styles'

export type CartTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

export const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards,
}: CartTemplateProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <ShowCase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}
