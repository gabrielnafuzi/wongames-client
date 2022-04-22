import Link from 'next/link'

import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined'

import * as S from './styles'

type ActiveLink =
  | `/profile/${'me' | 'cards' | 'orders'}`
  | (string & Record<never, never>)

export type ProfileMenuProps = {
  activeLink?: ActiveLink
}

export const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      {links.map((link) => (
        <Link key={link.href} href={link.href} passHref>
          <S.Link isActive={activeLink === link.href} title={link.label}>
            <link.Icon size={24} />
            <span>{link.label}</span>
          </S.Link>
        </Link>
      ))}
    </S.Nav>
  )
}

const links = [
  { href: '/profile/me', label: 'My profile', Icon: AccountCircle },
  { href: '/profile/cards', label: 'My cards', Icon: CreditCard },
  { href: '/profile/orders', label: 'My orders', Icon: FormatListBulleted },
  { href: '/logout', label: 'Sign out', Icon: ExitToApp },
] as const
