import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="border-b-[1px] border-gray-200 px-3 py-3">
      <Image
        priority
        alt="Logo"
        src="/logo.svg"
        objectFit="cover"
        width={120}
        height={38}
      />
    </nav>
  )
}

export default Navbar