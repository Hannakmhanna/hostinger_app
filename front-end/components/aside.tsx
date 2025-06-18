"use client";
import React, { useState } from "react";
import {
  Home,
  Globe,
  Mail,
  Database,
  ShieldCheck,
  CreditCard,
  Store,
  Users,
  Layout,
  X,
} from "lucide-react";

function Aside() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <nav className="flex flex-col h-full">
      <ul className="space-y-2 text-[16px]">
        <li className="flex items-center space-x-2 bg-[#F1ECFF] p-[12px] rounded-[8px] w-[93%] cursor-pointer">
          <Home size={18} className="text-[#5025D1]" />
          <span className="text-[#5025D1]">Home</span>
        </li>
        {[
          { icon: <Layout size={18} />, text: "Websites", gap: "gap-[103px]" },
          { icon: <Globe size={18} />, text: "Domain", gap: "gap-[107px]" },
          { icon: <Mail size={18} />, text: "Emails" },
          { icon: <Database size={18} />, text: "VPS" },
          { icon: <ShieldCheck size={18} />, text: "Dark Web Monitoring" },
          { icon: <CreditCard size={18} />, text: "Billing", gap: "gap-[107px]" },
          { icon: <Store size={18} />, text: "Marketplace", gap: "gap-[70px]" },
        ].map(({ icon, text, gap }, idx) => (
          <li key={idx} className="flex items-center space-x-2 p-2 text-gray-700 cursor-pointer">
            {icon}
            {gap ? (
              <div className={`flex ${gap}`}>
                <div><span className="text-[#1D1E20] font-[400]">{text}</span></div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-5 text-gray-600">
                    <path d="M12 16l6-6H6l6 6z" />
                  </svg>
                </div>
              </div>
            ) : (
              <span className="text-[#1D1E20] font-[400]">{text}</span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center mt-auto space-x-2 p-2 text-gray-700 cursor-pointer">
        <Users size={18} />
        <span className="text-[#1D1E20] font-[400]">Account Sharing</span>
      </div>
    </nav>
  );

  return (
    <>
      {/* Hamburger Menu Button for mobile */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="xl:hidden p-3 fixed top-4 left-4 z-50 bg-white shadow rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop Sidebar */}
     <aside className="hidden xl:block  sidebar  custom-scrollbar w-1/5 bg-white border-r border-[#d8dae0] h-screen overflow-y-auto p-5 pr-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 xl:hidden transition-opacity duration-300 opacity-100">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />

          {/* Sidebar Drawer */}
          <div className="fixed top-0 left-0 h-screen bg-white p-4 shadow-lg transform transition-transform duration-300 translate-x-0 custom-scrollbar w-4/5 sm:w-1/2 md:w-1/3 border-r border-[#d8dae0] overflow-y-auto">
            <div className="mb-4 flex justify-between items-center">
              <img src="/images/hostinger-black.svg" alt="Logo" className="w-[52%]" />
              <X size={24} className="cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
            </div>
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}

export default Aside;
