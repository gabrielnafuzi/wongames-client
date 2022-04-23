import { Story, Meta } from '@storybook/react'

import { CardsList, CardsListProps } from '.'
import { paymentOptionsMock } from '../PaymentOptions/mock'

export default {
  title: 'CardsList',
  component: CardsList,
  args: {
    cards: paymentOptionsMock,
  },
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
