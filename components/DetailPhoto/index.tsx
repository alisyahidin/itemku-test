import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { useRouter } from "next/router"
import BackIcon from "../icon/Back"

type Props = {
  id: string
}

export type DetailPhotoAction = {
  open: () => void,
  close: () => void,
}

const DetailPhoto = forwardRef<DetailPhotoAction, Props>(({ id }, ref) => {
  const router = useRouter()
  const [currentPath, hash] = router.asPath.split('#')
  const [isOpen, setIsOpen] = useState(hash === id)

  const toggleOpen = (value: boolean) => {
    if (value) {
      router.push(`#${id}`)
      document.body.classList.add('overflow-y-hidden')
    }
    if (!value) {
      router.replace(currentPath)
      document.body.classList.remove('overflow-y-hidden')
    }
  }

  useEffect(() => {
    setIsOpen(hash === id)
  }, [hash, setIsOpen])

  useImperativeHandle(ref, () => ({
    open: () => toggleOpen(true),
    close: () => toggleOpen(false),
  }))

  return !isOpen ? null : (
    <div className="fixed top-0 max-w-[600px] w-full h-screen bg-[#111111] z-20">
      <nav className="fixed top-0 px-6 py-3">
        <button onClick={() => toggleOpen(false)} className="p-[1px]">
          <BackIcon color="#FFF" />
        </button>
      </nav>
      <div className="flex items-center h-full">
        <img
          alt="Detail Product"
          width="100%"
          src="https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg"
        />
      </div>
    </div>
  )
})

DetailPhoto.displayName = 'DetailPhotoProduct'

export default DetailPhoto