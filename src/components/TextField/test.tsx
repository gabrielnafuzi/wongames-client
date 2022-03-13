import { Email } from '@styled-icons/material-outlined'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/tests'

import { TextField } from '.'

describe('<TextField />', () => {
  it('should with label', () => {
    renderWithTheme(<TextField label="label" labelFor="field" id="field" />)

    expect(screen.queryByLabelText('label')).toBeInTheDocument()
  })

  it('should without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="placeholder" />)

    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument()
  })

  it('should changes its value when typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField label="label" labelFor="field" id="field" onInput={onInput} />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
      expect(onInput).toHaveBeenLastCalledWith(text)
    })
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<TextField label="label" labelFor="field" id="field" />)

    const input = screen.getByLabelText('label')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(input).toHaveFocus()
  })

  it('should render with a icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should not changes its value when disabled', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        label="label"
        labelFor="field"
        id="field"
        onInput={onInput}
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
      expect(onInput).not.toHaveBeenCalled()
    })
  })

  it('should not be accessible by tab when disabled', () => {
    renderWithTheme(
      <TextField label="label" labelFor="field" id="field" disabled />
    )

    const input = screen.getByLabelText('label')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(input).not.toHaveFocus()
  })

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="label"
        labelFor="field"
        id="field"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
