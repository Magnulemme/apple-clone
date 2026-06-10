import { useProductStore } from "../store/productStore";
import clsx from "clsx";
import {Canvas} from "@react-three/fiber";
import StudioLights from "./StudioLights.jsx";
import ModelSwitcher from './ModelSwitcher.jsx'
import {useMediaQuery} from "react-responsive";

const colors = [
  { name: 'Space Gray', value: '#9ca3af' },
  { name: 'Silver', value: '#e5e7eb' },
  { name: 'Midnight', value: '#1f2937' },
];

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useProductStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});

    const selectedColor = colors.find(c => c.value === color) || colors[0];
    const selectedSize = scale === 0.06 ? 16 : 14;

    return (
        <section id="product-viewer" className="bg-black text-white pt-20 pb-0 lg:pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl lg:text-7xl font-semibold text-center mb-6 lg:mb-4 text-white">Take a closer look.</h2>

                <div className="h-[400px] lg:h-[600px]">
                    <Canvas id="canvas" camera={{ position: [0, 0.5, 5], fov: 50, near: 0.1, far: 100}}>
                        <StudioLights />
                        <ModelSwitcher scale={scale} isMobile={isMobile} />
                    </Canvas>
                </div>

                <p className="text-2xl text-gray-300 font-regular text-center mb-6 mt-2 lg:mt-0">
                    MacBook Pro {selectedSize}" in {selectedColor.name}
                </p>

                <div className="controls">
                    <div className="flex justify-center items-center gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex gap-2 bg-gray-800 rounded-full p-2 border border-gray-700">
                                {colors.map((c) => (
                                    <div
                                        key={c.value}
                                        onClick={() => setColor(c.value)}
                                        className={clsx('w-10 h-10 rounded-full cursor-pointer border-2 transition-all', color === c.value ? 'border-white scale-110' : 'border-gray-600')}
                                        style={{ backgroundColor: c.value }}
                                        aria-label={c.name}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex gap-1 bg-gray-800 rounded-full p-1 border border-gray-700">
                                <button
                                    onClick={() => setScale(0.05)}
                                    className={clsx('px-6 py-2 rounded-full transition-all', scale === 0.05 ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-gray-700')}
                                >
                                    14"
                                </button>
                                <button
                                    onClick={() => setScale(0.06)}
                                    className={clsx('px-6 py-2 rounded-full transition-all', scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-gray-700')}
                                >
                                    16"
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductViewer
