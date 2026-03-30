"use client";

import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import AuthCard from "@/app/components/AuthCard";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <AuthCard title="Login">
      <div className="space-y-4">
        
        {/* EMAIL */}
        <div className="flex items-center border p-2 rounded">
          <Mail size={18} />
          <input
            type="email"
            placeholder="Email"
            className="ml-2 w-full outline-none"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex items-center border p-2 rounded">
          <Lock size={18} />
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="ml-2 w-full outline-none"
          />
          <button onClick={() => setShow(!show)}>👁</button>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </div>
    </AuthCard>
  );
}   