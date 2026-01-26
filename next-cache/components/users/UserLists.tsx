import prisma from "@/lib/prisma";
import { connection } from "next/server";

const UserLists = async () => {
  await connection();
  const users = await prisma.user.findMany();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserLists;
