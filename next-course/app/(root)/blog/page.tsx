interface Post {
  id: string;
  title: string;
  content: string;
}

const BlogPage = async () => {
  const response = await fetch("http://localhost:4000/posts", {
    // this parameter for SSR with ISR (Incremental Static Regeneration) Or Static Rendering
    // next: {
    //   // Time-based Revalidation
    //   // revalidate: 60,
    //   // On-demand Revalidation
    //   // tags: ["posts"],
    // },

    // this parameter for SSR (Server Side Rendering) with dynamic Rendering
    // cache: "no-cache",

    cache: "force-cache",
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
