import type { NextPage } from 'next'

import { FormProfile } from '@/components'
import { Profile } from '@/templates'

const ProfileMePage: NextPage = () => {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}

export default ProfileMePage
