// import prisma from "@/lib/prisma";
// import { cacheLife, cacheTag } from "next/cache";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { getAllPosts } from "@/app/utils/getPosts";

const PostComponentWithPrisma = async () => {
  // "use cache";
  // cacheLife("hours");
  // cacheTag("posts");

  // const posts = await prisma.post.findMany();

  const posts = await getAllPosts();

  return (
    <div className="space-y-4 w-full max-w-xl">
      {posts.map((post) => (
        <Card className="mx-auto w-full" key={post.id}>
          <CardHeader>
            <Badge className="mb-2">
              {post.published ? "Published" : "Private"}
            </Badge>
            <Link href={`/posts/${post.id}`}>
              <CardTitle>{post.title}</CardTitle>
            </Link>
            <CardDescription>{post.content}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default PostComponentWithPrisma;
