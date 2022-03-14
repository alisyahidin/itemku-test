import { forwardRef, PropsWithChildren, useImperativeHandle, useState } from "react"
import { AnimatePresence } from "framer-motion"
import BottomSheetBody from "./Body"

type Props = PropsWithChildren<{}>

export type BottomSheetAction = {
  open: () => void,
  close: () => void,
}

const BottomSheet = forwardRef<BottomSheetAction, Props>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (value = true) => {
    if (value) document.body.classList.add('overflow-y-hidden')
    if (!value) document.body.classList.remove('overflow-y-hidden')
    setIsOpen(value)
  }

  useImperativeHandle(ref, () => ({ open: () => handleOpen(true), close: () => handleOpen(false) }))

  return (
    <AnimatePresence>
      {isOpen && <BottomSheetBody handleOpen={handleOpen}>
        {props.children}
      </BottomSheetBody>}
    </AnimatePresence>)
})

BottomSheet.displayName = 'BottomSheet'

export default BottomSheet