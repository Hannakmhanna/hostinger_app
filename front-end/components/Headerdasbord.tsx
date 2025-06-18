"use client";
import React, { useState, useEffect } from "react";
import {
  Gift,
  Bell,
  CircleHelp,
  CircleUserRound,
  Globe,
  Users,
  LogOut,
  Shield,
  User,
  Activity,
  Menu,
} from "lucide-react";
import { useRouter } from "next/navigation";

function HeaderDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [domain, setDomain] = useState("");
    const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
       const [isSearching, setIsSearching] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [searchResult, setSearchResult] = useState<{
      available: boolean;
      domain: string;
      ai_suggestions: { domain: string; price: string; discount: string }[];
    } | null>(null);
  const router = useRouter();

  const handleSearch = async () => {
    // Validate domain length
    if (domain.length < 3) {
      setError("Domain name must be at least 3 characters long");
      return;
    }

    setError(""); // Clear error if valid
    setLoading(true);
    setIsSearching(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/domain_search/check/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ domain }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error("Error fetching domain data:", error);
    } finally {
      setLoading(false);
    }
  };


 
useEffect(() => {
  const storedUser = localStorage.getItem("user");
  console.log("Stored user in localStorage:", storedUser); //  Debug line

  if (storedUser) {
    try {
      setUser(JSON.parse(storedUser));
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("user");
    }
  }
}, []);


  const handleLogout = () => {
    
    localStorage.removeItem("user");
    localStorage.removeItem("googleAccessToken");
     localStorage.clear();
     router.push("/login");
  };

  return (
    <header className="flex items-center justify-between bg-white p-4 px-[48px] border-b border-[#d8dae0]">
      {/* Left Section */}
      <div className={`transition-opacity duration-300 ${isSidebarOpen ? "opacity-0" : "opacity-100"}`}>
        <div className="flex items-center gap-4">
          {/* Menu Icon (Visible on Mobile) */}
          <div className="xl:hidden">
            <Menu
              size={28}
              className="text-[#3b3d4a] cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            />
          </div>

          {/* Logo */}
          <a href="#">
            <img
              src="/images/hostinger-black.svg"
              alt="Hostinger Logo"
              className="w-[143px] hidden xl:block"
            />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Refer & Earn */}
        <div className="bg-purple-100 flex gap-3 text-[#673DE6] py-[4px] px-[8px] rounded-[8px]">
          <Gift className="w-5 h-5" />
          <div className="text-[18px] hidden sm:block">Refer & Earn 200 USD</div>
        </div>

        {/* Bell Icon */}
        <div className="relative group flex flex-col items-center">
          <span className="text-[#3b3d4a] cursor-pointer">
            <Bell />
          </span>
          <span className="absolute top-full mt-2 px-3 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Notifications
          </span>
        </div>

        {/* Help Icon */}
        <div className="relative group flex flex-col items-center">
          <span className="text-[#3b3d4a] cursor-pointer">
            <CircleHelp />
          </span>
          <span className="absolute top-full mt-2 px-3 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Help
          </span>
        </div>

        {/* User Profile */}
        <div className="relative group flex flex-col items-center">
          <span
            className="text-[#3b3d4a] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <CircleUserRound />
          </span>
          <span className="absolute top-full mt-2 px-3 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            User Profile
          </span>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-50">
              {/* User Info */}
              <div className="pb-3 border-b border-gray-200">
                <h4 className="text-lg font-semibold">
                  {user?.name || "Guest User"}
                </h4>
                <p className="text-gray-500 text-sm">
                  {user?.email || "No Email"}
                </p>
              </div>

              {/* Dropdown Items */}
              <ul className="mt-2 space-y-2">
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                  <User className="w-5 h-5 text-gray-600" />
                  Account Information
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                  <Shield className="w-5 h-5 text-gray-600" />
                  Security
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                  <Users className="w-5 h-5 text-gray-600" />
                  Account Sharing
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                  <Activity className="w-5 h-5 text-gray-600" />
                  Account Activity
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                  <Globe className="w-5 h-5 text-gray-600" />
                  Language (English)
                </li>
              </ul>

              {/* Logout */}
              <div className="mt-3">
                <button
                  onClick={handleLogout}
                  className="w-full py-2 bg-purple-100 text-[#673DE6] rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <LogOut className="w-5 h-5" /> Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderDashboard;
