import { Container, Footer, Menu } from '@/components'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}
