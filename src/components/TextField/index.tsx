import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    setValue(newValue)

    if (onInput) {
      onInput(newValue)
    }
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
