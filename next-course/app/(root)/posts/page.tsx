import Link from "next/link";

const PostsPage = async () => {
  const res = await fetch(`${process.env.BASE_API_URL}/posts`);
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts: any[] = await res.json();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
