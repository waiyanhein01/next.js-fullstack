const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { page = "1", category = "", query = "" } = await searchParams;
  return (
    <div className="">
      <h1 className="">ProductPage</h1>
      <p>page: {page}</p>
      <p>category: {category}</p>
      <p>query: {query}</p>
    </div>
  );
};

export default ProductPage;
