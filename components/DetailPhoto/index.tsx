import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { useRouter } from "next/router"
import Image from 'next/image'
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
  const [_, hash] = router.asPath.split('#')
  const [isOpen, setIsOpen] = useState(hash === id)

  const toggleOpen = (value: boolean) => {
    if (value) {
      router.push(`#${id}`)
    }
    if (!value) {
      router.back()
    }
  }

  useEffect(() => {
    if (hash === id) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
    setIsOpen(hash === id)
  }, [id, hash, setIsOpen])

  useImperativeHandle(ref, () => ({
    open: () => toggleOpen(true),
    close: () => toggleOpen(false),
  }))

  return !isOpen ? null : (
    <div className="fixed top-0 max-w-[600px] w-full h-screen bg-[#111111] z-20">
      <nav className="fixed top-0 px-6 py-3 z-[1]">
        <button onClick={() => toggleOpen(false)} className="p-[1px]">
          <BackIcon color="#FFF" />
        </button>
      </nav>
      <div className="flex items-center h-full">
        <Image
          alt="Detail Product"
          layout="fill"
          objectFit="contain"
          src="https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg"
        />
      </div>
    </div>
  )
})

DetailPhoto.displayName = 'DetailPhotoProduct'

export default DetailPhoto