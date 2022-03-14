import { FC, useEffect, useState } from "react"
import clsx from "clsx"
import BackIcon from "../icon/Back"
import CartIcon from "../icon/Cart"
import ShareIcon from "../icon/Share"
import Link from "next/link"

type NavbarMode = 'transparent' | 'white'

const Button: FC<{ mode: NavbarMode }> = ({ mode, children }) => (
  <button className={clsx([
    "bg-opacity-75 rounded-md p-[1px]",
    mode === 'transparent' ? 'bg-slate-600' : 'bg-white'
  ])}>
    {children}
  </button>
)

const NavbarProduct = () => {
  const [mode, setMode] = useState<NavbarMode>('transparent')

  useEffect(() => {
    const updateMode = () => setMode(window.scrollY > 50 ? 'white' : 'transparent')
    window.addEventListener('scroll', updateMode)
    updateMode()

    return () => window.removeEventListener('scroll', updateMode)
  }, [setMode])

  return (
    <nav className={clsx([
      "fixed top-0 flex items-center justify-between border-b-[1px] z-10 w-full max-w-[600px] py-3 px-6",
      mode === 'transparent' ? 'bg-transparent border-transparent' : 'bg-white border-gray-200'
    ])}>
      <Link href="/">
        <a>
          <Button mode={mode}>
            <BackIcon color={mode === 'transparent' ? "#FFF" : '#000'} />
          </Button>
        </a>
      </Link>
      <div className="flex items-center gap-4">
        <Button mode={mode}>
          <ShareIcon color={mode === 'transparent' ? "#FFF" : '#000'} />
        </Button>
        <Button mode={mode}>
          <CartIcon color={mode === 'transparent' ? "#FFF" : '#000'} />
        </Button>
      </div>
    </nav>
  )
}

export default NavbarProduct