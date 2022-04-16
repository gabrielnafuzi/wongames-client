import { Story, Meta } from '@storybook/react'

import { TextContent, TextContentProps } from '.'
import { textContentMock } from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textContentMock,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta<TextContentProps>

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
