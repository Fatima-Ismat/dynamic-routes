// /app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <h1>Country List:</h1>
        <ul>
          <li><Link href="/country/ottawa">Canada</Link></li>
          <li><Link href="/country/islamabad">Pakistan </Link></li>
          <li><Link href="/country/tokyo">Japan </Link></li>
          <li><Link href="/country/canberra">Australia </Link></li>
          <li><Link href="/country/berlin">Germany </Link></li>
        </ul>
      </main>
    </>
  );
}
