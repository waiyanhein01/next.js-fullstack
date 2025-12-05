import PostDetails from "@/components/posts/PostDetails";
import PostDetailsWithSWR from "@/components/posts/PostDetailsWithSWR";

const PostDetailPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  return (
    <>
      <h1>PostDetailPage</h1>
      <PostDetailsWithSWR postId={postId} />
    </>
  );
};

export default PostDetailPage;
