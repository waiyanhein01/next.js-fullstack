// server component
// const ProductPage = async ({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }) => {
//   const { page = "1", category = "", query = "" } = await searchParams;
//   return (
//     <div className="">
//       <h1 className="">ProductPage</h1>
//       <p>page: {page}</p>
//       <p>category: {category}</p>
//       <p>query: {query}</p>
//     </div>
//   );
// };

// client component with use()

"use client";

import { use } from "react";

const ProductPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { page = "1", category = "", query = "" } = use(searchParams);
  return (
    <div className="">
      <h1 className="">ProductPage</h1>
      <p>page: {page}</p>
      <p>category: {category}</p>
      <p>query: {query}</p>
    </div>
  );
};

// client component with useSearchParams()

// "use client";

// import { useSearchParams } from "next/navigation";

// const ProductPage = () => {
//   const searchParams = useSearchParams();
//   const page = searchParams.get("page") || "1";
//   const category = searchParams.get("category") || "";
//   const query = searchParams.get("query") || "";
//   return (
//     <div className="">
//       <h1 className="">ProductPage</h1>
//       <p>page: {page}</p>
//       <p>category: {category}</p>
//       <p>query: {query}</p>
//     </div>
//   );
// };

export default ProductPage;
