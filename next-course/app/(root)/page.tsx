import Link from "next/link";
import Carousel from "@/components/Carousel";
export default function Home() {
  // const items = [
  //   {
  //     id: "1",
  //     src: "https://example.com/image1.jpg",
  //     alt: "Beautiful landscape",
  //     title: "Amazing View",
  //     description: "A stunning landscape photograph",
  //   },
  //   {
  //     id: "2",
  //     src: "https://example.com/image2.jpg",
  //     alt: "City skyline",
  //     title: "Urban Life",
  //     description: "The vibrant city at night",
  //   },
  // ];
  const navItems = [
    { id: 1, name: "Login", href: "/login" },
    { id: 2, name: "Dashboard", href: "/dashboard" },
    { id: 3, name: "Post", href: "/posts" },
    { id: 4, name: "User", href: "/users" },
  ];
  return (
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Next.js Course!</h1>
      <div className="flex justify-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="rounded-full bg-sky-400 px-6 py-2 text-white"
          >
            {item.name}
          </Link>
        ))}
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
