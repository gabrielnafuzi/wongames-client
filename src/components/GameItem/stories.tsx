import { Story, Meta } from '@storybook/react'

import { GameItem, GameItemProps } from '.'

export default {
  title: 'Game/GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,99',
  },
} as Meta<GameItemProps>

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://link.io',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 1234',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32',
  },
}
