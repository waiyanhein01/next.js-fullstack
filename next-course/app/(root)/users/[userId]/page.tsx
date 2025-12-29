import PreLoadPost from "@/components/posts/PreLoadPost";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Post {
  id: string;
  title: string;
  authorId: string;
  content: string;
}

const getSpecificUser = async (userId: string): Promise<User> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/${userId}`,
  );
  return res.json();
};

export const getPosts = async (userId: string): Promise<Post[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?authorId=${userId}`,
  );
  return res.json();
};

const UserDetailPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;

  // Parallel Data Fetching
  //   const userData = getSpecificUser(userId);
  //   const postsData = getPosts(userId);

  // This approach is when one api was failed second one is auto fail
  //   const [user, posts] = await Promise.all([userData, postsData]);

  //   This approach will do when one api was failed second one is not auto fail
  //   const [userResponse, postsResponse] = await Promise.allSettled([
  //     userData,
  //     postsData,
  //   ]);
  //   const user = userResponse.status === "fulfilled" ? userResponse.value : null;
  //   const posts = postsResponse.status === "fulfilled" ? postsResponse.value : [];

  // PreLoad Data Fetching
  preLoad(userId);
  const user = await getSpecificUser(userId);

  return (
    <div>
      <h1 className="mb-4 text-2xl">UserDetailPage</h1>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>

      {/* Parallel Data Fetching */}
      {/* <UserRelatedPosts posts={posts} /> */}

      {/* PreLoad Data Fetching */}
      {user?.email === "admin@gmail.com" && <PreLoadPost userId={userId} />}
    </div>
  );
};

export default UserDetailPage;

const preLoad = (userId: string) => {
  void getPosts(userId);
};

const UserRelatedPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <h1 className="my-4 text-2xl">User Related Posts</h1>
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <h1 className="">{post.title}</h1>
              <p>{post.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
