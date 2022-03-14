import { FC, TouchEvent, useEffect, useRef, useState } from "react"
import { usePresence } from "framer-motion"
import clsx from "clsx"
import { Mode } from "."

type BodyProps = { mode: Mode, toggleMode: (v: Mode) => void }

const getTouchY = (e: TouchEvent<HTMLDivElement>) => {
  const touch = e.touches[0] || e.changedTouches[0]
  return touch.clientY
}

const BottomSheetBody: FC<BodyProps> = ({ children, mode, toggleMode }) => {
  const totalHeight = useRef<number>(50)
  const backdropElement = useRef<HTMLDivElement>(null!)
  const bodyElement = useRef<HTMLDivElement>(null!)
  const [isPresent, safeToRemove] = usePresence()

  const [initialPositionY, setInitalPositionY] = useState<number | null>(null)

  const handleDrag = (clientY: number) => {
    if (initialPositionY !== null) {
      const totalHeightByBody = (window.innerHeight * (90 / 100)) // height of body 90vh
      const initialHeight = mode === 'half' ? 50 : 0
      const total = initialHeight - (((initialPositionY - clientY) / totalHeightByBody) * 100)
      totalHeight.current = total

      if (total > 0 && bodyElement.current) bodyElement.current.style.transform = `translateY(${total}%)`
    }
  }

  const onDragEnd = () => {
    if (totalHeight.current < 25) {
      toggleMode('full')
      totalHeight.current = 0
      bodyElement.current.style.transform = 'translateY(0%)'
    }
    if (totalHeight.current >= 25 && totalHeight.current < 75) {
      toggleMode('half')
      totalHeight.current = 50
      bodyElement.current.style.transform = 'translateY(50%)'
    }
    if (totalHeight.current >= 75) {
      toggleMode('close')
      totalHeight.current = 100
    }
    setInitalPositionY(null)
  }

  useEffect(() => {
    if (isPresent) {
      backdropElement.current.classList.add('opacity-70')
      bodyElement.current.style.transform = 'translateY(50%)'
    }
    if (!isPresent) {
      backdropElement.current.classList.remove('opacity-70')
      bodyElement.current.style.transform = 'translateY(100%)'
      setTimeout(safeToRemove, 300)
    }
  }, [isPresent, safeToRemove])

  return (<>
    <div
      ref={backdropElement}
      onClick={() => toggleMode('close')}
      className="fixed top-0 h-screen w-full max-w-[600px] bg-black opacity-0 transition-opacity duration-300 z-10"
    />
    <div
      ref={bodyElement}
      onMouseDown={e => setInitalPositionY(e.clientY)}
      onMouseUp={onDragEnd}
      onMouseMove={e => initialPositionY && handleDrag(e.clientY)}
      onDrag={console.log}
      onTouchStart={e => setInitalPositionY(getTouchY(e))}
      onTouchEnd={onDragEnd}
      onTouchMove={e => initialPositionY && handleDrag(getTouchY(e))}
      className={clsx([
        "flex flex-col items-center fixed bottom-0 w-full h-[90%] max-w-[600px] z-[15] bg-white rounded-t-3xl translate-y-full",
        initialPositionY === null && "touch-none will-change-transform transition-transform duration-300"
      ])}
    >
      <div className="flex justify-center py-4 w-full cursor-grab">
        <div className="h-[4px] w-16 bg-gray-400 rounded" />
      </div>
      <div className="pt-4 pb-8 px-8 select-none">
        {children}
      </div>
    </div>
  </>)
}

export default BottomSheetBody