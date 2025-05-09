'use client';

import { useEffect, useState } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '@/lib/fetch';

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
            <button onClick={() => deleteUser(u.id).then(() => fetchUsers().then(setUsers))}>
              삭제
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          createUser({ name: 'new user', email: 'new@email.com' }).then(() =>
            fetchUsers().then(setUsers),
          )
        }
      >
        유저 추가
      </button>
    </div>
  );
}
