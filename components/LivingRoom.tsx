import { useMemo } from 'react';
import { useGLTF, useFBX, Merged } from '@react-three/drei';
import * as THREE from 'three';

export const LivingRoom = () => {
  const [seat] = useGLTF(['/glb/seat-transformed.glb']);
  const sofa = useFBX('/glb/sofa.fbx');
  console.log('LivingRoom', { seat, sofa });
  const meshes = useMemo(
    // @ts-expect-error
    () => ({ Seat: seat.nodes.seat, Sofa: sofa.children[0] }),
    [seat, sofa]
  );

  return (
    <Merged castShadow receiveShadow meshes={meshes}>
      {(models) => (
        <group>
          <models.Seat color={'sandybrown'} position={[-0.35, 0, 0.7]} />
          {/* {console.log({ models })} */}
          <models.Sofa position={[-0.35, 1, 0.7]} />
        </group>
      )}
    </Merged>
  );
};
