import { create } from 'zustand';

interface ProductState {
  color: string;
  size: number;
  scale: number;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
  setScale: (scale: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  color: '#adb5bd',
  size: 14,
  scale: 0.06,
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
  setScale: (scale) => set({ scale }),
}));
