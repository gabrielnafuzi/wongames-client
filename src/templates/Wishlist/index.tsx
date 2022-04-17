import {
  Container,
  Divider,
  GameCard,
  GameCardProps,
  Grid,
  Heading,
  HighlightProps,
  ShowCase,
} from '@/components'
import { Base } from '@/templates/Base'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

export const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-game-${index}`} {...game} />
          ))}
        </Grid>

        <Divider />
      </Container>

      <ShowCase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}
