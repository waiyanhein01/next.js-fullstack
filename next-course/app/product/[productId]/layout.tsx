import React from "react";

const CartLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <>
      {/* you can call params in layout */}
      <header className="w-full bg-neutral-500 p-5 text-center text-2xl font-semibold text-neutral-50">
        Hi This is header - {productId}
      </header>
      <div>{children}</div>
    </>
  );
};

// other way use LayoutProps called Helper Props

// const CartLayout = async (props: LayoutProps<"/product/[productId]">) => {
//   const { productId } = await props.params;
//   return (
//     <>
//       {/* you can call params in layout */}
//       <header className="w-full bg-neutral-500 p-5 text-center text-2xl font-semibold text-neutral-50">
//         Hi This is header - {productId}
//       </header>
//       <div>{props.children}</div>
//     </>
//   );
// };

export default CartLayout;
