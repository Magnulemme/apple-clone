import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useProductStore } from '../store/productStore';
import { Model as Macbook14 } from './models/Macbook14';
import { Model as Macbook16 } from './models/Macbook16';
import { StudioLights } from './StudioLights';

const colors = [
  { name: 'Space Gray', value: '#9ca3af' },
  { name: 'Silver', value: '#e5e7eb' },
  { name: 'Space Black', value: '#1f2937' },
];

const sizes = [14, 16];

const colorNames: Record<string, string> = {
  '#9ca3af': 'Space Gray',
  '#e5e7eb': 'Silver',
  '#1f2937': 'Space Black',
};

function Products() {
  const { color, size, setColor, setSize } = useProductStore();

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="h-[600px] mb-12">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <StudioLights />
            {size === 14 ? (
              <Macbook14 scale={0.05} />
            ) : (
              <Macbook16 scale={0.055} />
            )}
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold mb-8">Take a closer look</h2>

          <div className="mb-8">
            <p className="text-xl text-gray-400 mb-4">
              MacBook Pro {size}" in {colorNames[color]}
            </p>
          </div>

          <div className="mb-8">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Color
            </p>
            <div className="flex justify-center gap-4">
              {colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    color === c.value
                      ? 'border-white scale-110'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: c.value }}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Size
            </p>
            <div className="flex justify-center gap-4">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-8 py-3 rounded-full border-2 transition-all ${
                    size === s
                      ? 'border-white bg-white text-black'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  {s}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products
