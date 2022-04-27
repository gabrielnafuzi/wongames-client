import { useState } from 'react'

import { Close, FilterList } from '@styled-icons/material-outlined'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Heading } from '@/components/Heading'
import { Radio } from '@/components/Radio'

import * as S from './styles'

type Field = {
  label: string
  name: string
}

type Values = Record<string, boolean | string>

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  fields: Field[]
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

export const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {},
}: ExploreSidebarProps) => {
  const [values, setValues] = useState<Values>(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (name: string, value: boolean | string) => {
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleFilter = () => {
    onFilter(values)
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />

      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map(({ name, label }) => (
                <Checkbox
                  key={name}
                  name={name}
                  label={label}
                  labelFor={name}
                  isChecked={!!values[name]}
                  onCheck={(v) => handleChange(name, v)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map(({ name, label }) => (
                <Radio
                  key={name}
                  id={name}
                  name={item.name}
                  label={label}
                  labelFor={name}
                  value={name}
                  defaultChecked={name === values[item.name]}
                  onChange={() => handleChange(item.name, name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
