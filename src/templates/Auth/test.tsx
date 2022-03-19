import 'match-media-mock'

import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { Auth } from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    const currentYear = new Date().getFullYear()

    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img')).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i,
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()

    expect(
      screen.getByText(
        `Won Games ${currentYear} © Todos os direitos reservados`
      )
    ).toBeInTheDocument()
  })
})
