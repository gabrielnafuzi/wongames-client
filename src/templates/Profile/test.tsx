import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { Profile } from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' })),
}))

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock Base">{children}</div>
  ),
}))

jest.mock('@/components/Heading', () => ({
  __esModule: true,
  Heading: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock Heading">{children}</div>
  ),
}))

jest.mock('@/components/ProfileMenu', () => ({
  __esModule: true,
  ProfileMenu: () => <div data-testid="Mock ProfileMenu" />,
}))

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Lorem Ipsum</Profile>)

    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument()
    expect(screen.getByText('My profile')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
