import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { animated, useSpring } from "@react-spring/three";
import type { Mesh } from "three";

type Props = {
  position: [x: number, y: number, z: number];
};

export const Cube = (props: Props) => {
  const cubeRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  //   // Spring animation
  //   const { scale } = useSpring({
  //     scale: active ? 1.5 : 1,
  //     config: {
  //       tension: 1000, // controls speed
  //       friction: 400, // controls bounce
  //     },
  //   });

  useFrame(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    cube.rotation.z += 0.01;
  });

  const handleClick = () => {
    console.log("Box clicked!"); // Add this line
    setActive(!active);
  };

  return (
    <mesh
      {...props}
      ref={cubeRef}
      scale={active ? [1.5, 1.5, 3.5] : [1, 1, 1]}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
