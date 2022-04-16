import { useState } from 'react'

type Callbacks = {
  onOpen?: () => void
  onClose?: () => void
}

export const useDisclosure = (initialState: boolean, callbacks?: Callbacks) => {
  const [opened, setOpened] = useState(initialState)

  const open = () => {
    if (!opened) {
      setOpened(true)

      callbacks?.onOpen?.()
    }
  }

  const close = () => {
    if (opened) {
      setOpened(false)

      callbacks?.onClose?.()
    }
  }

  const toggle = () => {
    opened ? close() : open()
  }

  return [opened, { open, close, toggle }] as const
}
