import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Bookstore",
  description: "Modern Online Bookstore",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white">

        {/* ✅ Providers FIRST */}
        <AuthProvider>
          <CartProvider>

            {/* ✅ Now components can access context */}
            <Navbar />

            <Toaster position="top-right" />

            <main className="flex-1">{children}</main>

            <Footer />

          </CartProvider>
        </AuthProvider>

      </body>
    </html>
  );
}