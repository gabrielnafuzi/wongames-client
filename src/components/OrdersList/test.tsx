import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { OrdersList } from '.'
import { ordersListMock } from './mock'

jest.mock('@/components/Empty', () => ({
  __esModule: true,
  Empty: () => <div data-testid="Mock Empty" />,
}))

jest.mock('@/components/GameItem', () => ({
  __esModule: true,
  GameItem: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock GameItem">{children}</div>
  ),
}))

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    renderWithTheme(<OrdersList items={ordersListMock} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render the empty component', () => {
    renderWithTheme(<OrdersList />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
