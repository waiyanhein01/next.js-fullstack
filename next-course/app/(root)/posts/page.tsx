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
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default PostsPage;
