import { DoubleSide } from 'three';

export const GreenSquare = () => (
  <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
    {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
    <planeBufferGeometry args={[0.2, 32, 32]} />
    {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
    <meshBasicMaterial color="green" side={DoubleSide} />
  </mesh>
);
