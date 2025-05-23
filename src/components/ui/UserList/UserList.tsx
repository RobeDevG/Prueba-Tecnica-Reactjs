import React from "react";
import { User } from "../../../types/User";
import UserListItem from "./UserListItem";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ol className="pl-6 space-y-2">
      {sortedUsers.map((user, index) => (
        <UserListItem key={index} user={user} />
      ))}
    </ol>
  );
};

export default UserList;
