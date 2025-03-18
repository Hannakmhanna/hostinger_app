"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Gift,
  Bell,
  CircleHelp,
  CircleUserRound,
  Home,
  Globe,
  Mail,
  Database,
  ShieldCheck,
  CreditCard,
  Store,
  Users,
  Layout,
  Search,
  XCircle,
  CircleX,
  ChevronDown,
  LogOut,
  Shield,
  User,
  Activity,
} from "lucide-react";

export default function Dashboard() {
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");
  const [searchResult, setSearchResult] = useState<{
    available: boolean;
    domain: string;
    ai_suggestions: { domain: string; price: string; discount: string }[];
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const router = useRouter();
  const handleDomainClick = (selectedDomain: string) => {
    setDomain((prevDomain) => prevDomain.split(".")[0] + selectedDomain);
  };

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
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user"); // Remove corrupted data
      }
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("googleAccessToken");
    router.push("/"); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between bg-white p-4 pr-[47PX] pl-[51PX] border-b border-[#d8dae0]">
        <a href="#">
          <img
            src="/images/hostinger-black.svg"
            alt="Hostinger Logo"
            className="w-[100%]"
          />
        </a>
        <div className="flex items-center space-x-4">
          {/* Refer & Earn Section */}
          <div className="bg-purple-100 flex gap-3 text-[#673DE6] py-[4px] px-[8px] rounded-[8px]">
            <div>
              <Gift className="w-[88%]" />
            </div>
            <div className="text-[18px]">Refer & Earn 200 USD</div>
          </div>

          {/* Icons with Bottom Tooltips */}
          <div className="relative group flex flex-col items-center">
            <span className="text-[#3b3d4a] W-[33%] cursor-pointer">
              <Bell />
            </span>
            <span className="absolute top-full mt-2 w-max px-3 py-2 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Notifications
            </span>
          </div>

          <div className="relative group flex flex-col items-center">
            <span className="text-[#3b3d4a] cursor-pointer">
              <CircleHelp />
            </span>
            <span className="absolute top-full mt-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Help
            </span>
          </div>

          {/* User Profile Dropdown with Bottom Tooltip */}
          <div className="relative group flex flex-col items-center">
            <span
              className="text-[#3b3d4a] cursor-pointer relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <CircleUserRound />
            </span>
            <span className="absolute right-0 bottom-full  mt-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
              User Profile
            </span>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
                {/* User Info */}
                <div className="pb-3 border-b border-gray-200">
                  <h4 className="text-lg font-semibold">
                    {user?.name || "Guest User"}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {user?.email || "No Email"}
                  </p>
                </div>

                {/* Menu Items */}
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

                {/* Logout Button */}
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

      {/* Sidebar + Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="sidebar custom-scrollbar w-1/5 bg-white border-r border-[#d8dae0] h-screen overflow-y-auto p-5 pr-0">
          <nav className="flex flex-col h-full ">
            {/* Apply overflow to the scrollable container */}
            <ul className="space-y-2 text-[16px] ">
              <li className="flex items-center space-x-2 bg-[#F1ECFF] p-[12px] rounded-[8px] w-[93%] cursor-pointer">
                <Home size={18} className="text-[#5025D1]" />
                <span className="text-[#5025D1]">Home</span>
              </li>
              <li className="flex items-center space-x-2 p-2 text-gray-700 cursor-pointer">
                <Layout size={18} />
                <div className="flex gap-[103px]">
                  <div>
                    <span className="text-[#1D1E20] font-[400]">Websites</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-5 text-gray-600"
                    >
                      <path d="M12 16l6-6H6l6 6z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-2 p-2 text-gray-700 cursor-pointer">
                <Globe size={18} />
                <div className="flex gap-[107px]">
                  <div>
                    <span className="text-[#1D1E20] font-[400]">Domain</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-5 text-gray-600"
                    >
                      <path d="M12 16l6-6H6l6 6z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-2 p-2 text-gray-700 cursor-pointer">
                <Mail size={18} />
                <span className="text-[#1D1E20] font-[400]">Emails</span>
              </li>
              <li className="flex items-center space-x-2 p-2 text-gray-700 cursor-pointer">
                <Database size={18} />
                <span className="text-[#1D1E20] font-[400]">VPS</span>
              </li>
              <li className="flex items-center space-x-2 p-2 text-gray-700 cursor-pointer">
                <ShieldCheck size={18} />
                <span className="text-[#1D1E20] font-[400]">
                  Dark Web Monitoring
                </span>
              </li>
              <li className="flex items-center space-x-2 p-2 text-gray-700 cursor-pointer">
                <CreditCard size={18} />
                <div className="flex gap-[107px]">
                  <div>
                    <span className="text-[#1D1E20] font-[400]">Billing</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-5 text-gray-600"
                    >
                      <path d="M12 16l6-6H6l6 6z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-2 p-2 text-gray-700 cursor-pointer">
                <Store size={18} />
                <div className="flex gap-[70px]">
                  <div>
                    <span className="text-[#1D1E20] font-[400]">
                      Marketplace
                    </span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-5 text-gray-600"
                    >
                      <path d="M12 16l6-6H6l6 6z" />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex items-center mt-[211px] space-x-2 p-2 text-gray-700 cursor-pointer">
              <Users size={18} />
              <span className="text-[#1D1E20] font-[400]">Account Sharing</span>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        {!isSearching ? (
          <main className="flex-1 overflow-y-auto h-screen p-8 py-[5.5rem] pt-[48px]">
            {user ? (
              <>
                <h1 className="text-[18px] font-bold">Hello, {user.name}!</h1>
              </>
            ) : (
              <p>Loading user data...</p>
            )}

            {/* Website Builder Section */}
            <section className="bg-white pt-6 px-8 pb-8 rounded-lg border border-[#d8dae0] mt-4">
              <div className="">
                <div className="flex justify-between items-center">
                  <img
                    src="/images/dasboard.png"
                    alt="Website Builder"
                    className="w-[42%]"
                  />
                  <div className="w-[43%] text-center">
                    <h2 className="text-[20px] font-[700] leading-[57px]">
                      Website Builder & Web Hosting
                    </h2>
                    <p className="text-[#6d7081] text-[16px] font-[400] leading-[24px]">
                      Get your Web Hosting plan and build your website quickly
                    </p>
                    <div className="mt-[1.5rem]">
                      <span className="line-through text-[14px] text-[#6D7081]">
                        $11.99
                      </span>
                      <span className="text-[14px] leading-4 font-bold rounded-[8px] px-3 py-2 inline-block bg-[#ffe8ef] text-[#d63163] ml-2">
                        SAVE 75%
                      </span>
                    </div>

                    <p className=" mt-1">
                      <span className="text-[40px] font-bold">$2.99</span>
                      <span className="text-[14px] text-[#000000] font-bold ">
                        /mo
                      </span>
                    </p>
                    <button className="bg-[#673DE6] text-white font-bold text-[16px] pl-[9.5rem] pr-[9.5rem] py-2 leading-6 mt-3 rounded-[8px]">
                      Explore plans
                    </button>

                    <p className="text-[#6d7081] text-[14px] font-[400] leading-[48px]">
                      Plan renews at $7.99/month
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Domain Search Section */}
            <section className="bg-white p-6 rounded-lg border border-[#d8dae0] shadow-md mt-4">
              <h2 className="text-[20px] font-bold text-[#1D1E20]">
                Start with a domain name
              </h2>
              <p className="text-[#262831] font-[400] m-0 leading-[47px] text-[16px]">
                Find the perfect domain name with our search tool. Type your
                idea and see what's available instantly.
              </p>
              <div className="flex items-center mt-3 text-[14px] text-[#6D7081] relative space-x-4">
                <div className="relative w-full mt-4">
                  {/* Input Field */}
                  <input
                    type="text"
                    id="domainInput"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="peer border-2 border-gray-300 rounded-lg py-3 px-4 w-full text-[14px] text-[#262831] placeholder-transparent focus:border-[#673DE6] focus:border-[3px] focus:ring-0 outline-none"
                    placeholder="Enter your desired domain name (optional)"
                  />
                  {/* Floating Placeholder */}
                  <label
                    htmlFor="domainInput"
                    className="absolute left-4 top-3 text-[#6D7081] text-[14px] bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-focus:top-[-10px] peer-focus:text-[12px] peer-focus:text-[#673DE6]"
                  >
                    Enter your desired domain name (optional)
                  </label>
                  {/* Search Icon */}
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6D7081] font-bold w-6 h-5" />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-[#673DE6] text-white font-bold px-6 py-3 rounded-[8px]"
                >
                  Search
                </button>
              </div>

              <p className="text-[#262831] text-[16px] mt-7">
                Already have a domain?{" "}
                <a href="#" className="text-[#673DE6] text-[14px] font-bold">
                  Transfer it to Hostinger
                </a>{" "}
                or{" "}
                <a href="#" className="text-[#673DE6] text-[14px] font-bold">
                  get a hosting plan
                </a>{" "}
                to connect it to your website.
              </p>
            </section>
            <div className="">
              <div className="flex justify-end mt-6 fixed fixed right-0 bottom-2">
                <img src="./images/imger.svg" alt="imager" />
              </div>
            </div>
          </main>
        ) : (
          // Show search results

          <section className="flex-1 overflow-y-auto h-screen p-[5.5rem]  w-full mx-auto">
            {/* Header Section */}
            <h2 className="text-[24px] leading-[52px] text-[#3b3d4a] font-[700] text-center">
              Get a New Domain
            </h2>

            {/* Tab Buttons */}
            <div className="flex items-center justify-center mt-4">
              <button className="flex items-center border border-[#673DE6] rounded-full font-bold shadow-md p-0 h-[50px]">
                <span className="bg-[#673DE6] text-[14px] text-white px-7 pt-[13px] pb-[15px] rounded-full">
                  Find new domain
                </span>
                <span className="text-[#6D7081] text-[14px] pl-[.75rem] pr-[1.5rem] py-3 flex items-center gap-2">
                  <img
                    src="./images/domain star.png"
                    alt="domain star"
                    className="w-[2.7rem] h-auto object-contain"
                  />
                  Generate domain using AI
                </span>
              </button>
            </div>
            <p className="text-[16px] text-center text-[#6D7081] mt-8">
              Type your desired domain name into the domain checker search bar
              and find out if it's available instantly!
            </p>

            {/* Search Box */}
            <div className=" flex-col items-center w-full mt-4">
              {/* Description */}

              <div className="flex items-center max-w-[981px] space-x-5">
                {/* Input Field */}
                <div className="relative flex-grow">
                  {/* Input Field */}
                  <input
                    id="domainInput"
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch(); // Call search function on Enter key press
                      }
                    }}
                    className={`peer border ${
                      error
                        ? "border-[#fc5185] focus:ring-[#fc5185]"
                        : "border-gray-300 focus:ring-[#673DE6]"
                    } rounded-md pt-[18px] pb-[10px] px-4 w-full focus:outline-none focus:ring-1`}
                    placeholder=" " // Keeps label floating effect
                  />

                  {/* Floating Label */}
                  <label
                    htmlFor="domainInput"
                    className={`absolute left-3 top-[-9px] px-1 bg-white text-[12px] transition-all 
        ${error ? "text-[#fc5185]" : "text-[#6D7081]"} 
        peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-[14px] 
        peer-placeholder-shown:${error ? "text-[#fc5185]" : "text-[#6D7081]"} 
        peer-focus:top-[-4.2px] peer-focus:text-[12px] peer-focus:${
          error ? "text-[#fc5185]" : "text-[#673DE6]"
        }`}
                  >
                    Enter your desired domain name
                  </label>

                  {/* Search Icon */}
                  <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#673DE6] font-bold w-5 h-5" />
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="bg-[#673DE6] text-white px-[29px] py-[12px] rounded-md hover:bg-purple-700 transition disabled:bg-gray-400"
                  disabled={loading}
                >
                  {loading ? "Searching..." : "Search"}
                </button>
              </div>

              {/* Error Message */}
              {error && <p className="text-[#fc5185] text-sm mt-2">{error}</p>}

              {/* Domain Prices */}
              <div className="flex justify-center  items-center gap-[54px] mt-10 text-[#673DE6] text-[16px]">
                {[
                  { name: ".com", price: "$4.99" },
                  { name: ".net", price: "$11.99" },
                  { name: ".io", price: "$31.99" },
                  { name: ".org", price: "$7.99" },
                  { name: ".online", price: "$1.99" },
                  { name: ".shop", price: "$0.99" },
                ].map((domain, index) => (
                  <React.Fragment key={index}>
                    <button
                      className="space-y-1 hover:text-[#572DD6] transition-all"
                      onClick={() => handleDomainClick(domain.name)}
                    >
                      <span className="text-[24px] font-bold">
                        {domain.name}
                      </span>
                      <p className="text-[#6D7081] text-[16px]">
                        {domain.price}
                      </p>
                    </button>
                    {index < 5 && (
                      <div className="h-12 w-[1px] bg-[#D3D3D3]"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex flex-col items-center bg-[#f4f4fc] pt-20">
                {/* Already registered box */}
                {searchResult && searchResult.available === false && (
                  <div className="w-[100%] bg-[#FFFFFF] p-5 rounded-[8px] shadow-sm flex items-center space-x-4 border border-[#d8dae0]">
                    <CircleX className="text-gray-500 text-lg" />
                    <p className="text-[#6D7081] text-sm">
                      <span className="font-semibold text-[#6D7081]">
                        {searchResult.domain}
                      </span>{" "}
                      is already registered
                    </p>
                  </div>
                )}

                {/* AI generated alternatives box */}
                {searchResult && searchResult.ai_suggestions?.length > 0 && (
                  <div className="w-full bg-white p-4 pl-[0] rounded-lg shadow-sm border border-gray-200 mt-4">
                    <h3 className="text-[#6D7081] font-bold text-[16px] flex items-center gap-2 pb-2 border-b border-gray-200 w-[102%] mx-auto">
                      <img
                        src="./images/DOMAIN2.png"
                        alt="domain star"
                        className="w-[2.7rem] h-auto object-contain"
                      />
                      AI generated alternatives
                    </h3>

                    {searchResult.ai_suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="py-6 border-b border-gray-200 w-[102%] px-9 flex justify-between items-center"
                      >
                        {/* Left Side: Domain Name */}
                        <span className="text-[#2e1c85] font-medium text-base">
                          {suggestion.domain}
                        </span>

                        {/* Right Side: Price & Button */}
                        <div className="flex items-center gap-[42px] space-x-3">
                          <span className="bg-[#8C85FF] text-[#FFFFFF] mr-[-42px] px-3 py-1 rounded-[8px] text-xs font-semibold">
                            Save {suggestion.discount}
                          </span>
                          <div className="flex flex-col">
                            <span className="line-through text-[#6D7081] text-[14PX]">
                              $15.99
                            </span>
                            <span className="text-[#2F1C6A] font-bold text-[24px]">
                              {suggestion.price}
                              <span className="text-[14px] text-[#2F1C6A]">
                                {" "}
                                /1st yr
                              </span>
                            </span>
                          </div>

                          <button className="border border-[#d8dae0] text-[#673DE6] text-sm px-5 py-3 rounded-lg font-medium">
                            Buy domain
                          </button>
                        </div>
                      </div>
                    ))}

                    <p className="text-center text-[#673DE6] py-4 text-sm mt-2 cursor-pointer font-medium flex items-center justify-center gap-x-1">
                      See more options <ChevronDown className="w-5 h-5" />
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
