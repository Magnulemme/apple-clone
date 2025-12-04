import { create } from 'zustand';

interface ProductState {
  color: string;
  size: number;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  color: '#9ca3af',
  size: 14,
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
}));
