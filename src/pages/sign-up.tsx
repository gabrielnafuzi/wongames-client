import type { NextPage } from 'next'

import { FormSignUp } from '@/components/FormSignUp'
import { Auth } from '@/templates'

const SignUp: NextPage = () => {
  return (
    <Auth title="Sign Up">
      <FormSignUp />
    </Auth>
  )
}

export default SignUp
