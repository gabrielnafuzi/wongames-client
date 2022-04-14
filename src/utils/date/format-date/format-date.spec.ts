import { formatDate } from './format-date'

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = '2020-11-21T23:00:00'
    expect(formatDate(date)).toBe('Nov 21, 2020')

    expect(
      formatDate(date, 'en-US', {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
      })
    ).toBe('11/21/2020')
  })
})
