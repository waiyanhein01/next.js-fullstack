import Link from "next/link";
import Carousel from "@/components/Carousel";
export default function Home() {
  const items = [
    {
      id: "1",
      src: "https://example.com/image1.jpg",
      alt: "Beautiful landscape",
      title: "Amazing View",
      description: "A stunning landscape photograph",
    },
    {
      id: "2",
      src: "https://example.com/image2.jpg",
      alt: "City skyline",
      title: "Urban Life",
      description: "The vibrant city at night",
    },
  ];
  return (
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Next.js Course!</h1>
      <div className="flex justify-center gap-4">
        <Link
          href="/login"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Login
        </Link>
        <Link
          href="/dashboard"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Dashboard
        </Link>
        <Link
          href="/posts"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Post
        </Link>
      </div>
      {/* 
      <Carousel
        items={items}
        autoplay={{ enabled: true, interval: 3000 }}
        infinite
        pauseOnHover
      /> */}
    </div>
  );
}
