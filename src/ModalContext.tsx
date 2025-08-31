import { createContext, useContext, ReactNode } from 'react'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

const ModalContext = createContext<UseDisclosureReturn | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useLitePaperModal = (): UseDisclosureReturn => {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useLitePaperModal 必须在 ModalProvider 内使用')
  return ctx
}

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const disclosure = useDisclosure()
  return <ModalContext.Provider value={disclosure}>{children}</ModalContext.Provider>
}
