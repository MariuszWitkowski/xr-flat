import { VRCanvas, DefaultXRControllers } from '@react-three/xr';
import { OrbitControls } from '@react-three/drei';
import Box from '../components/Box';

const VRBoxesScene = () => (
  <>
    <h1>Click on me - Hover me :)</h1>
    <VRCanvas camera={{ position: [0, 0, 35] }}>
      <DefaultXRControllers />
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Box position={[10, 0, 0]} />
      <Box position={[-10, 0, 0]} />
      <Box position={[0, 10, 0]} />
      <Box position={[0, -10, 0]} />
      <OrbitControls
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
      />
    </VRCanvas>
  </>
);

export default VRBoxesScene;
