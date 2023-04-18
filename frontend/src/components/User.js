import React from "react";
import { useStore } from "../store/userStore";

function User() {
  const { user } = useStore();

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default User;
