interface Post {
  id: string;
  title: string;
  content: string;
}

const BlogPage = async () => {
  const response = await fetch("http://localhost:4000/posts", {
    // next: {
    //   revalidate: 60,
    // }, // this parameter for SSR with ISR (Incremental Static Regeneration) Or Static Rendering
    cache: "no-cache", // this parameter for SSR (Server Side Rendering) with dynamic Rendering
  });
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts: Post[] = await response.json();

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
