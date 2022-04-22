import 'match-media-mock'
import { screen } from '@testing-library/react'

import { cartListMock } from '@/components/CartList/mock'
import { gameCardSliderMock } from '@/components/GameCardSlider/mock'
import { highlightMock } from '@/components/Highlight/mock'
import { paymentOptionsMock } from '@/components/PaymentOptions/mock'
import { renderWithTheme } from '@/utils/tests'

import { Cart, CartTemplateProps } from '.'

const props: CartTemplateProps = {
  items: cartListMock,
  total: '$ 565,00',
  cards: paymentOptionsMock,
  recommendedGames: gameCardSliderMock,
  recommendedHighlight: highlightMock,
}

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock Base">{children}</div>
  ),
}))

jest.mock('@/components/ShowCase', () => ({
  __esModule: true,
  ShowCase: () => <div data-testid="Mock ShowCase" />,
}))

jest.mock('@/components/CartList', () => ({
  __esModule: true,
  CartList: () => <div data-testid="Mock CartList" />,
}))

jest.mock('@/components/PaymentOptions', () => ({
  __esModule: true,
  PaymentOptions: () => <div data-testid="Mock PaymentOptions" />,
}))

jest.mock('@/components/Empty', () => ({
  __esModule: true,
  Empty: () => <div data-testid="Mock Empty" />,
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
