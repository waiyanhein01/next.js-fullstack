import Linker from "@/components/posts/Linker";
import PostComponentWithPrisma from "@/components/posts/PostComponentWithPrisma";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex items-center justify-between w-full max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Posts</h1>
        <Linker href="/posts/create">
          <Button className="my-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Create New Post
          </Button>
        </Linker>
      </div>
      <PostComponentWithPrisma />
      <Linker href="/">
        <Button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Home Page
        </Button>
      </Linker>
    </div>
  );
};

export default Page;
