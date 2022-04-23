import type { GetServerSideProps, NextPage } from 'next'

import { CardsList, CardsListProps } from '@/components'
import { paymentOptionsMock } from '@/components/PaymentOptions/mock'
import { Profile } from '@/templates'

type GetServerSidePropsProfileCards = GetServerSideProps<CardsListProps>

const ProfileCardsPage: NextPage<CardsListProps> = ({ cards }) => {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSidePropsProfileCards = async () => {
  return {
    props: {
      cards: paymentOptionsMock,
    },
  }
}

export default ProfileCardsPage
