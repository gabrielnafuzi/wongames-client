import { Story, Meta } from '@storybook/react'

import { PaymentOptions, PaymentOptionsProps } from '.'
import { paymentOptionsMock } from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: paymentOptionsMock,
  },
  argTypes: {
    cards: {
      control: false,
    },
    handlePayment: {
      action: 'clicked',
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta<PaymentOptionsProps>

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
