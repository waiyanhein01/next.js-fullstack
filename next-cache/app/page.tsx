import DateShow from "@/components/posts/DateShow";
import PostComponent from "@/components/posts/PostComponentWithFetch";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import UserLists from "@/components/users/UserLists";
import Link from "next/link";
import { getPosts } from "./utils/getPosts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <h1 className=" text-2xl mb-4">All Posts</h1>
      <PostComponent />

      <Suspense fallback={<div>Loading...</div>}>
        <DateShow />
      </Suspense> */}
      {/* <h1 className="text-2xl mb-4">All Users</h1>
      <Suspense fallback={<div>Loading Users...</div>}>
        <UserLists />
      </Suspense> */}
      {posts.map((post) => (
        <div key={post.id}>
          <h1 className="text-2xl mb-4">{post.title}</h1>
        </div>
      ))}
      <Link href="/posts">
        <Button className="mt-8">Go to Posts Page</Button>
      </Link>
    </div>
  );
}
