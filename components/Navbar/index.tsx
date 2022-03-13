import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="border-b-[1px] border-gray-200 px-3 py-3">
      <Image
        priority
        alt="Logo"
        src="/logo.svg"
        width={126}
        height={42}
      />
    </nav>
  )
}

export default Navbar