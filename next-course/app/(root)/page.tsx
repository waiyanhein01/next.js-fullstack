import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Next.js Course!</h1>
      <Link href="/login" className="rounded bg-blue-500 px-4 py-2 text-white">
        Login
      </Link>
    </div>
  );
}
