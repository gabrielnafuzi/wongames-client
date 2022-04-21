import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/tests'

import { PaymentOptions } from '.'
import { paymentOptionsMock } from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions cards={paymentOptionsMock} handlePayment={jest.fn} />
    )

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions cards={paymentOptionsMock} handlePayment={jest.fn} />
    )

    userEvent.click(screen.getByLabelText(/4325/))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePaymentSpy = jest.fn()

    renderWithTheme(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePaymentSpy}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePaymentSpy).not.toHaveBeenCalled()
    expect(handlePaymentSpy).toHaveBeenCalledTimes(0)
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePaymentSpy = jest.fn()

    renderWithTheme(
      <PaymentOptions
        cards={paymentOptionsMock}
        handlePayment={handlePaymentSpy}
      />
    )

    userEvent.click(screen.getByLabelText(/4325/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePaymentSpy).toHaveBeenCalled()
      expect(handlePaymentSpy).toHaveBeenCalledTimes(1)
    })
  })
})
