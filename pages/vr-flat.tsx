import dynamic from 'next/dynamic';

import { LoadingScene } from '../components/LoadingScene';

const DynamicVRFlatScene = dynamic(() => import('../scenes/VRFlatScene'), {
  ssr: false,
  loading: () => <LoadingScene />,
});

export default function FlatPage() {
  return <DynamicVRFlatScene />;
}
