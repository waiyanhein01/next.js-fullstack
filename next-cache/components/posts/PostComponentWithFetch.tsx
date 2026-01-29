import { cacheLife, cacheTag } from "next/cache";

interface Post {
  author: string;
  category: string;
  content: string;
  date: string;
  id: number;
  title: string;
}

const PostComponentWithFetch = async () => {
  "use cache";
  // cacheLife("hours");
  cacheTag("posts");

  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();
  return (
    <>
      <ul>
        {posts.slice(0, 5).map((post: Post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostComponentWithFetch;
