import { VRCanvas, DefaultXRControllers } from '@react-three/xr';
import { OrbitControls } from '@react-three/drei';
import { LivingRoom } from '../components/LivingRoom';
import { Suspense } from 'react';

const VRFlatScene = () => (
  <>
    <VRCanvas camera={{ position: [2, 2, 2] }}>
      <DefaultXRControllers />
      <fog attach="fog" args={['#101010', 0, 10]} />
      <Suspense fallback={null}>
        <LivingRoom />
      </Suspense>
      <OrbitControls
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
      />
    </VRCanvas>
  </>
);

export default VRFlatScene;
