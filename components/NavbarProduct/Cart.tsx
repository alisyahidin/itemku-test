import { FC, useEffect, useRef } from "react"
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
      }, 350)
    }

    isReadyRender.current = true
    return () => clearTimeout(timeout.current)
  }, [count, stopAnimating])

  return (
    <div className="relative">
      <CartIcon color={mode === 'transparent' ? "#FFF" : '#000'} />
      <span ref={counter} data-count={count > 99 ? '99+' : count} className="cart-count">
        {count > 99 ? '99+' : count}
      </span>
    </div>
  )
}

Cart.displayName = 'NavbarCart'

export default Cart