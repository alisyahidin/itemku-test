import { FC, HTMLAttributes, MouseEvent, useRef, useState } from "react"
import clsx from "clsx"

type HorizontalProps = {
  direction: 'x',
  height?: number
}

type VerticalProps = {
  direction: 'y',
  height: number
}

type Props = (VerticalProps | HorizontalProps) & HTMLAttributes<HTMLDivElement>

type InitPosition = { scroll: number, client: number }

const Scrollable: FC<Props> = ({ children, direction = 'x', height, className = '' }) => {
  const divElement = useRef<HTMLDivElement>(null!)
  const [initialPosition, setInitalPosition] = useState<InitPosition | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const clientPositon: 'clientX' | 'clientY' = direction === 'x' ? 'clientX' : 'clientY'
  const scrollPositon: 'scrollLeft' | 'scrollTop' = direction === 'x' ? 'scrollLeft' : 'scrollTop'

  const handleDragging = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) setIsDragging(true)

    if (direction === 'x' && initialPosition) {
      divElement.current.scrollLeft = initialPosition.scroll + (initialPosition.client - e[clientPositon])
    }
    if (direction === 'y' && initialPosition) {
      divElement.current.scrollTop = initialPosition.scroll + (initialPosition.client - e[clientPositon])
    }
  }

  const initPosition = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setInitalPosition({ client: e[clientPositon], scroll: divElement.current[scrollPositon] })
  }

  const setNotDragging = () => {
    setIsDragging(false)
    setInitalPosition(null)
  }

  return (
    <div
      ref={divElement}
      onMouseDown={initPosition}
      onMouseMove={e => initialPosition !== null && handleDragging(e)}
      onMouseUp={setNotDragging}
      onMouseLeave={setNotDragging}
      style={{ height }}
      className={clsx([
        "select-none",
        direction === 'x'
          ? 'overflow-x-auto overflow-y-hidden scrollbar-hide'
          : `overflow-y-auto overflow-x-hidden]`,
        initialPosition !== null ? 'cursor-grabbing' : 'cursor-grab'
      ])}
    >
      <div className={clsx([
        `flex ${className}`.trim(),
        direction === 'x' ? 'flex-row' : 'flex-col',
        isDragging && 'pointer-events-none'
      ])}>
        {children}
      </div>
    </div>
  )
}

export default Scrollable