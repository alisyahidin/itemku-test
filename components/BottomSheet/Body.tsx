import { FC, useEffect, useRef } from "react"
import { usePresence } from "framer-motion"
import clsx from "clsx"

type BodyProps = { handleOpen: (v: boolean) => void }

const BottomSheetBody: FC<BodyProps> = ({ children, handleOpen }) => {
  const element = useRef<HTMLDivElement>(null!)
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    if (isPresent) {
      element.current.style.transform = 'translateY(50%)'
    }
    if (!isPresent) {
      element.current.style.transform = 'translateY(100%)'
      setTimeout(safeToRemove, 300)
    }
  }, [isPresent, safeToRemove])

  return (<>
    <div
      onClick={() => handleOpen(false)}
      className={clsx([
        "fixed top-0 h-screen w-full max-w-[600px] bg-gray-900 bg-opacity-50 z-10",
        !isPresent && 'invisible'
      ])}
    />
    <div
      ref={element}
      className="flex flex-col items-center fixed bottom-0 w-full h-[90%] max-w-[600px] z-[15] bg-white rounded-t-3xl will-change-transform transition-transform duration-300 translate-y-full"
    >
      <div className="h-[4px] w-16 bg-gray-400 rounded my-3" />
      <div className="py-6 px-8">
        {children}
      </div>
    </div>
  </>)
}

export default BottomSheetBody