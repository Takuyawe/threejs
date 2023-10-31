import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { Cube } from "./Cube";
import { Knot } from "./Knot";
import Rig from "./Rig";

const ThreeFiber = () => {
  return (
    <div className="App">
      <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        <ambientLight args={[0xffffff]} intensity={0.2} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <Rig />
        <OrbitControls />
        <fog attach="fog" color={"#fff"} near={1} far={20} />

        {/* <Cube position={[-1.2, 0, 0]} />
        <Cube position={[0, 1, -5]} />
        <Text
          position={[-3, 2, 0]}
          font="/Roboto-Medium.ttf"
          fontSize={0.5}
          color={"#222"}
        >
          Hello World
        </Text> */}
        {/* <Knot /> */}
      </Canvas>
    </div>
  );
};

export default ThreeFiber;
