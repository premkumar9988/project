"use client";

import toast from "react-hot-toast";

export default function ResetPassword() {
  const handle = (e) => {
    e.preventDefault();
    toast.success("Password reset successful");
    window.location.href = "/auth/login";
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <form onSubmit={handle} className="glass p-6 rounded">
        <input placeholder="OTP" className="block mb-2" />
        <input
          type="password"
          placeholder="New Password"
          className="block mb-4"
        />
        <button className="bg-purple-600 px-4 py-2">
          Reset Password
        </button>
      </form>
    </div>
  );
}