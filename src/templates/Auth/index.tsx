import { Heading, Logo } from '@/components'

import * as S from './styles'

const currentYear = new Date().getFullYear()

type AuthProps = {
  title: string
  children: React.ReactNode
}

export const Auth = ({ children, title }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <Logo />

        <Heading>All your favorite games in one place</Heading>
        <S.Subtitle>
          <strong>WON</strong> is the best and most complete gaming platform.
        </S.Subtitle>

        <S.Footer>
          Won Games {currentYear} © Todos os direitos reservados
        </S.Footer>
      </S.BannerBlock>

      <S.Content>
        <Logo color="black" size="large" />

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.Content>
    </S.Wrapper>
  )
}
