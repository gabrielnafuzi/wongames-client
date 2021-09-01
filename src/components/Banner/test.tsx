import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'

import { Banner } from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /defy death/i })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )
    expect(screen.getByRole('img', { name: /defy death/i })).toHaveAttribute(
      'aria-label',
      'Defy death'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
