import { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLButtonElement>

const LoveButton: FC<Props> = () => {
  return (
    <button className="btn-love">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z" />
      </svg>
    </button>
  )
}

export default LoveButton