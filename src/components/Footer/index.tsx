import Link from 'next/link'

import { Logo } from 'components/Logo'
import { Heading } from 'components/Heading'

import * as S from './styles'

type LocalHeadingProps = {
  title: string
}

const LocalHeading = ({ title }: LocalHeadingProps) => (
  <Heading color="black" size="small" lineBottom lineColor="secondary">
    {title}
  </Heading>
)

export const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <LocalHeading title="Contact" />

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <LocalHeading title="Follow us" />

        <nav aria-labelledby="social media">
          <a
            href="http://www.instagram.com/won-games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="http://www.twitter.com/won-games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>

          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>

          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <LocalHeading title="Links" />

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/games">
            <a>Store</a>
          </Link>

          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <LocalHeading title="Location" />

        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>
      Won Games {new Date().getFullYear()} &copy; All rights reserved.
    </S.Copyright>
  </S.Wrapper>
)
