import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
   
    const { to, subject, message } = await req.json();

    
    if (!to || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

   
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: message,
    };

    
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    return NextResponse.json({
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { message: "Email failed" },
      { status: 500 }
    );
  }
}