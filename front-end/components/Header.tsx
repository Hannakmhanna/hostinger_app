"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faWordpressSimple } from "@fortawesome/free-brands-svg-icons";

const HeaderPage = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="py-5 px-10 fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="wrapper w-[98%] mx-auto flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div>
            <a href="#">
              <img src="/images/hostinger-black.svg" alt="Hostinger Logo"className="w-[100%] h-auto" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 text-neutral-600 text-sm relative">
            {/* WordPress Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("wordpress")}
                className="flex items-center space-x-1 hover:text-gray-600"
              >
                <span className="text-[18px] text-[#1D1E20]">WordPress</span>
                {openDropdown === "wordpress" ? (
                  <ChevronUp size={20} className="text-[#2F1C6A]" />
                ) : (
                  <ChevronDown size={20} className="text-[#2F1C6A]" />
                )}
              </button>

              {/* Dropdown Box */}
              {openDropdown === "wordpress" && (
                <div className="absolute left-[-169px] mt-3 w-[408px] bg-white p-[24px] rounded-[4px] shadow-custom z-[1001]">
                  {/* Arrow (Caret) */}
                  <div className="absolute -top-2 left-[12.25rem] w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>

                  {/* Dropdown Content */}
                  <div className="space-y-5">
                    {/* WordPress Hosting */}
                    <div className="flex items-center space-x-5 transition-all duration-300 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <FontAwesomeIcon
                        icon={faWordpressSimple}
                        className="text-[#673DE6] text-[20px]"
                      />
                      <div className="">
                        <p className="font-[600] leading-[33px] text-[18px] text-[#2F1C6A] ">
                          Hosting for WordPress
                        </p>
                        <p className="text-[#2F1C6A] leading-[21px] w-[91%] text-[14px]">
                          Create your WordPress site in minutes with our AI
                          tools. We manage the rest.
                        </p>
                      </div>
                    </div>

                    {/* WooCommerce Hosting */}
                    <div className="flex items-center space-x-5 transition-all duration-300 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img
                        src="/images/woo.png"
                        alt="WooCommerce"
                        className="w-6 h-4"
                      />
                      <div className="">
                        <p className="font-[600] leading-[24px] text-[18px] text-[#2F1C6A]">
                          Hosting for WooCommerce
                        </p>
                        <p className="text-[#2F1C6A] leading-[24px] w-[91%] text-[14px]">
                          Start eCommerce easily using our tools.our services
                          adapt as your businesses grows
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="text-[18px] text-[#1D1E20]">
              Website Builder
            </a>

            {/* Hosting Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("hosting")}
                className="flex items-center space-x-1 hover:text-gray-600"
              >
                <span className="text-[18px] text-[#1D1E20]">Hosting</span>
                {openDropdown === "hosting" ? (
                  <ChevronUp size={20} className="text-[#2F1C6A]" />
                ) : (
                  <ChevronDown size={20} className="text-[#2F1C6A]" />
                )}
              </button>

              {/* Dropdown Box */}
              {openDropdown === "hosting" && (
                <div className="absolute left-[-130px] mt-3 w-[408px] bg-white p-[24px]  rounded-[4px] shadow-custom z-[1001]">
                  {/* Arrow (Caret) */}
                  <div className="absolute -top-2 left-[12.25rem] w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>

                  {/* Dropdown Content */}
                  <div className="space-y-3">
                    {/* Shared Hosting */}
                    <div className="flex items-center space-x-5 transition-all duration-300 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img
                        src="/images/databaset.png"
                        alt="Shared"
                        className="w-[49px] h-auto"
                      />
                      <div>
                        <p className="font-[600] leading-[33px] text-[18px] text-[#2F1C6A]">
                          Shared Hosting
                        </p>
                        <p className="text-[#2F1C6A] leading-[21px] w-[91%] text-[14px]">
                          Reliable web hosting for small businesses.
                        </p>
                      </div>
                    </div>

                    {/* VPS Hosting */}
                    <div className="flex items-center space-x-5 transition-all duration-300 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img
                        src="/images/cloud.png"
                        alt="Shared"
                        className="w-[50px] h-auto"
                      />
                      <div>
                        <p className="font-[600] leading-[33px] text-[18px] text-[#2F1C6A]">VPS Hosting</p>
                        <p className="text-[#2F1C6A] leading-[21px] w-[91%] text-[14px]">
                          Powerful virtual servers for high performance.
                        </p>
                      </div>
                    </div>

                    {/* Cloud Hosting */}
                    <div className="flex items-center space-x-5 transition-all duration-300 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img
                        src="/images/Screenshot (308).png"
                        alt="Cloud"
                        className="w-[43px] h-auto"
                      />
                      <div>
                        <p className="font-[600] leading-[33px] text-[18px] text-[#2F1C6A]">
                          Cloud Hosting
                        </p>
                        <p className="text-[#2F1C6A] leading-[21px] w-[91%] text-[14px]">
                          Scalable cloud servers with lightning-fast speed.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-5 transition-all duration-300 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img
                        src="/images/Screenshot (309).png"
                        alt="Cloud"
                        className="w-[43px] h-auto"
                      />
                      <div>
                        <p className="font-[600] leading-[33px] text-[18px] text-[#2F1C6A]">
                          Business email
                        </p>
                        <p className="text-[#2F1C6A] leading-[21px] w-[91%] text-[14px]">
                          promote your businesses with every outreach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}

            <a href="#" className="text-[18px] text-[#1D1E20]">
              Pro
            </a>
            <a href="#" className="text-[18px] text-[#1D1E20]">
              Domain
            </a>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <Link href="/languages">
            <button className="flex items-center space-x-2 text-gray-700">
              <img src="/images/shape.png" alt="India Flag" className="w-9 h-5" />
              <span className="font-bold text-[#1d1E20] text-[18px]">English</span>
            </button>
          </Link>

          {/* Login Button */}
          <Link href="/login">
          <button className="font-bold text-[#1d1E20] text-[18px] border-[3px] border-[#1d1E20] px-5 py-3 rounded-md hover:bg-gray-100">
            Log in
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
