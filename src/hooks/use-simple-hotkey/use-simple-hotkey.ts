import { useEffect } from 'react'

export const useSimpleHotkey = (
  key: string,
  handler: (event: KeyboardEvent) => void
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        handler(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, handler])
}
