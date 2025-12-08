import { create } from 'zustand';
import { VideoTexture } from 'three';

interface ProductState {
  color: string;
  size: number;
  scale: number;
  texture: VideoTexture | null;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: VideoTexture | null) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  color: '#9ca3af', // Space Gray
  size: 14,
  scale: 0.05,
  texture: null,
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
  setScale: (scale) => set({ scale }),
  setTexture: (texture) => set({ texture }),
}));
