"use server";

import { revalidateTag } from "next/cache";

export const refreshPostsCache = async () => {
  revalidateTag("posts", "max");
};
