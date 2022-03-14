import { FC, useEffect, useRef, useState } from "react"
import { useCart } from "../../state"
import CartIcon from "../icon/Cart"
import { NavbarMode } from "."

const Cart: FC<{ mode: NavbarMode }> = ({ mode }) => {
  const isReadyRender = useRef<boolean>(false) // skip animating on first render
  const timeout = useRef<ReturnType<typeof setTimeout>>(null!)
  const counter = useRef<HTMLSpanElement>(null!)
  const count = useCart(state => state.count)
  const stopAnimating = useCart(state => state.stopAnimating)

  useEffect(() => {
    if (isReadyRender.current) {
      clearTimeout(timeout.current)
      counter.current.classList.add('increase')

      timeout.current = setTimeout(() => {
        counter.current.classList.remove('increase')
        stopAnimating()
      }, 500)
    }

    isReadyRender.current = true
    return () => clearTimeout(timeout.current)
  }, [count])

  return (
    <div className="relative">
      <CartIcon color={mode === 'transparent' ? "#FFF" : '#000'} />
      <span ref={counter} data-count={count > 99 ? '99+' : count} className="cart-count">
        {count > 99 ? '99+' : count}
      </span>
    </div>
  )
}

export default Cart