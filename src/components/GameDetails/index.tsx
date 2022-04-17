import { useMemo } from 'react'

import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

import { Heading, MediaMatch } from '@/components'
import { formatDate } from '@/utils/date'

import * as S from './styles'

type Platform = 'mac' | 'windows' | 'linux'
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  platforms: Platform[]
  releaseDate: string
  rating: Rating
  publisher: string
  genres: string[]
}

const platformIcons: Record<Platform, JSX.Element> = {
  linux: <Linux title="Linux" size={18} />,
  mac: <Apple title="Mac" size={18} />,
  windows: <Windows title="Windows" size={18} />,
}

export const GameDetails = ({
  developer,
  platforms,
  releaseDate,
  rating,
  genres,
  publisher,
}: GameDetailsProps) => {
  const formattedReleaseDate = useMemo(
    () => formatDate(releaseDate),
    [releaseDate]
  )

  const formattedGenres = useMemo(() => genres.join(' / '), [genres])

  const formattedRating = useMemo(() => {
    if (rating === 'BR0') {
      return 'FREE'
    }

    return `${rating.replace('BR', '')}+`
  }, [rating])

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>{formattedReleaseDate}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>

          <S.IconsWrapper>
            {platforms.map((platform) => (
              <S.Icon key={platform}>{platformIcons[platform]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>{formattedRating}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{formattedGenres}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}
