import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { GameCard, GameCardProps, Grid } from '@/components'
import { ExploreSidebar, ItemProps } from '@/components/ExploreSidebar'
import { Base } from '@/templates/Base'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

export const GamesTemplate = ({
  games = [],
  filterItems,
}: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map((game, idx) => (
              <GameCard key={`${game.title}-${idx}`} {...game} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show more</p>
            <KeyboardArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}
