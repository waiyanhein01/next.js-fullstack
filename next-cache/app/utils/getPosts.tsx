"use cache";
import prisma from "@/lib/prisma";
import { cacheTag } from "next/cache";

export const getPosts = async () => {
  cacheTag("posts");
  console.log("Cache data fetched---");

  return await prisma.post.findMany();
};
