import Link from 'next/link'

import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { Button } from '../Button'
import { TextField } from '../TextField'
import * as S from './styles'

export const FormSignUp = () => {
  return (
    <S.Wrapper>
      <form>
        <TextField name="name" placeholder="Name" icon={<AccountCircle />} />

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />

        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />

        <TextField
          name="confirm-password"
          placeholder="Confirm Password"
          type="password"
          icon={<Lock />}
        />

        <Button size="large" fullWidth>
          Sign up now
        </Button>

        <S.FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}
