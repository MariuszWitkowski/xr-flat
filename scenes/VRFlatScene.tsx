import { VRCanvas, DefaultXRControllers } from '@react-three/xr';
import { OrbitControls } from '@react-three/drei';
import { LivingRoom } from '../components/LivingRoom';
import { Suspense } from 'react';

const VRFlatScene = () => (
  <>
    <VRCanvas camera={{ position: [2, 2, 2] }}>
      <color attach="background" args={['#17171b']} />
      <ambientLight intensity={0.25} />
      <directionalLight
        castShadow
        intensity={2}
        position={[10, 6, 6]}
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera
          attach="shadow-camera"
          left={-20}
          right={20}
          top={20}
          bottom={-20}
        />
      </directionalLight>
      <DefaultXRControllers />
      <fog attach="fog" args={['#101010', 0, 10]} />
      <Suspense fallback={null}>
        <LivingRoom />
      </Suspense>
      <OrbitControls />
    </VRCanvas>
  </>
);

export default VRFlatScene;
