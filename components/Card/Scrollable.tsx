import { FC } from "react"
import clsx from "clsx"
import Card, { CardProps } from "."
import { useIsDragging } from "../Scrollable/context"

const ScrollableCard: FC<CardProps> = ({ className, ...props }) => {
  const isDragging = useIsDragging()

  return <Card className={clsx([className, isDragging && 'pointer-events-none'])} {...props} />
}

export default ScrollableCard