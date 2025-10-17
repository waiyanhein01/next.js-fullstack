"use client";

import { useParams } from "next/navigation";
import { use } from "react";

// normal way
// const ProductDetailPage = async ({
//   params,
// }: {
//   params: Promise<{ productId: string }>;
// }) => {
//   const { productId } = await params;
//   return <div>ProductDetailPage - {productId}</div>;
// };

// use "use()"
// const ProductDetailPage = ({
//   params,
// }: {
//   params: Promise<{ productId: string }>;
// }) => {
//   const { productId } = use(params);
//   return <div>ProductDetailPage - {productId}</div>;
// };

// use "useParams()"
const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  return <div>ProductDetailPage - {productId}</div>;
};

export default ProductDetailPage;
