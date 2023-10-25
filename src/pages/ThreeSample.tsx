import { useEffect } from "react";
import * as THREE from "three";

const ThreeSample = () => {
  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 1;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(5); // <= 追記
    scene.add(axesHelper); // <= 追記

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    document.body.appendChild(renderer.domElement);

    function animation(time: number) {
      mesh.rotation.x = time / 500;
      mesh.rotation.y = time / 500;
      renderer.render(scene, camera);
    }
  }, []);

  return <></>;
};

export default ThreeSample;
