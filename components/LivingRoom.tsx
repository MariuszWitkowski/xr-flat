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
    <Merged meshes={meshes}>
      {(models) => (
        <group>
          <models.Seat color={'sandybrown'} position={[3, 0.5, 0.7]} />
          {/* {console.log({ models })} */}
          <models.Sofa
            position={[1, 0, 3]}
            rotation={[THREE.Math.degToRad(-90), 0, 0]}
          />
        </group>
      )}
    </Merged>
  );
};
