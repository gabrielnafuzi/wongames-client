import { renderHook, act } from '@testing-library/react'

import { useDisclosure } from '.'

describe('useDisclosure', () => {
  it('should handle close correctly', () => {
    const { result } = renderHook(() => useDisclosure(true))
    expect(result.current[0]).toBe(true)

    act(() => result.current[1].close())
    expect(result.current[0]).toBe(false)
  })

  it('should handle open correctly', () => {
    const { result } = renderHook(() => useDisclosure(false))
    expect(result.current[0]).toBe(false)

    act(() => result.current[1].open())
    expect(result.current[0]).toBe(true)
  })

  it('should handle toggle correctly', () => {
    const { result } = renderHook(() => useDisclosure(false))
    expect(result.current[0]).toBe(false)

    act(() => result.current[1].toggle())
    expect(result.current[0]).toBe(true)

    act(() => result.current[1].toggle())
    expect(result.current[0]).toBe(false)
  })

  it('should call onOpen when open is called', () => {
    const onOpenSpy = jest.fn()

    const { result } = renderHook(() =>
      useDisclosure(false, {
        onOpen: onOpenSpy,
      })
    )

    expect(onOpenSpy).toHaveBeenCalledTimes(0)

    act(() => result.current[1].open())
    expect(onOpenSpy).toHaveBeenCalledTimes(1)

    act(() => result.current[1].open())
    expect(onOpenSpy).toHaveBeenCalledTimes(1)
  })

  it('should call onClose when close is called', () => {
    const onCloseSpy = jest.fn()

    const { result } = renderHook(() =>
      useDisclosure(true, {
        onClose: onCloseSpy,
      })
    )

    expect(onCloseSpy).toHaveBeenCalledTimes(0)

    act(() => result.current[1].close())
    expect(onCloseSpy).toHaveBeenCalledTimes(1)

    act(() => result.current[1].close())
    expect(onCloseSpy).toHaveBeenCalledTimes(1)
  })

  it('should call onOpen and onClose correctly when toggle is called', () => {
    const onCloseSpy = jest.fn()
    const onOpenSpy = jest.fn()

    const { result } = renderHook(() =>
      useDisclosure(false, {
        onClose: onCloseSpy,
        onOpen: onOpenSpy,
      })
    )

    expect(onCloseSpy).toHaveBeenCalledTimes(0)
    expect(onOpenSpy).toHaveBeenCalledTimes(0)

    act(() => result.current[1].toggle())
    expect(onCloseSpy).toHaveBeenCalledTimes(0)
    expect(onOpenSpy).toHaveBeenCalledTimes(1)

    act(() => result.current[1].toggle())
    expect(onCloseSpy).toHaveBeenCalledTimes(1)
    expect(onOpenSpy).toHaveBeenCalledTimes(1)

    act(() => result.current[1].toggle())
    expect(onCloseSpy).toHaveBeenCalledTimes(1)
    expect(onOpenSpy).toHaveBeenCalledTimes(2)
  })
})
