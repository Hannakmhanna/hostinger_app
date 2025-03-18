"use client";
import Image from "next/image";
import { Bell, HelpCircle, User } from "lucide-react"; // Icons for Notification, Help, and Profile

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Left Side - Logo */}
      <div className="flex items-center">
        <Image src="/images/hostinger-black.svg" alt="Hostinger Logo" width={150} height={30} />
      </div>

      {/* Right Side - Buttons and Icons */}
      <div className="flex items-center gap-6">
        {/* Refer & Earn Button */}
        <button className="bg-purple-100 text-purple-600 px-4 py-2 text-sm font-semibold rounded-full flex items-center gap-2">
          🎁 Refer & Earn 200 USD
        </button>

        {/* Notification, Help, and User Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <Bell className="w-6 h-6 cursor-pointer" />
          <HelpCircle className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
