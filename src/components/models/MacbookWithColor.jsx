import MacbookModel14 from './Macbook14';
import { Model as Macbook16Base } from './Macbook16';
import { useRef, useEffect } from 'react';
import { PresentationControls } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const applyColorToMeshes = (group, color) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh && child.material) {
      // Skip the screen (Object_123) which has a texture map
      if (child.material.map) return;

      child.material.color = new THREE.Color(color);
    }
  });
};

export function MacbookWithColor({ color, size, ...props }) {
  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();

  const showLargeMacbook = size === 16;

  // Apply color whenever it changes (no animation)
  useEffect(() => {
    applyColorToMeshes(smallMacbookRef.current, color);
    applyColorToMeshes(largeMacbookRef.current, color);
  }, [color]);

  // Animate only when size changes
  useGSAP(() => {
    if (showLargeMacbook) {
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
  }, [size]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef} {...props}>
          <Macbook16Base />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef} {...props}>
          <MacbookModel14 />
        </group>
      </PresentationControls>
    </>
  );
}
