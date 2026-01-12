import PostComponent from "@/components/posts/PostComponent";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className=" text-2xl mb-4">All Posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostComponent />
      </Suspense>
    </div>
  );
}
