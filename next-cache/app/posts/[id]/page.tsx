import { getAllPosts, getPost } from "@/app/utils/getPosts";
import { Metadata } from "next";

interface PostProps {
  content: string | null;
  id: number;
  published: boolean;
  title: string;
  authorId: number;
  message?: string;
  status?: number;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const post = (await getPost(Number(id))) as PostProps;

  if (post.status === 404) {
    return {
      title: { absolute: "Post not found" },
      description: "Post not found",
    };
  }

  return {
    title: { absolute: post.title },
    description: post.content?.slice(0, 100) || "Post details",
  };
};

export const generateStaticParams = async () => {
  const posts = (await getAllPosts()) as PostProps[];
  return posts.map((post: PostProps) => ({ id: post.id.toString() }));
};

const PostDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = (await getPost(Number(id))) as PostProps;

  if (post.status === 404) return <div>Post not found</div>;

  return (
    <div>
      <h1 className="">PostDetail</h1>
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.published ? "Published" : "Private"}</p>
      </div>
    </div>
  );
};

export default PostDetail;
