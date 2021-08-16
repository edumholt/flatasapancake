import React, { useRef } from 'react';
import { extend, ReactThreeFiber, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

extend({ OrbitControls });
export const CameraControls: React.FC = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree();

  const controls = useRef<OrbitControls>();
  useFrame(() => (controls.current as OrbitControls).update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};
