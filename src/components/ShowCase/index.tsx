import type { GameCardProps } from '@/components/GameCard'
import { GameCardSlider } from '@/components/GameCardSlider'
import { Heading } from '@/components/Heading'
import { Highlight, type HighlightProps } from '@/components/Highlight'

import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

export const ShowCase = ({ title, highlight, games }: ShowCaseProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      {!!highlight && <Highlight {...highlight} />}
      {!!games && <GameCardSlider items={games} />}
    </S.Wrapper>
  )
}
