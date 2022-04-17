import {
  Gallery,
  GalleryImageProps,
  GameCardProps,
  GameDetails,
  GameDetailsProps,
  GameInfo,
  GameInfoProps,
  HighlightProps,
  ShowCase,
  TextContent,
  Divider,
} from '@/components'
import { Base } from '@/templates/Base'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

export const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
}: GameTemplateProps) => {
  return (
    <Base>
      <S.Cover src={cover} role="img" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </S.SectionGameDetails>

        <ShowCase
          title="Upcoming"
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <ShowCase title="You may like these games" games={recommendedGames} />
      </S.Main>
    </Base>
  )
}
