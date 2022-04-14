import { formatCurrency } from './format-currency'

describe('formatCurrency', () => {
  it('should format a number to currency', () => {
    expect(formatCurrency(1.23)).toBe('$1.23')
    expect(formatCurrency(1.23, 'en-US')).toBe('$1.23')
    expect(formatCurrency(1.23, 'en-US', { currency: 'EUR' })).toBe('€1.23')

    expect(
      formatCurrency(1.23, 'en-US', { currency: 'EUR', style: 'currency' })
    ).toBe('€1.23')

    expect(
      formatCurrency(1.23, 'en-US', {
        currency: 'EUR',
        style: 'currency',
        currencyDisplay: 'symbol',
      })
    ).toBe('€1.23')
  })

  it('should format a string to currency', () => {
    expect(formatCurrency('1.23')).toBe('$1.23')
    expect(formatCurrency('1.23', 'en-US')).toBe('$1.23')
    expect(formatCurrency('1.23', 'en-US', { currency: 'EUR' })).toBe('€1.23')

    expect(
      formatCurrency('1.23', 'en-US', { currency: 'EUR', style: 'currency' })
    ).toBe('€1.23')

    expect(
      formatCurrency('1.23', 'en-US', {
        currency: 'EUR',
        style: 'currency',
        currencyDisplay: 'symbol',
      })
    ).toBe('€1.23')
  })

  it('should return the value if it is not a number', () => {
    expect(
      formatCurrency('x1.23', 'en-US', { currency: 'EUR', style: 'currency' })
    ).toBe('x1.23')

    expect(
      formatCurrency('$1.23', 'en-US', {
        currency: 'EUR',
        style: 'currency',
      })
    ).toBe('$1.23')
  })
})
