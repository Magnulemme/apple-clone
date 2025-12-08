import { useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import gsap from 'gsap';

import MacbookModel16 from "./models/Macbook16.jsx";
import MacbookModel14 from "./models/Macbook14.jsx";
import {useGSAP} from "@gsap/react";
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group, x) => {
    if(!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    // 0.06 = 16", 0.05 = 14"
    const showLargeMacbook = scale === 0.06;

    useGSAP(() => {
        if(showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMacbookRef.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacbookRef.current, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        polar: isMobile ? [-Math.PI / 12, Math.PI / 12] : [-Math.PI / 36, Math.PI / 36],
        config: {mass:1, tension: 0, friction: 26}
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef} position={[0, -0.5, 0]} rotation={[0.3, 0, 0]}>
                    <MacbookModel16 scale={0.07} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef} position={[0, -0.5, 0]} rotation={[0.3, 0, 0]}>
                    <MacbookModel14 scale={0.06} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
