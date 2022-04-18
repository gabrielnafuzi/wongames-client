import {
  Container,
  Divider,
  Empty,
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
  games = [],
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games.length ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist-game-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

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
