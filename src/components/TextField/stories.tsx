import { Story, Meta } from '@storybook/react'

import { TextField, TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'email',
    id: 'email',
    initialValue: '',
    placeholder: 'johndoe@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as Meta

export const Default: Story<TextFieldProps> = (args) => {
  return (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}
