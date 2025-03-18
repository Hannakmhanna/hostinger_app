"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Globe } from "lucide-react";
import { MoveUpRight } from "lucide-react";

const categories = [
  "Recommended",
  "Create a website",
  "Hosting",
  "Domains & email",
];

const CardSection = () => {
  const [activeCategory, setActiveCategory] = useState("Recommended");

  return (
    <div className="wrapper w-[88%] mx-auto">
      <div className="text-center mt-[115px] p-8">
        <h2 className="text-[42px] font-bold text-[#2F1C6A]">
          Your online success starts here
        </h2>
        <p className="text-[#2F1C6A] text-[18px] mt-7">
          Choose from a wide variety of products and services to grow your idea
          online.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          {categories.map((text, index) => (
            <button
              key={index}
              className={`px-[22px] py-[12px] text-[#2F1C6A] text-[16px] font-[700] rounded-[30px] ${
                activeCategory === text ? "bg-[#D5DFFF]" : "bg-[#F4F5FF]"
              }`}
              onClick={() => setActiveCategory(text)}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Only show content based on the selected category */}
        {activeCategory === "Recommended" && (
          <div className="mt-8">
            {/* Web Hosting Section */}
            <div className="flex flex-col lg:flex-row mt-[56px] items-center justify-between bg-[#1E0E40] text-white p-11 rounded-[16px] h-[495px]">
              {/* Left Section */}
              <div className="lg:w-1/2 text-left">
                <span className="text-[14px] font-bold bg-[#2F1C6A] text-[#8C85FF] px-3 py-1 rounded-full">
                  FREE WEBSITE MIGRATION
                </span>
                <h2 className="text-[35px] font-bold mt-[33px]">Web hosting</h2>
                <p className="text-[#FAFBFF] text-[14px] w-[86%] font-semibold mt-[23px]">
                  Get unmatched website performance, high-speed hosting and
                  security you can trust. Your growth is our goal.
                </p>
                <button className="mt-6 text-[#8C85FF] font-semibold rounded-full flex items-center gap-2">
                  Start and scale
                  <ChevronRight />
                </button>
              </div>

              {/* Right Section - Image */}
              <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <img
                  src="/images/card.avif"
                  alt="Hosting Dashboard"
                  className="max-w-[95%] ml-[117px] h-auto rounded-[16px]"
                />
              </div>
            </div>

            {/* AI Website Builder Section */}
            <div className="flex flex-col lg:flex-row mt-[56px] items-center text-black px-[4px] rounded-lg gap-[26px]">
              {/* Left Section - AI Website Builder (With Image Inside) */}
              <div className="bg-[#F5F3FE] p-8 rounded-lg flex flex-row items-center">
                {/* Left Content */}
                <div className="w-1/2 text-left">
                  <span className="text-[14px] font-bold bg-[#D5DFFF] text-[#2F1C6A] px-3 py-1 rounded-full">
                    NO CODING SKILLS NEEDED
                  </span>
                  <h2 className="text-[36px] leading-tight text-[#2F1C6A] font-bold mt-4">
                    Build a website with AI
                  </h2>
                  <p className="text-gray-700 mt-2">
                    Create your dream website in 3 simple steps with Hostinger
                    Website Builder. Start a blog, launch an online store,
                    showcase your portfolio, and more.
                  </p>
                  <button className="mt-6 text-[#673DE6] text-[14px] font-bold rounded-full flex items-center gap-2">
                    Go live in minutes
                    <ChevronRight />
                  </button>
                </div>

                {/* Right Image (Inside Left Section) */}
                <div className="w-1/2 flex justify-center">
                  <img
                    src="/images/cardimage.avif"
                    alt="AI Website Builder"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Right Section - Domain Finder */}
              <div className="lg:w-[100%]">
                <div className="relative bg-[#8C85FF] text-white pt-[31px] pb-[196px] px-10 rounded-[20px] w-[100%] h-[360px] flex flex-col justify-between shadow-lg">
                  {/* Top Section - Icons */}
                  <div className="flex justify-between items-center">
                    <div className="p-3 bg-[#673DE6] rounded-[16px] flex items-center justify-center">
                      <Globe className="text-white" size={20} />
                    </div>
                    <MoveUpRight className="text-white" size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] text-[#FAFBFF] font-bold mt-8 text-left leading-[40px]">
                    Find a domain that will help your business stand out
                  </h3>

                  {/* Bottom Section - Domain Badge */}
                  <div className="absolute bottom-0 left-0 w-full">
                    <img
                      src="/images/save.avif"
                      alt="Domain Icon"
                      className="rounded-bl-[20px] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Only show the content related to "Create a Website" */}
        {activeCategory === "Create a website" && (
          <>
            {/* Hostinger Website Builder */}
            <div className="flex flex-col lg:flex-row mt-[56px] items-center justify-between bg-[#1E0E40] text-white p-11 rounded-[16px] h-[509px]">
              <div className="lg:w-1/2 text-left">
                <span className="text-[14px] font-bold bg-[#2F1C6A] text-[#8C85FF] px-3 py-1 rounded-full">
                  PERFECT FOR BEGINNERS
                </span>
                <h2 className="text-[33px] font-bold mt-[33px]">
                  Hostinger Website Builder
                </h2>
                <p className="text-[#FAFBFF] text-[14px] w-[86%] font-semibold mt-[23px]">
                  Ask AI to create a unique website for you or use a
                  customizable template and the easy drag-and-drop editor. The
                  simple way to launch an online store and more.
                </p>
                <button className="mt-6 text-[#8C85FF] font-semibold rounded-full flex items-center gap-2">
                  Build your business
                  <ChevronRight />
                </button>
              </div>

              <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <img
                  src="/images/CARD2.avif"
                  alt="Hosting Dashboard"
                  className="max-w-[96%] ml-[110px] rounded-[16px] h-auto"
                />
              </div>
            </div>

            {/* WordPress AI Section */}
            <div className="flex flex-col lg:flex-row mt-[56px] items-center justify-between bg-[#F5F3FE] text-white p-11 rounded-[16px] h-[509px]">
              <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <img
                  src="/images/CARD3.avif"
                  alt="Hosting Dashboard"
                  className="max-w-[97%] mr-[106px] h-auto rounded-[16px]"
                />
              </div>
              <div className="w-1/2 pl-[80px] text-left">
                <span className="text-[13px] font-bold bg-blue-200 text-[#2F1C6A] px-3 py-1 rounded-full">
                  RECOMMENDED BY WORDPRESS.ORG
                </span>
                <h2 className="text-[34px] text-[#2F1C6A] font-bold mt-4">
                  Create a WordPress site
                </h2>
                <p className="text-[#2F1C6A] text-[14px] mt-2">
                  When you want to build a new WordPress website, let AI tools
                  do all the hard work for you. From eCommerce product
                  descriptions to logo design and more.
                </p>
                <button className="mt-6 text-[#673DE6] text-[14px] font-bold rounded-full flex items-center gap-2">
                  Explore the tools
                  <ChevronRight />
                </button>
              </div>
            </div>
          </>
        )}
        {/* Only show the hosting-related content when "Hosting" is selected */}
        {activeCategory === "Hosting" && (
          <>
            <div className="flex flex-col lg:flex-row gap-8 mt-12">
              {/* Left Div */}
              <div className="flex flex-col items-center bg-[#F5F3FE] text-black rounded-lg w-full lg:w-1/2">
                <div className="bg-[#1F1346]">
                  <img
                    src="/images/mixedcard1.avif"
                    alt="Web Hosting"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
                <div className="bg-[#F4F5FF] p-10 text-left">
                  <span className="text-[13px] font-bold bg-blue-200 text-[#2F1C6A] px-3 py-1 rounded-full">
                    FREE WEBSITE MIGRATION
                  </span>
                  <h2 className="text-[30px] text-[#2F1C6A] font-bold mt-6">
                    Web hosting
                  </h2>
                  <p className="text-[#2F1C6A] text-[14px] font-semibold mt-[10px]">
                    Find your niche on the web and start building your business
                    with worry-free web hosting.
                  </p>
                  <button className="mt-6 text-[#673DE6] font-semibold flex items-center gap-2">
                    Go live in minutes <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Right Div */}
              <div className="flex flex-col items-center bg-[#F5F3FE] text-black rounded-lg w-full lg:w-1/2">
                <div className="bg-[#EEE9FF] rounded-lg">
                  <img
                    src="/images/mixedcard2.avif"
                    alt="Managed Hosting"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
                <div className="bg-[#F4F5FF] text-left p-10">
                  <span className="text-[13px] font-bold bg-blue-200 text-[#2F1C6A] px-3 py-1 rounded-full">
                    RECOMMENDED BY WORDPRESS.ORG
                  </span>
                  <h2 className="text-[26px] text-[#2F1C6A] font-bold mt-6">
                    Managed Hosting for WordPress
                  </h2>
                  <p className="text-[#2F1C6A] text-[14px] font-semibold mt-[10px]">
                    Grow online with feature-rich hosting you can rely on with
                    lightning-fast speeds, smart AI tools, and 24/7 support.
                  </p>
                  <button className="mt-6 text-[#673DE6] font-semibold flex items-center gap-2">
                    An all-in-one solution <ChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-12">
              {/* Left Div */}
              <div className="flex flex-col items-center bg-[#F5F3FE] text-black w-full lg:w-1/2">
                <div className="bg-[#D5DFFF]">
                  <img
                    src="/images/mixedcard3.avif"
                    alt="Cloud Hosting"
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="bg-[#F4F5FF] p-10 text-left">
                  <span className="text-[13px] font-bold bg-blue-200 text-[#2F1C6A] px-3 py-1 rounded-full">
                    GLOBAL NETWORKS
                  </span>
                  <h2 className="text-[30px] text-[#2F1C6A] font-bold mt-6">
                    Cloud hosting
                  </h2>
                  <p className="text-[#2F1C6A] text-[14px] font-semibold mt-[10px]">
                    Take your big ideas and large online projects to new heights
                    with fully managed power and flexibility.
                  </p>
                  <button className="mt-6 text-[#673DE6] font-semibold flex items-center gap-2">
                    Managed Cloud Hosting <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Right Div */}
              <div className="flex flex-col items-center bg-[#F5F3FE] text-black w-full lg:w-1/2">
                <div className="bg-[#1F1346] rounded-lg">
                  <img
                    src="/images/mixedcard4.avif"
                    alt="VPS Hosting"
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="bg-[#F4F5FF] text-left p-10">
                  <span className="text-[13px] font-bold bg-blue-200 text-[#2F1C6A] px-3 py-1 rounded-full">
                    SCALABLE PLANS
                  </span>
                  <h2 className="text-[26px] text-[#2F1C6A] font-bold mt-6">
                    VPS hosting
                  </h2>
                  <p className="text-[#2F1C6A] text-[14px] font-semibold mt-[10px]">
                    High performance, high speeds, and high-quality security
                    with low effort from you. Leave the hard work to us.
                  </p>
                  <button className="mt-6 text-[#673DE6] font-semibold flex items-center gap-2">
                    Scale your success <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Only show the content related to "Domains & email" */}
        {activeCategory === "Domains & email" && (
          <>
            <div className="flex flex-col lg:flex-row mt-[56px] items-center justify-between bg-[#1E0E40] text-white p-11 rounded-[16px] h-[495px]">
              {/* Left Section */}
              <div className="lg:w-1/2 text-left">
                <span className="text-[14px] font-bold bg-[#2F1C6A] text-[#8C85FF] px-3 py-1 rounded-full">
                  FREE PRIVACY PROTECTION
                </span>
                <h2 className="text-[35px] font-bold mt-[33px]">Domains</h2>
                <p className="text-#FAFBFF] text-[14px] w-[86%] font-semibold mt-[23px]">
                  Boost your online visibility and give your business a good
                  name. Secure your space on the web.
                </p>
                <button className="mt-6 text-[#8C85FF] font-semibold rounded-full flex items-center gap-2">
                  Claim your domain
                  <ChevronRight />
                </button>
              </div>

              {/* Right Section - Image */}
              <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <img
                  src="/images/domaincard.png"
                  alt="Domain Dashboard"
                  className="max-w-[93%] ml-[129px] mb-[-8px] h-auto rounded-[16px]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-[56px] items-center text-black px-[4px] rounded-lg gap-[26px]">
              {/* Left Section - AI Website Builder (With Image Inside) */}
              <div className=" bg-[#F5F3FE] p-8 rounded-lg flex flex-row items-center">
                {/* Left Content */}
                <div className="w-1/2 text-left p-4">
                  <h2 className="text-[36px] leadingtight text-[#2F1C6A] font-bold mt-4">
                    Email
                  </h2>
                  <p className="text-[#2F1C6A] w-[110%] mt-2">
                    Get an email address that matches your domain and
                    supercharges your business’s credibility.
                  </p>
                  <button className="mt-6 text-[#673DE6] text[14px] font-bold rounded-full flex items-center gap-2">
                    Boost your brand
                    <ChevronRight />
                  </button>
                </div>

                {/* Right Image (Inside Left Section) */}
                <div className="w-1/2 flex justify-center p-10">
                  <img
                    src="/images/domaincard2.avif"
                    alt="AI Website Builder"
                    className="w-[199%] h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Right Section - Domain Finder */}
              <div className="lg:w-[100%]">
                <div className="relative bg-[#8C85FF] text-white pt-[31px] pb-[190px] px-10 rounded-[20px] w-[100%] h-[360px] flex flex-col justify-between shadow-lg">
                  {/* Top Section - Icons */}
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-bold bg-[#D5DFFF] text-[#2F1C6A] px-3 py-1 rounded-full">
                      FAST AND EASY
                    </span>
                    <MoveUpRight className="text-white" size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] text-[#FAFBFF] font-bold mt-8 text-left leading-[40px]">
                    Transfer your existing domain to Hostinger in a few clicks
                  </h3>

                  {/* Bottom Section - Domain Badge */}
                  <div className="absolute bottom-0 left-[97px]">
                    <img
                      src="/images/cardstyle.avif"
                      alt="Domain Icon"
                      className="rounded-bl-[20px] w-[99%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardSection;
