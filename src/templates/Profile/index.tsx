import { Container, Heading, ProfileMenu } from '@/components'
import { Base } from '@/templates/Base'

import * as S from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

export const Profile = ({ children }: ProfileTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu />

          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}
