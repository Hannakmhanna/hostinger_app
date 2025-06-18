"use client";
import { useState } from "react";
import { useRef } from "react";
import {ChevronLeft, ChevronRight } from "lucide-react";
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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  };
  
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <div className="wrapper w-[88%] mx-auto">
      <div className="text-center mt-[115px] xs:pl-[1px] xs:pr-[0] xxs:pl-[1px] xxs:pr-[0] p-8">
        <h2 className="xl:text-[42px] xxl:text-[40px] lg:text-[39px] md:text-[32px] xs-md:text-[28px] xs:text-[24px] xxs:text-[24px] sm:text-[29px] xsm:text-[29px] font-bold text-[#2F1C6A]">
          Your online success starts here
        </h2>
        <p className="text-[#2F1C6A] text-[18px] mt-7">
          Choose from a wide variety of products and services to grow your idea
          online.
        </p>

        {/* Buttons */}
        <>
      {/* Regular layout for above 580px */}
      <div className="hidden smx:hidden sm:flex flex-wrap justify-center gap-4 mt-12">
        {categories.map((text, index) => (
          <button
            key={index}
            className={`px-[22px] py-[12px] text-[#2F1C6A] text-[14px] font-[700] rounded-[30px] ${
              activeCategory === text ? "bg-[#D5DFFF]" : "bg-[#F4F5FF]"
            }`}
            onClick={() => setActiveCategory(text)}
          >
            {text}
          </button>
        ))}
      </div>

      {/* Scrollable + arrows for 580px and below */}
      <div className="relative w-full smx:flex smx:items-center smx:justify-center sm:hidden mt-12">
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-1 z-10 bg-white rounded-full shadow p-2"
        >
          <ChevronLeft className="text-[#2F1C6A] w-5 h-5" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-10 w-full"
        >
          {categories.map((text, index) => (
            <button
              key={index}
              className={`px-[22px] py-[12px] whitespace-nowrap text-[#2F1C6A]  text-[13px] font-[700] rounded-[30px] ${
                activeCategory === text ? "bg-[#D5DFFF]" : "bg-[#F4F5FF]"
              }`}
              onClick={() => setActiveCategory(text)}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-1 top-1 z-10 bg-white rounded-full shadow p-2"
        >
          <ChevronRight className="text-[#2F1C6A] w-5 h-5" />
        </button>
      </div>
    </>

        {/* Only show content based on the selected category */}
        {activeCategory === "Recommended" && (
          <div className="mt-8">
            {/* Web Hosting Section */}
            <div className="flex sm:flex-col xs:flex-col md:flex-col xs-md:flex-col smx:flex-col xsm:flex-col xxs:flex-col lg:flex-row xl:flex-row mt-[56px] xl:gap-[4px] xxl:gap-[106px] items-center justify-between bg-[#1E0E40] text-white p-11 rounded-[16px] h-auto lg:h-[495px]">
              {/* Left Section */}
              <div className="w-full lg:w-1/2 text-left">
                <span className="text-[14px] font-bold bg-[#2F1C6A] text-[#8C85FF] px-3 py-1 rounded-full">
                  FREE WEBSITE MIGRATION
                </span>
                <h2 className="xl:text-[35px] xxl:text-[35px] lg:text-[35px] xs:text-[26px] xxs:text-[18px] font-bold mt-[33px]">Web hosting</h2>
                <p className="text-[#FAFBFF] xl:text-[16px] sm:text-[16px] xl:w-[86%] xxl:w-[86%] lg:w-[86%] xsm:w-[100%] xs:w-[119%] xxs:w-[116%] font-semibold mt-[23px]">
                  Get unmatched website performance, high-speed hosting and
                  security you can trust. Your growth is our goal.
                </p>
                <button className="mt-6 text-[#8C85FF] font-semibold rounded-full flex items-center gap-2">
                  Start and scale
                  <ChevronRight />
                </button>
              </div>

              {/* Right Section - Image */}
              <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <img
                  src="/images/card.avif"
                  alt="Hosting Dashboard"
                  className="xl:w-[107%] md:max-w-[676px] xs-md:max-w-[651px] smx:max-w-[509px] xsm:max-w-[387px] xs:max-w-[138%] xsm:mb-[-44px] xs:mb-[-45px] xxs:max-w-[146%] xxs:mb-[-45px] sm:max-w-[563px] sm:mb-[-45px] xs-md:mb-[-45px] smx:mb-[-44px] lg:max-w-[123%] xl:ml-[51px] xxl:w-[156%] lg:mb-[-69px] lg:ml-0  md:mb-[-45px] xxl:ml-0 xxl:mb-[-61px] xl:mb-[30px] h-auto rounded-[16px]"
                />
              </div>
            </div>

            {/* AI Website Builder Section */}
            <div className="flex flex-col xl:flex-row mt-[56px] items-center text-black px-[4px] rounded-lg gap-[26px]">
              {/* Left Section - AI Website Builder (With Image Inside) */}
              <div className="bg-[#F5F3FE] p-8 rounded-lg flex xl:flex-row lg:flex-row md:flex-col xs-md:flex-col sm:flex-col smx:flex-col xsm:flex-col xs:flex-col xxs:flex-col items-center">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-left">
                  <span className="text-[14px] font-bold bg-[#D5DFFF] text-[#2F1C6A] px-3 py-1 rounded-full">
                    NO CODING SKILLS NEEDED
                  </span>
                  <h2 className="xl:text-[36px] xxl:text-[36px] lg:text-[36px] md:text-[36px] xs:text-[22px] leading-tight text-[#2F1C6A] font-bold mt-4">
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
                    className="xl:max-w-[100%] lg:max-w-[100%] md:max-w-[198%] xs-md:max-w-[224%] sm:max-w-[204%] smx:max-w-[204%] xsm:max-w-[203%] xs:max-w-[249%] xxs:max-w-[255%] xl:h-auto rounded-lg"
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
                  <h3 className="text-[24px] text-[#FAFBFF] font-bold xl:mt-0 lg:m-[26px] text-left leading-[40px]">
                    Find a domain that will help your business stand out
                  </h3>

                  {/* Bottom Section - Domain Badge */}
                  <div className="absolute bottom-0 left-0 xl:w-full xxl:w-[65%] lg:w-[72%] md:w-[72%] xs-md:w-[74%]">
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
            <div className="flex flex-col lg:flex-row mt-[56px] xl:gap-0 lg:gap-[209px] lg:pl-[42px] lg:pr-[44px]  md:px-[3px] items-center justify-between bg-[#1E0E40] text-white p-11 rounded-[16px] xl:h-[509px] lg:h-[446px] md:h-[868px] xs-md:h-[848px]">
              <div className="lg:w-1/2 md:w-[86%] text-left">
                <span className="text-[14px] font-bold bg-[#2F1C6A] text-[#8C85FF] px-3 py-1 rounded-full">
                  PERFECT FOR BEGINNERS
                </span>
                <h2 className="xl:text-[33px] xxl:text-[33px] lg:text-[33px] md:text-[33px] xs:text-[24px] font-bold mt-[33px]">
                  Hostinger Website Builder
                </h2>
                <p className="text-[#FAFBFF] text-[16px] xl:w-[86%] xxl:w-[86%]  lg:w-[86%] md:w-[86%]  xs:w-[107%] font-semibold mt-[23px]">
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
                  className="xl:max-w-[103%] md:max-w-[101%]  xl:ml-[70px] lg:max-w-[175%] xs-md:max-w-[101%] sm:max-w-[111%] smx:max-w-[121%] xsm:max-w-[129%] xs:max-w-[137%] xxs:max-w-[146%] xsm:mb-[-44px] xxs:mb-[-44px] smx:mb-[-44px] xs:mb-[-44px] xl:mb-[0] xxl:mb-0 xxl:max-w-[147%] xxl:ml-[-67px] lg:mb-[0] xs-md:h-auto lg:h-auto lg:ml-[-126px] rounded-[16px] h-auto"
                />
              </div>
            </div>

            {/* WordPress AI Section */}
            <div className="flex flex-col lg:flex-row mt-[56px] xs-md:gap-[6rem] smx:gap-[6rem] xsm:gap-[5rem] xs:gap-[5rem] xxs:gap-[5rem] lg:gap-0 sm:gap-[6rem] items-center justify-between bg-[#F5F3FE] text-white p-11 rounded-[16px] xl:h-[470px] lg:h-[446px] md:h-[884px]">
              <div className="lg:w-[200%] xl:h-auto xl:w-[48%] xl:ml-0 xl:mt-0 xxl:w-[142%] xxl:ml-[-45px] lg:ml-[-43px] xxl:mt-[70px] xs-md:w-[117%] sm:w-[121%] smx:w-[121%] xsm:w-[129%] xs:w-[137%] xxs:w-[145%]  md:w-[116%] flex xl:justify-center mt-8 lg:mt-[68px]">
                <img
                  src="/images/CARD3.avif"
                  alt="Hosting Dashboard"
                  className="xl:w-[100%] xl:mt-[1px]  md:w-[100%] xs-md:mt-[-73px] sm:mt-[-76px] smx:mt-[-77px] xsm:mt-[-76px]  xs:mt-[-76px] xxs:mt-[-76px]  mr-[86px] md:mt-[-73px] h-auto rounded-[16px]"
                />
              </div>
              <div className="xl:w-1/2 md:w-[117%] xl:pl-[80px] md:pl-[50px] sm:pl-0 text-left">
                <span className="text-[13px] font-bold bg-blue-200 text-[#2F1C6A] px-3 py-1 rounded-full">
                  RECOMMENDED BY WORDPRESS.ORG
                </span>
                <h2 className="xl:text-[34px] xxl:text-[34px] lg:text-[34px] md:text-[34px] xs:text-[20px] text-[#2F1C6A] font-bold mt-4">
                  Create a WordPress site
                </h2>
                <p className="text-[#2F1C6A] text-[16px] mt-2">
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
                  <p className="text-[#2F1C6A] text-[16px] font-semibold mt-[10px]">
                    Find your niche on the web and start building your business
                    with worry-free web hosting.
                  </p>
                  <button className="mt-6 text-[#673DE6] font-semibold flex items-center gap-2">
                    Go live in minutes <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Right Div */}
              <div className="flex  flex-col items-center bg-[#F5F3FE] text-black rounded-lg w-full lg:w-1/2">
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
                  <p className="text-[#2F1C6A] text-[16px] font-semibold mt-[10px]">
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
                  <p className="text-[#2F1C6A] text-[16px] font-semibold mt-[10px]">
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
                  <p className="text-[#2F1C6A] text-[16px] font-semibold mt-[10px]">
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
            <div className="flex flex-col lg:flex-row mt-[56px] lg:pb-0 xl:pb-[41px] items-center justify-between bg-[#1E0E40] text-white p-11 rounded-[16px] xl:h-[467px] lg:h-[409px]  md:h-[844px] xs-md:h-[747px] sm:h-[669px] smx:h-[709px]">
              {/* Left Section */}
              <div className="lg:w-1/2 text-left">
                <span className="text-[14px] font-bold bg-[#2F1C6A] text-[#8C85FF] px-3 py-1 rounded-full">
                  FREE PRIVACY PROTECTION
                </span>
                <h2 className="text-[35px] font-bold mt-[33px]">Domains</h2>
                <p className="text-#FAFBFF] text-[16px] xl:w-[86%] xxl:w-[86%] lg:w-[86%] xsm:w-[100%] font-semibold mt-[23px]">
                  Boost your online visibility and give your business a good
                  name. Secure your space on the web.
                </p>
                <button className="mt-6 text-[#8C85FF] font-semibold rounded-full flex items-center gap-2">
                  Claim your domain
                  <ChevronRight />
                </button>
              </div>

              {/* Right Section - Image */}
              <div className="lg:w-[68%] md:w-[116%] flex justify-center mt-8 lg:mt-0">
                <img
                  src="/images/domaincard.png"
                  alt="Domain Dashboard"
                  className="xl:max-w-[81%] xl:mt-[-37px] xxl:mt-[-90px] lg:mt-[-36px] md:mt-[1px] xs-md:mt-[-63px] xsm:max-w-[100%] sm:mt-[-62px] smx:mt-[25px] xsm:max-w-[138%] smx:w-[100%] xs:mb-[-44px] xs:max-w-[137%] xxs:max-w-[145%] xsm:ml-[-23px] xsm:mb-[-44px] xxs:mb-[-44px] md:w-[88%] md:ml-[75px] xs-md:ml-[87px] smx:ml-[86px] sm:ml-[87px] lg:w-[89%]  xl:ml-[207px] lg:ml-[135px] h-auto rounded-[16px]"
                />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row mt-[56px] items-center text-black px-[4px] rounded-lg gap-[26px]">
              {/* Left Section - AI Website Builder (With Image Inside) */}
              <div className=" bg-[#F5F3FE] p-8 rounded-lg flex flex-col xl:flex-row xxl:flex-row lg:flex-row items-center">
                {/* Left Content */}
                <div className="xl:w-[96%] md:w-[96%] text-left p-4">
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
                <div className="lg:w-[100%] md:w-[100%] xs-md:w-[100%] sm:w-[100%] xsm:w-[120%] xxs:w-[129%] flex justify-center p-10">
                  <img
                    src="/images/domaincard2.avif"
                    alt="AI Website Builder"
                    className="w-[199%] h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Right Section - Domain Finder */}
              <div className="lg:w-[100%]">
                <div className="relative bg-[#8C85FF] text-white pt-[31px] pb-[190px] px-10 rounded-[20px] w-[100%] h-[384px] flex flex-col justify-between shadow-lg">
                  {/* Top Section - Icons */}
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-bold bg-[#D5DFFF] text-[#2F1C6A] px-3 py-1 rounded-full">
                      FAST AND EASY
                    </span>
                    <MoveUpRight className="text-white" size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] text-[#FAFBFF] font-bold xl:mt-8 xxl:mb-9 lg:mb-9 text-left leading-[40px]">
                    Transfer your existing domain to Hostinger in a few clicks
                  </h3>

                  {/* Bottom Section - Domain Badge */}
                  <div className="absolute bottom-0 w-[77%] xs:w-[100%] xxs:w-[100%] sm:w-[77%] xl:left-[97px] xxl:left-[97px] lg:left-[97px] md:left-[43px] xs-md:left-[84px] xs:left-[-31px] xxs:ml-[-40px]">
                    <img
                      src="/images/cardstyle.avif"
                      alt="Domain Icon"
                      className="rounded-bl-[20px] xl:w-[80%] xxl:w-[61%] xxl:ml-[29%] lg:w-[63%] md:w-[65%] xs-md:w-[80%] xsm:w-[100%]  xs:ml-[71px] sm:ml-[100px] xsm:ml-[72px] xl:ml-0 lg:ml-[218px]"
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
