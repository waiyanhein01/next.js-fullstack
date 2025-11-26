// Nested Route

import prisma from "@/lib/prisma";
import AuthorCount from "../../_lib/AuthorCount";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const fetchUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const AuthorPage = () => {
  const users = fetchUsers();
  return (
    <div>
      <h1>AuthorPage</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthorCount users={users} />
      </Suspense>
    </div>
  );
};

export default AuthorPage;
