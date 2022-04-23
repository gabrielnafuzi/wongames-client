import type { GetServerSideProps, NextPage } from 'next'

import { OrdersList, OrdersListProps } from '@/components'
import { ordersListMock } from '@/components/OrdersList/mock'
import { Profile } from '@/templates'

type GetServerSidePropsProfileOrders = GetServerSideProps<OrdersListProps>

const ProfileOrdersPage: NextPage<OrdersListProps> = ({ items }) => {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSidePropsProfileOrders = async () => {
  return {
    props: {
      items: ordersListMock,
    },
  }
}

export default ProfileOrdersPage
