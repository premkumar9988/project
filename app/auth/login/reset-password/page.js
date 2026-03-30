"use client";

import AuthCard from "@/app/components/AuthCard";

export default function Reset() {
  return (
    <AuthCard title="Reset Password">
      <input type="password" placeholder="New Password" className="input" />
      <input type="password" placeholder="Confirm Password" className="input mt-3" />

      <button className="btn-primary w-full mt-4">
        Update Password
      </button>
    </AuthCard>
  );
}