import React, { useRef } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useEffect } from "react";
import * as THREE from "three";
const Earth = () => {
  const earth = useGLTF("./need_some_space/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={3.5}
      position-y={-2}
      position-x={0}
    />
  );
};
const EarthCanvas = () => {
  const group = useRef();
  const earth = useGLTF("./need_some_space/scene.gltf");
  useEffect(() => {
    if (group.current && earth.scene) {
      const bbox = new THREE.Box3().setFromObject(earth.scene);
      const center = bbox.getCenter(new THREE.Vector3());
      group.current.position.x = -center.x;
      group.current.position.y = -center.y;
      group.current.position.z = -center.z;
    }
  }, [earth.scene]);
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [0, 13, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 6}
          minPolarAngle={Math.PI / 6}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
