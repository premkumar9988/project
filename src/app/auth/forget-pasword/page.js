"use client";

import toast from "react-hot-toast";

export default function ForgotPassword() {
  const handle = (e) => {
    e.preventDefault();
    toast.success("OTP sent to email");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <form onSubmit={handle} className="glass p-6 rounded">
        <input placeholder="Email" className="block mb-4" />
        <button className="bg-purple-600 px-4 py-2">
          Send OTP
        </button>
      </form>
    </div>
  );
}