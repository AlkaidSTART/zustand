import { create } from 'zustand'
// 定义颜色枚举类型 Color，
export const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
} as const;
// 定义颜色类型为 Color 中的键值类型
export type ColorType = typeof Color[keyof typeof Color];
export interface BearState {
  bears: number
  color: ColorType
  changeColor: (color: ColorType) => void
  increase: () => void
  decrease: () => void
  reset: () => void
}

export const useBear = create<BearState>((set) => ({
    bears: 0,
    color: Color.Red,
    changeColor: (color: ColorType) => set({ color }),
    increase: () => set((state) => ({ bears: state.bears + 1 })),
    decrease: () => set((state) => ({ bears: state.bears - 1 })),
    reset: () => set({ bears: 0, color: Color.Red }),
}))
export default useBear
