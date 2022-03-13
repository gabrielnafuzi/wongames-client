import { Story, Meta } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'

import { TextField, TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'email',
    id: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'johndoe@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' },
  },
} as Meta

export const Default: Story<TextFieldProps> = (args) => {
  return (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}
