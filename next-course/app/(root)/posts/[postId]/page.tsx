// import PostDetailsWithSWR from "@/components/posts/PostDetailsWithSWR";

import { Suspense } from "react";

// Sequential fetching

interface Post {
  id: string;
  title: string;
  authorId: string;
  content: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const getPostDetails = async (postId: string): Promise<Post> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${postId}`,
  );
  return res.json();
};

const getUser = async (userId: string): Promise<User> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/${userId}`,
  );
  return res.json();
};

const PostDetailPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const specificPost = await getPostDetails(postId);

  return (
    <>
      <h1>PostDetailPage</h1>
      <h2>{specificPost.title}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Author userId={specificPost.authorId} />
      </Suspense>
      {/* this is learning SWR */}
      {/* <PostDetailsWithSWR postId={postId} /> */}
    </>
  );
};

export default PostDetailPage;

// Sequential fetching
export async function Author({ userId }: { userId: string }) {
  const user = await getUser(userId);
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </>
  );
}
