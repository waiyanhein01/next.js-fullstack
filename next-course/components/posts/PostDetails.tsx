"use client";

import api from "@/lib/axios";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
}
const PostDetails = ({ postId }: { postId: string }) => {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // using fetch API
    // const fetchPostDetails = async () => {
    //   try {
    //     setIsLoading(true);
    //     setError(null);

    //     const res = await fetch(
    //       `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${postId}`,
    //     );

    //     if (!res.ok) {
    //       throw new Error("Failed to fetch post details 😂");
    //     }

    //     const postDetail = await res.json();
    //     setPost(postDetail);
    //   } catch (error) {
    //     setError((error as Error).message);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // using axios
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await api.get(`/posts/${postId}`);
        const postDetail = res.data;

        if (res.status !== 200) {
          throw new Error("Failed to fetch post details 😂");
        }

        setPost(postDetail);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPostDetails();
  }, []);

  if (isLoading) return <div>Post Detail Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
    </div>
  );
};

export default PostDetails;
