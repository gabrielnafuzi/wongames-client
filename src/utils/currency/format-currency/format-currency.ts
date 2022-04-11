export const formatCurrency = (
  value: number | string,
  locale = 'en-US',
  options?: Intl.NumberFormatOptions
) => {
  const number = typeof value === 'string' ? parseFloat(value) : value

  if (isNaN(number)) {
    return value
  }

  const formatter = new Intl.NumberFormat(locale, {
    ...defaultOptions,
    ...options,
  })

  return formatter.format(number)
}

const defaultOptions: Intl.NumberFormatOptions = {
  style: 'currency',
  currency: 'USD',
}
