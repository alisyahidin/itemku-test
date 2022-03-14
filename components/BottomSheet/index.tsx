import { forwardRef, PropsWithChildren, useImperativeHandle, useState } from "react"
import clsx from "clsx"

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

  return (<>
    <div
      onClick={() => handleOpen(false)}
      className={clsx([
        "fixed top-0 h-screen w-full max-w-[600px] bg-gray-900 bg-opacity-50 z-10",
        !isOpen && 'invisible'
      ])}
    />
    <div
      style={{ transform: `translateY(${isOpen ? 50 : 100}%)` }}
      className="flex flex-col items-center fixed bottom-0 w-full h-[90%] max-w-[600px] z-[15] bg-white rounded-t-3xl will-change-transform transition-transform duration-300 translate-y-full"
    >
      <div className="h-[4px] w-16 bg-gray-400 rounded my-3" />
      <div className="py-6 px-8">
        {props.children}
      </div>
    </div>
  </>)
})

BottomSheet.displayName = 'BottomSheet'

export default BottomSheet