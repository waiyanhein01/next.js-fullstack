"use client";

import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2 className="">{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </>
  );
};

export default Count;
