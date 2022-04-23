import { Heading } from '@/components/Heading'
import type { PaymentCard } from '@/components/PaymentOptions'

import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

export const CardsList = ({ cards }: CardsListProps) => {
  return (
    <>
      <Heading lineBottom color="black" size="small">
        My cards
      </Heading>

      {cards?.map((card) => (
        <S.Card key={card.number}>
          <img src={card.img} alt={card.flag} />
          <span>{card.number}</span>
        </S.Card>
      ))}
    </>
  )
}
