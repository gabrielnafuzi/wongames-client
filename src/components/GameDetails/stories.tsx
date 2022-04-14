import { Story, Meta } from '@storybook/react'

import { GameDetails, GameDetailsProps } from '.'
import { gameDetailsMock } from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: gameDetailsMock,
  argTypes: {
    releaseDate: {
      control: 'date',
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac'],
      },
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Action', 'Adventure', 'Fighting', 'Sports', 'Strategy'],
      },
    },
  },
} as Meta<GameDetailsProps>

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
