import { forwardRef, PropsWithChildren, useImperativeHandle, useState } from "react"
import { AnimatePresence } from "framer-motion"
import BottomSheetBody from "./Body"

type Props = PropsWithChildren<{}>

export type BottomSheetAction = {
  open: () => void,
  openFull: () => void,
  close: () => void,
}

export type Mode = 'close' | 'half' | 'full'

const BottomSheet = forwardRef<BottomSheetAction, Props>(({ children }, ref) => {
  const [mode, setMode] = useState<Mode>('close')

  const toggleMode = (value: Mode) => {
    if (value !== 'close' && !document.body.classList.contains('overflow-y-hidden')) document.body.classList.add('overflow-y-hidden')
    if (value === 'close') document.body.classList.remove('overflow-y-hidden')
    setMode(value)
  }

  useImperativeHandle(ref, () => ({
    open: () => toggleMode('half'),
    openFull: () => toggleMode('full'),
    close: () => toggleMode('close'),
  }))

  return (
    <AnimatePresence>
      {mode !== 'close' && <BottomSheetBody mode={mode} toggleMode={toggleMode}>
        {children}
      </BottomSheetBody>}
    </AnimatePresence>)
})

BottomSheet.displayName = 'BottomSheet'

export default BottomSheet