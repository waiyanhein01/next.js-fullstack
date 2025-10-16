// Dynamic Route

const AuthorDetailPage = async ({
  params,
}: {
  params: Promise<{ authorId: string }>;
}) => {
  const { authorId } = await params;
  return <div>AuthorId - {authorId}</div>;
};

export default AuthorDetailPage;
