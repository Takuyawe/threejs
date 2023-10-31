import * as React from "react";
import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";

const Field = () => {
  const { scene } = Drei.useGLTF("/soccer/field.glb");

  return (
    <mesh position={[0, 1, 2]}>
      <primitive scale={[10, 10, 10]} object={scene} />
    </mesh>
  );
};

const Football = () => {
  const { scene } = Drei.useGLTF("/soccer/football.glb");

  return (
    <mesh position={[10, 25, 2]}>
      <primitive scale={[10, 10, 10]} object={scene} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <React.Suspense fallback={<span>loading...</span>}>
      <Fiber.Canvas
        camera={{ fov: 45, near: 0.1, far: 1000, position: [10, 0, 2] }}
      >
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <Drei.PerspectiveCamera makeDefault />
        <Drei.OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
        <Drei.Stage>
          <Field />
          <Football />
        </Drei.Stage>
      </Fiber.Canvas>
    </React.Suspense>
  );
};

export default Scene;
