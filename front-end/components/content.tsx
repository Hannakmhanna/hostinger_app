import React from "react";

export default function Dashboard() {
  return (
    <section className="bg-[#F4F3FF] flex items-center">
      <div className="wrapper w-[90%] flex xl:flex-row lg:flex-col-reverse md:flex-col-reverse xs-md:flex-col-reverse sm:flex-col-reverse smx:flex-col-reverse xsm:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse">
        {/* Left Side (Dashboard Preview) */}
        <div className="wrapper w-[75%]">
          <div className="xl:w-[100%] xxl:w-[148%] lg:w-[148%]  md:w-[146%] xs-md:w-[148%] sm:w-[148%] smx:w-[148%] xsm:w-[148%] xs:w-[148%] bg-[#8C85FF] flex items-center pl-[0] pt-[17px] pb-[27px] p-0">
            <img
              src="/images/content.avif"
              alt="Dashboard Preview"
              className="w-full h-auto object-cover" // Use w-full here for full width
            />
          </div>
        </div>

        {/* Right Side (Content) */}
        <div className="xl:w-1/2 xxl:w-[100%] md:w-[110%] sm:w-[107%] smx:w-[100%] xsm:w-[100%] xs:w-[101%] p-10 xl:pl-[86px] lg:pl-[22px] xl:pt-[140px] xs-md:pt-[41px]">
          <span className="bg-[#D5DFFF] text-[#2F1C6A] px-4 py-2 rounded-full xl:text-[12px] xxl:text-[14px] xs-md:text-[14px] font-[700]">
            EASY TO USE DASHBOARD
          </span>
          <h2 className="xl:text-[36px] xxl:text-[29px] lg:text-[30px] md:text-[32px] xs-md:text-[29px] smx:text-[24px] xsm:text-[22px] xs:text-[22px] font-bold text-[#2F1C6A] mt-4 leading-tight">
            See everything. Control everything.
          </h2>
          <p className="xl:text-[14px] xxl:text-[16px] w-[87%] lg:w-[94%] md:w-[96%] xs-md:w-[107%] sm:w-[100%] smx:w-[107%] xsm:w-[96%] xs:w-[107%] mt-4 text-[#2F1C6A] leading-relaxed">
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
