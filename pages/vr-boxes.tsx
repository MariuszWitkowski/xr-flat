import dynamic from 'next/dynamic';

import { LoadingScene } from '../components/LoadingScene';

const DynamicVRBoxesScene = dynamic(() => import('../scenes/VRBoxesScene'), {
  ssr: false,
  loading: () => <LoadingScene />,
});

export default function BoxesPage() {
  return <DynamicVRBoxesScene />;
}
