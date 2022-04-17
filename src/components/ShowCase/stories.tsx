import { Story, Meta } from '@storybook/react'

import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { highlightMock } from '@/components/Highlight/mock'

import { ShowCase, type ShowCaseProps } from '.'

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gameCardSliderMock,
}

export const WithoutHighlight: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gameCardSliderMock,
}

export const WithoutGames: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
}
