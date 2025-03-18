import React from "react";

export default function Dashboard() {
  return (
    <section className="bg-[#F4F3FF] flex items-center">
      <div className="wrapper w-[90%] flex flex-row">
        {/* Left Side (Dashboard Preview) */}
        <div className="wrapper w-[75%]">
          <div className="w-[100%] bg-[#8C85FF] flex items-center pl-[0] pt-[17px] pb-[27px] p-0">
            <img
              src="/images/content.avif"
              alt="Dashboard Preview"
              className="w-full h-auto object-cover" // Use w-full here for full width
            />
          </div>
        </div>

        {/* Right Side (Content) */}
        <div className="w-1/2 p-10 pl-[86px] pt-[140px]">
          <span className="bg-[#D5DFFF] text-[#2F1C6A] px-4 py-2 rounded-full text-[12px] font-[700]">
            EASY TO USE DASHBOARD
          </span>
          <h2 className="text-[36px] font-bold text-[#2F1C6A] mt-4 leading-tight">
            See everything. <br /> Control everything.
          </h2>
          <p className="text-[14px] w-[87%] mt-4 text-[#2F1C6A] leading-relaxed">
            Keep an eye on everything that’s important to you, with our easy to
            use dashboard.<br></br> Designed to be easy-to-use for beginners and
            professionals alike, you can see at a glance how your site is
            performing and make adjustments, among other things
          </p>
        </div>
      </div>
    </section>
  );
}
