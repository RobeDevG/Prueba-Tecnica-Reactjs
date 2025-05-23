import React from 'react';
import { User } from '../../../types/User';

interface UserListItemProps {
  user: User;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <li className="text-lg py-1 hover:bg-gray-50 transition-colors rounded px-2">
      {user.name} <span className="text-sm text-[var(--color-text-secondary)]">({user.age} años)</span>
    </li>
  );
};

export default UserListItem;