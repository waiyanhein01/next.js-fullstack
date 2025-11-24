"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const refreshPostsCache = async () => {
  // tag-based approach
  // revalidateTag("posts", "max");

  // path-based approach
  revalidatePath("/blog"); // this is only for blog page
  revalidatePath("/blog/[blogId]", "page"); // this is for utils blog detail
  revalidatePath("/", "layout"); // this is for routes
};
