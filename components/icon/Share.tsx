type Props = { size?: number, color?: string }

const Share = ({ size = 24, color = 'currentColor' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
    <path fill={color} d="M17.5 22a3.46 3.46 0 0 1-3.383-4.352l-6.26-3.578a3.494 3.494 0 1 1 .576-4.47l5.683-3.249A3.494 3.494 0 0 1 14 5.5a3.531 3.531 0 1 1 1.142 2.57l-6.15 3.515c-.007.26-.043.517-.109.768l6.26 3.577A3.495 3.495 0 1 1 17.5 22Zm0-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm-12-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm12-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z" />
  </svg>
)

export default Share