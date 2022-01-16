import { Container, Footer, Heading, Menu } from '@/components'

export const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)
