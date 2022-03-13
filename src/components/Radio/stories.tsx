import { Story, Meta } from '@storybook/react/types-6-0'

import { Radio, RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ display: 'grid', rowGap: '1.6rem' }}>
      <Radio
        label="first"
        labelFor="first"
        id="first"
        name="radio"
        value="first"
        defaultChecked
        {...args}
      />

      <Radio
        label="second"
        labelFor="second"
        id="second"
        name="radio"
        value="second"
        {...args}
      />

      <Radio
        label="third"
        labelFor="third"
        id="third"
        name="radio"
        value="third"
        {...args}
      />
    </div>
  </>
)
