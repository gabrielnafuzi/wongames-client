export const formatDate = (
  dateStr: string,
  locale = 'en-US',
  options?: Intl.DateTimeFormatOptions
) => {
  const date = new Date(dateStr)

  const formatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    ...options,
  })

  return formatter.format(date)
}
