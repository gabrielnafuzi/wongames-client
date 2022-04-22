import type { NextPage } from 'next'

import { FormSignIn } from '@/components/FormSignIn'
import { Auth } from '@/templates'

const SignIn: NextPage = () => {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  )
}

export default SignIn
