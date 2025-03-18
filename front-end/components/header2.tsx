import React from "react";
import "../app/globals.css";
import Image from "next/image";
const Header2Page = () => {
  return (
    <div className="bg-[#8C85FF] text-white text-center py-5 fixed top-[80px] left-0 w-full z-20 overflow-hidden">
      <Image
        src="/images/sales.png"
        alt="Sales Background"
        fill // ✅ Correct way to make it full width/height
        style={{ objectFit: "cover" }} // ✅ Apply objectFit correctly
        className="opacity-70 absolute top-0 left-0 w-full h-full"
      />

      {/* Shimmering Gradient Background */}
      <div className="shimmer-effect absolute inset-0 z-10"></div>
      {/* Foreground Content */}
      <div className="relative z-10 pt-[13px]">
        <span className="mr-4 font-bold text-sm">GIANT HOSTINGER SALE</span>
        <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-500 transition font-bold text-sm">
          Grab deal
        </button>
      </div>
    </div>
  );
};

export default Header2Page;
