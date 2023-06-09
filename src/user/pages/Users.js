import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
    id: 'u1',
    name: 'Ale',
    image: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1600',
    places: 3
  }
]
  
  return <UserList items={USERS} />;
};

export default Users;
