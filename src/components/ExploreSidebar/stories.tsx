import { Story, Meta } from '@storybook/react'

import { ExploreSidebar, ExploreSidebarProps } from '.'
import { exploreSidebarMock } from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: exploreSidebarMock,
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{
        windows: true,
        sort_by: 'high-to-low',
      }}
    />
  </div>
)
