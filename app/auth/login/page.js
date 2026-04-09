"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import AuthCard from "@/components/AuthCard";

export default function Login() {
  const router = useRouter();

  // ✅ State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Login Function
  const handleLogin = async () => {
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token
        localStorage.setItem("token", data.token);

        alert("Login Successful ✅");

        // ✅ Redirect to home page
        router.push("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <AuthCard title="Login">
      <div className="space-y-4">

        {/* 📧 Email */}
        <div className="flex items-center border p-2 rounded">
          <Mail size={18} />
          <input
            type="email"
            placeholder="Enter email"
            className="ml-2 w-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* 🔒 Password */}
        <div className="flex items-center border p-2 rounded">
          <Lock size={18} />
          <input
            type="password"
            placeholder="Enter password"
            className="ml-2 w-full outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 🔘 Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:opacity-90"
        >
          Login
        </button>

      </div>
    </AuthCard>
  );
}