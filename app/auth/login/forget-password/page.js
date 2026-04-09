"use client";

import { useState } from "react";
import AuthCard from "@/app/components/AuthCard";

export default function Forgot() {
  const [email, setEmail] = useState("");

  return (
    <AuthCard title="Forgot Password">
      <input
        type="email"
        placeholder="Enter email"
        className="input"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="btn-primary w-full mt-4">
        Send OTP
      </button>
    </AuthCard>
  );
}

