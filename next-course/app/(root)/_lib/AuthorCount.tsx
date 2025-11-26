"use client";

import { use, useState } from "react";

const AuthorCount = ({
  users,
}: {
  users: Promise<{ id: string; name?: string | null; email: string }[]>;
}) => {
  const allUsers = use(users);

  const [count, setCount] = useState(0);
  const increaseBtn = () => {
    return setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className="text-3xl">AuthorCount</h1>
      <h2 className="">{count}</h2>
      <button onClick={increaseBtn} className="cursor-pointer border px-4 py-2">
        Increase
      </button>

      <div className="">
        {allUsers.map((user) => (
          <p key={user.id}>
            {user?.name} - {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AuthorCount;
