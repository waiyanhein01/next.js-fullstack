import PostComponentWithPrisma from "@/components/posts/PostComponentWithPrisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex items-center justify-between w-full max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Posts</h1>
        <Link href="/posts/create">
          <Button className="my-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Create New Post
          </Button>
        </Link>
      </div>
      <PostComponentWithPrisma />
      <Link href="/">
        <Button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Home Page
        </Button>
      </Link>
    </div>
  );
};

export default Page;
