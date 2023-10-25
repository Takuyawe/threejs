import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Mesh } from "three";

export const Knot = () => {
  const knotRef = useRef<Mesh>(null);

  useFrame(() => {
    const knot = knotRef.current;
    if (!knot) return;
    knot.rotation.x += 0.01;
    knot.rotation.y += 0.01;
  });

  return (
    <mesh ref={knotRef}>
      <primitive object={new THREE.TorusKnotGeometry(1, 1, 10, 8)} />
      <meshPhongMaterial color="aqua" />
    </mesh>
  );
};
