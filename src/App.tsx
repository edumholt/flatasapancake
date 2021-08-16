import React from 'react';
import * as THREE from 'three';
import { Canvas, MeshProps } from '@react-three/fiber';

import { CameraControls, Torus } from './components';

export const App: React.FC<MeshProps> = () => {
  return (
    <Canvas camera={{ zoom: 20, position: new THREE.Vector3(0, 120, 0) }}>
      <ambientLight color={new THREE.Color(0x777777)} />
      <axesHelper />
      <Torus animate color={new THREE.Color(0xff0000)} position={new THREE.Vector3(0, 2, 2)} />
      <Torus color={new THREE.Color(0x00ff00)} position={new THREE.Vector3(0, 0, 0)} />
      <CameraControls />
    </Canvas>
  );
};
