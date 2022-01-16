import 'match-media-mock'

import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { Home } from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /News/i })).toHaveStyle({
      color: '#030517',
      borderLeft: '0.7rem solid #3CD3C1'
    })

    expect(screen.getByRole('heading', { name: /Most popular/i })).toHaveStyle({
      color: '#FAFAFA',
      borderLeft: '0.7rem solid #3CD3C1'
    })

    expect(screen.getByRole('heading', { name: /Upcoming/i })).toHaveStyle({
      color: '#FAFAFA',
      borderLeft: '0.7rem solid #3CD3C1'
    })

    expect(screen.getByRole('heading', { name: /Free games/i })).toHaveStyle({
      color: '#FAFAFA',
      borderLeft: '0.7rem solid #3CD3C1'
    })
  })
})
