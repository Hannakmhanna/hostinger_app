"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faWordpressSimple } from "@fortawesome/free-brands-svg-icons";

const HeaderPage = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <img
                src="/images/hostinger-black.svg"
                alt="Hostinger Logo"
                className="xl:w-[100%] sm:w-[150px] xsm:w-[154px] xs:w-[171px] xs-md:w-[159px] lg:w-[204px] smx:w-[160px] sm:h-auto xl:h-auto md:w-[163px]"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav
            className={`${
              isMobileMenuOpen
                ? "flex flex-col space-y-4 absolute top-[100px] xl:w-[79%] left-0 w-full bg-white p-6 shadow-md z-40"
                : "hidden"
            } lg:flex lg:flex-row lg:space-x-6 lg:w-[136%] xl:w-[73%] lg:static lg:p-0 lg:bg-transparent`}
          >
            {/* WordPress Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("wordpress")}
                className="flex items-center space-x-1 hover:text-gray-600"
              >
                <a
                  href="#"
                  className="xl:text-[16px] md:text-[18px] lg:text-[16px] xxl:text-[18px] smx:text-[24px] sm:text-[23px] xs-md:text-[23px] text-[#1D1E20]"
                >
                  WordPress
                </a>
                {openDropdown === "wordpress" ? (
                  <ChevronUp className="text-[#2F1C6A] w-5 h-5 md:w-7 md:h-7 xl:w-6 xl:h-6" />
                ) : (
                  <ChevronDown className="text-[#2F1C6A] w-5 h-5 md:w-7 md:h-7 xl:w-6 xl:h-6" />
                )}
              </button>

              {openDropdown === "wordpress" && (
                <div className="absolute left-[-20px] md:left-[-169px] mt-3 w-[408px] bg-white p-[24px] rounded-[4px] shadow-custom z-[1001]">
                  <div className="absolute -top-2 left-[12.25rem] w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                  <div className="space-y-5">
                    <div className="flex items-center space-x-5 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <FontAwesomeIcon icon={faWordpressSimple} className="text-[#673DE6] xl:w-6 xl:h-4 md:w-[60px] text-[20px]" />
                      <div>
                        <p className="font-[600] xl:text-[16px] md:text-[21px] leading-[33px] text-[#2F1C6A]">
                          Hosting for WordPress
                        </p>
                        <p className="text-[#2F1C6A] leading-[21px] md:text-[18px] xl:text-[14px] w-[91%]">
                          Create your WordPress site in minutes with our AI tools. We manage the rest.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-5 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img src="/images/woo.png" alt="WooCommerce" className="xl:w-6 xl:h-4 md:w-[60px]" />
                      <div>
                        <p className="font-[600] xl:text-[16px] md:text-[21px] leading-[24px] text-[#2F1C6A]">
                          Hosting for WooCommerce
                        </p>
                        <p className="text-[#2F1C6A] md:text-[18px] xl:text-[14px] leading-[24px] w-[91%]">
                          Start eCommerce easily using our tools. Our services adapt as your business grows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="xl:text-[16px] md:text-[18px] lg:text-[16px] text-[#1D1E20]">Website Builder</a>

            {/* Hosting Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("hosting")}
                className="flex items-center space-x-1 hover:text-gray-600"
              >
                <span className="xl:text-[16px] md:text-[18px] lg:text-[16px] text-[#1D1E20]">Hosting</span>
                {openDropdown === "hosting" ? (
                  <ChevronUp className="text-[#2F1C6A] w-5 h-5 md:w-7 md:h-7 xl:w-6 xl:h-6" />
                ) : (
                  <ChevronDown className="text-[#2F1C6A] w-5 h-5 md:w-7 md:h-7 xl:w-6 xl:h-6" />
                )}
              </button>

              {openDropdown === "hosting" && (
                <div className="absolute left-[-130px] mt-3 w-[408px] bg-white p-[24px] rounded-[4px] shadow-custom z-[1001]">
                  <div className="absolute -top-2 left-[12.25rem] w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-5 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img src="/images/databaset.png" alt="Shared" className="xl:w-[49px] md:w-[60px]" />
                      <div>
                        <p className="font-[600] xl:text-[18px] md:text-[21px] leading-[33px] text-[#2F1C6A]">Shared Hosting</p>
                        <p className="text-[#2F1C6A] md:text-[18px] xl:text-[14px] leading-[21px] w-[91%]">Reliable web hosting for small businesses.</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-5 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img src="/images/cloud.png" alt="VPS" className="xl:w-[49px] md:w-[60px]" />
                      <div>
                        <p className="font-[600] xl:text-[18px] md:text-[21px] leading-[33px] text-[#2F1C6A]">VPS Hosting</p>
                        <p className="text-[#2F1C6A] md:text-[18px] xl:text-[14px] leading-[21px] w-[91%]">Powerful virtual servers for high performance.</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-5 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img src="/images/Screenshot (308).png" alt="Cloud" className="xl:w-[49px] md:w-[60px]" />
                      <div>
                        <p className="font-[600] xl:text-[18px] md:text-[21px] leading-[33px] text-[#2F1C6A]">Cloud Hosting</p>
                        <p className="text-[#2F1C6A] md:text-[18px] xl:text-[14px] leading-[21px] w-[91%]">Scalable cloud servers with lightning-fast speed.</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-5 hover:text-[#673DE6] hover:scale-105 cursor-pointer">
                      <img src="/images/Screenshot (309).png" alt="Email" className="xl:w-[49px] md:w-[60px]" />
                      <div>
                        <p className="font-[600] xl:text-[18px] md:text-[21px] leading-[33px] text-[#2F1C6A]">Business email</p>
                        <p className="text-[#2F1C6A] md:text-[18px] xl:text-[14px] leading-[21px] w-[91%]">Promote your business with every outreach.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="xl:text-[16px] md:text-[18px] lg:text-[16px] text-[#1D1E20]">Pro</a>
            <a href="#" className="xl:text-[16px] md:text-[18px] lg:text-[16px] text-[#1D1E20]">Domain</a>

            {/* Mobile: Language and Login Buttons */}
            <div className="mt-6 flex flex-col space-y-4 lg:hidden">
              <Link href="/languages">
                <button className="flex items-center space-x-2 text-gray-700">
                  <img src="/images/shape.png" alt="Flag" className="w-6 h-4" />
                  <span className="font-semibold text-[#1d1E20] text-lg">English</span>
                </button>
              </Link>
              <Link href="/login">
                <button className="font-bold text-[#1d1E20] border-2 border-[#1d1E20] md:w-[93%] px-4 py-2 rounded-md hover:bg-gray-100">
                  Log in
                </button>
              </Link>
            </div>
          </nav>
        </div>

        {/* Right Section - Desktop */}
       {/* Right Section - Desktop (visible only on lg and above) */}
         <div className="hidden lg:flex items-center space-x-4">
          <Link href="/languages">
            <button className="flex items-center space-x-2 text-gray-700">
              <img src="/images/shape.png" alt="Flag" className="xl:w-9 xl:h-5 md:w-12 md:h-7" />
              <span className="font-semibold text-[#1d1E20] text-[18px]">English</span>
            </button>
          </Link>
          <Link href="/login">
            <button className="font-bold text-[#1d1E20] lg:w-[107%] text-[18px] border-2 border-[#1d1E20] px-4 py-2 rounded-md hover:bg-gray-100">
              Log in
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-8 h-8 text-[#2F1C6A]" /> : <Menu className="w-8 h-8 text-[#2F1C6A]" />}
        </button>
      </div>
    </header>
  );
};

export default HeaderPage;
