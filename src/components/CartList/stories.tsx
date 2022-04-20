import { Story, Meta } from '@storybook/react'

import { CartList, CartListProps } from '.'
import { cartListMock } from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: cartListMock,
    total: 'R$ 565,00',
  },
  argTypes: {
    items: {
      control: false,
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta<CartListProps>

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
