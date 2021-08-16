import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

type TorusProps = {
  animate?: boolean;
  position?: THREE.Vector3;
  color?: THREE.Color;
};

export const Torus: React.FC<TorusProps> = (props: TorusProps) => {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (props.animate) {
      (torusRef.current as THREE.Mesh).rotation.x += 0.02;
      (torusRef.current as THREE.Mesh).rotation.y += 0.03;
    }
  });

  return (
    <mesh ref={torusRef} position={props.position}>
      <torusGeometry args={[1, 0.2, 12, 36]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};
