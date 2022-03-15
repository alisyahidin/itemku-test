import { FC, useState } from 'react'
import clsx from 'clsx'

type Props = { active?: boolean }

const LoveButton: FC<Props> = ({ active = false }) => {
  const [isActive, setIsActive] = useState(active)
  return (
    <button onClick={() => setIsActive(v => !v)} className={clsx(["relative btn-love", isActive && 'active'])}>
      <svg className="absolute top-0 z-[1]" xmlns="http://www.w3.org/2000/svg" width={24} height={24} aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path className="fill-rose-500 stroke-rose-500" strokeWidth="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z" />
      </svg>
    </button>
  )
}

export default LoveButton