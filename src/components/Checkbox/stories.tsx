import { Story, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <div style={{ display: 'grid', rowGap: '1.6rem' }}>
    <Checkbox isChecked label="Action" labelFor="action" {...args} />
    <Checkbox label="Adventure" labelFor="adventure" {...args} />
    <Checkbox label="Strategy" labelFor="strategy" {...args} />
  </div>
)
