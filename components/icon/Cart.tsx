type Props = { size?: number, color?: string }

const Cart = ({ size = 24, color = 'currentColor' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
    <path fill={color} d="M100 216a20 20 0 1 1-20-20a20.1 20.1 0 0 1 20 20Zm84-20a20 20 0 1 0 20 20a20.1 20.1 0 0 0-20-20Zm49.3-120.7l-24.2 84.4a28.1 28.1 0 0 1-26.9 20.3H81.8a28.1 28.1 0 0 1-26.9-20.3L30.8 75.5c0-.1-.1-.3-.1-.4L21.8 44H12a12 12 0 0 1 0-24h12.8a20.3 20.3 0 0 1 19.3 14.5L51.3 60h170.4a12.1 12.1 0 0 1 11.6 15.3ZM205.8 84H58.2l19.7 69.1a4.1 4.1 0 0 0 3.9 2.9h100.4a4.1 4.1 0 0 0 3.9-2.9Z" />
  </svg>
)

export default Cart