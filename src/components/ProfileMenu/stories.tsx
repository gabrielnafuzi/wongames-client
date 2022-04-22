import { Story, Meta } from '@storybook/react'

import { ProfileMenu, ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {
    activeLink: {
      defaultValue: '/profile/me',
      control: {
        type: 'select',
        options: [
          '/profile/me',
          '/profile/cards',
          '/profile/orders',
          '/logout',
        ],
      },
    },
  },
} as Meta<ProfileMenuProps>

export const Default: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)
