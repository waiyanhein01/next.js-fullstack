import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // this css class will be applied product and product detail that is call share ui
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-200 text-neutral-950">
      {children}
    </div>
  );
};

export default ProductLayout;
