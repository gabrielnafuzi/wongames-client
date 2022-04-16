import { renderHook, fireEvent } from '@testing-library/react'

import { useSimpleHotkey } from '.'

describe('useSimpleHotKey', () => {
  it('should call the handler when the key is pressed', () => {
    const handler = jest.fn()
    renderHook(() => useSimpleHotkey('a', handler))

    fireEvent.keyDown(window, { key: 'a' })
    expect(handler).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(window, { key: 'b' })
    expect(handler).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(window, { key: 'a' })
    expect(handler).toHaveBeenCalledTimes(2)
  })

  it('should not call the handler when the key is not pressed', () => {
    const handler = jest.fn()
    renderHook(() => useSimpleHotkey('a', handler))

    fireEvent.keyDown(window, { key: 'b' })
    expect(handler).toHaveBeenCalledTimes(0)
  })
})
