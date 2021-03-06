import Link from 'next/link'

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
        <S.BannerContent>
          <Link href="/">
            <a>
              <Logo id="banner" />
            </a>
          </Link>

          <div>
            <Heading size="huge">All your favorite games in one place</Heading>

            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>

          <S.Footer>
            Won Games {currentYear} © Todos os direitos reservados
          </S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <a>
              <Logo id="content" color="black" size="large" />
            </a>
          </Link>

          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
