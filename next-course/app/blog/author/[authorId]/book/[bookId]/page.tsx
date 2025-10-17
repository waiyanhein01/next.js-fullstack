// Nested Dynamic Route

const BookDetailPage = async ({
  params,
}: {
  params: Promise<{ authorId: string; bookId: string }>;
}) => {
  const { authorId, bookId } = await params;
  return (
    <div>
      BookDetail - {bookId} by Author - {authorId}
    </div>
  );
};

export default BookDetailPage;
