import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: 10, background: '#ddd' }}>
      <Link href="/" style={{ marginRight: 10 }}>Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
