import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/tests'

import { ExploreSidebar } from '.'
import { exploreSidebarMock } from './mock'
import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={jest.fn} />
    )

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={jest.fn} />
    )

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={jest.fn} />
    )

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebarMock}
        initialValues={{
          windows: true,
          sort_by: 'low-to-high',
        }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={exploreSidebarMock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        windows: true,
        sort_by: 'low-to-high',
      })
    })
  })

  it('should filter with checked values', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={onFilter} />
    )

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        windows: true,
        linux: true,
        sort_by: 'low-to-high',
      })
    })
  })

  it('should alternate between radio options', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={onFilter} />
    )

    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        sort_by: 'high-to-low',
      })
    })
  })

  it('should open/close sidebar when filtering on mobile ', async () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={exploreSidebarMock} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: `
        ${Overlay}
      `,
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    fireEvent.click(screen.getByLabelText(/open filters/i))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    fireEvent.click(screen.getByLabelText(/close filters/i))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})