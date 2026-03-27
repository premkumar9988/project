"use client";

import { useState } from "react";
import { loginUser } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) return alert("Fill all fields");

    loginUser({
      name: email.split("@")[0],
      email,
    });

    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80">
        
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          Login
        </button>

        <p className="text-sm mt-3">
          Don't have account?{" "}
          <a href="/auth/register" className="text-orange-500">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}