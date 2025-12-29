import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
}

const getALlUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/users`);
  return res.json();
};

const UsersPage = async () => {
  const users = await getALlUsers();
  return (
    <div>
      <h1 className="mb-4 text-2xl">UsersPage</h1>
      {users.map((user: User) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
