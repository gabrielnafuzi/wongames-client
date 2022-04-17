import { Story, Meta } from '@storybook/react'

import { GameCardProps } from '@/components/GameCard'

import { GameCardSlider } from '.'
import { gameCardSliderMock } from './mock'

export default {
  title: 'Game/GameCardSlider',
  component: GameCardSlider,
  args: { gameCardSliderMock },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)
