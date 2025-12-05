import PostDetails from "@/components/posts/PostDetails";

const PostDetailPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  return (
    <>
      <h1>PostDetailPage</h1>
      <PostDetails postId={postId} />
    </>
  );
};

export default PostDetailPage;
