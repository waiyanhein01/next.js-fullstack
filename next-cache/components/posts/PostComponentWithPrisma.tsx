import prisma from "@/lib/prisma";
import { cacheLife } from "next/cache";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";

const PostComponentWithPrisma = async () => {
  "use cache";
  cacheLife({ stale: 120, revalidate: 60 });
  const posts = await prisma.post.findMany();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {posts.map((post) => (
        <Card className="mx-auto w-full max-w-sm" key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.content}</CardDescription>
            <Badge className="mt-2">{post.published}</Badge>
          </CardHeader>
          <CardContent>Card Content</CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostComponentWithPrisma;
