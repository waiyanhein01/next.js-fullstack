"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-50 text-neutral-950">
      <h1 className="flex items-center justify-center">
        404 | {firstSegment} NotFound
      </h1>
    </div>
  );
};

export default NotFound;
