"use cache";
import prisma from "@/lib/prisma";
import { cacheTag } from "next/cache";

export const getAllPosts = async () => {
  cacheTag("posts");
  console.log("Cache data fetched---");

  return await prisma.post.findMany();
};

export const getPost = async (id: number) => {
  cacheTag("posts", `post-${id}`);
  try {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      return { message: "Post not found", status: 404 };
    }
    return post;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected Error";
    return { message, status: 500 };
  }
};
