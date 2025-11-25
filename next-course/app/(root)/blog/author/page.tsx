// Nested Route

import prisma from "@/lib/prisma";

const AuthorPage = async () => {
  const users = await prisma.user.findMany();
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
};

export default AuthorPage;
