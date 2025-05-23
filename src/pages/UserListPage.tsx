import React from 'react';
import { Users } from 'lucide-react';
import UserList from '../components/ui/UserList/UserList';

const UserListPage: React.FC = () => {
  const users = [
    { name: "María García", age: 29 },
    { name: "Juan Pérez", age: 34 },
    { name: "Ana Rodríguez", age: 25 },
    { name: "Carlos López", age: 41 },
    { name: "Elena Martínez", age: 27 }
  ];

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
          <Users className="text-[var(--color-primary)] h-6 w-6" />
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Lista de Usuarios</h1>
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
};

export default UserListPage;