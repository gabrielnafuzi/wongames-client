import { useDisclosure } from '@/hooks'

import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

export const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, { toggle }] = useDisclosure(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={toggle}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}
