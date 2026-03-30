"use client";

import OTPInput from "@/components/OTPInput";
// import { verifyOtp } from "@/services/api";
import toast from "react-hot-toast";

export default function OTPVerify() {
  const handle = async (otp) => {
    if (otp.length === 6) {
      try {
        await verifyOtp({ otp });
        toast.success("Verified!");
        window.location.href = "/auth/login";
      } catch {
        toast.error("Invalid OTP");
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <OTPInput onChange={handle} />
    </div>
  );
}