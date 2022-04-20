import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { CartList } from '.'
import { cartListMock } from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={cartListMock} total="R$ 565,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 565,00')).toHaveStyle({
      color: '#F231A5',
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
