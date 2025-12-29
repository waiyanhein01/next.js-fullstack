import Link from "next/link";

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-200 text-neutral-950">
      <Link href="/" className="w-full bg-neutral-950 p-3 text-neutral-50">
        Header
      </Link>
      {children}
      <h1 className="mt-auto w-full bg-neutral-950 p-3 text-neutral-50">
        Footer
      </h1>
    </div>
  );
}
