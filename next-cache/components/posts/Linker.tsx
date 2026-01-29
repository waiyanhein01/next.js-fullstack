"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Linker = ({
  href,
  className,
  children,
}: Readonly<{
  href: string;
  className?: string;
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  return (
    <Link href={href} className={className} onNavigate={router.refresh}>
      {children}
    </Link>
  );
};

export default Linker;
