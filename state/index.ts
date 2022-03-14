import create, { SetState } from 'zustand'

type CartState = {
  count: number,
  isAnimating: boolean,
  stopAnimating: () => void,
  increase: () => void,
  decrease: () => void,
  reset: () => void,
}

export const useCart = create<CartState>(set => ({
  count: 0,
  isAnimating: false,
  stopAnimating: () => set({ isAnimating: false }),
  increase: () => set(state => ({ count: state.count + 1, isAnimating: true })),
  decrease: () => set(state => ({ count: state.count > 0 ? state.count - 1 : 1 })),
  reset: () => set({ count: 0 }),
}))