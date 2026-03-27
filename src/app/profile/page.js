"use client";

import { getUser } from "@/utils/auth";

export default function Profile() {
  const user = getUser();

  if (!user) {
    return <div className="p-10">Please login first</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}