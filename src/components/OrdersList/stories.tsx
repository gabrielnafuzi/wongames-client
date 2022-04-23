import { Story, Meta } from '@storybook/react'

import { OrdersList } from '.'

import { OrdersListProps } from '..'

import { ordersListMock } from './mock'

export default {
  title: 'OrdersList',
  component: OrdersList,
  args: {
    items: ordersListMock,
  },
} as Meta<OrdersListProps>

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
