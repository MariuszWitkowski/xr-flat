import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="main">
      <Link href="/birds">
        <a>Birds Example</a>
      </Link>
      <Link href="/boxes">
        <a>Boxes Example</a>
      </Link>
      <Link href="/vr-boxes">
        <a>VR Boxes Example</a>
      </Link>
    </div>
  );
}
