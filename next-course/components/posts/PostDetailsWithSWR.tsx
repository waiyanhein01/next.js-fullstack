"use client";

import api from "@/lib/axios";
import useSWR from "swr";

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const PostDetailsWithSWR = ({ postId }: { postId: string }) => {
  const { data: post, error, isLoading } = useSWR(`/posts/${postId}`, fetcher);

  if (isLoading) return <div>Post Detail with SWR Loading...</div>;
  if (error)
    return <div>{(error as Error).message || "Failed to fetch post"}</div>;

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
    </div>
  );
};

export default PostDetailsWithSWR;
