"use client";

import { useState, useEffect } from "react";
import AuthCard from "@/app/components/AuthCard";

export default function OTP() {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuthCard title="Enter OTP">
      <input
        maxLength={6}
        placeholder="Enter 6-digit OTP"
        className="input text-center text-xl tracking-widest"
      />

      {timer > 0 ? (
        <p className="text-sm mt-2">Resend in {timer}s</p>
      ) : (
        <button className="text-blue-600 mt-2">Resend OTP</button>
      )}

      <button className="btn-primary w-full mt-4">
        Verify OTP
      </button>
    </AuthCard>
  );
}