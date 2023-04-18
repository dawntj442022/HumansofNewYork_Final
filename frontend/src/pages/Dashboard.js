import React from "react";
import { useStore } from "../store";

function Dashboard() {
  const { user } = useStore();

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome, {user.name}!</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Dashboard;
