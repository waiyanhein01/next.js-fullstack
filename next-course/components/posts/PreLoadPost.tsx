import { getPosts } from "@/app/(root)/users/[userId]/page";

const PreLoadPost = async ({ userId }: { userId: string }) => {
  const posts = await getPosts(userId);
  return (
    <div>
      <h1 className="my-4 text-2xl">Pre Load User Related Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h1 className="">{post.title}</h1>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreLoadPost;
