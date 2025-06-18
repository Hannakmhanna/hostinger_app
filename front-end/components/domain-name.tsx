"use client";
import React, { useState, useEffect } from "react";
import { Search, CircleX, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import DomainModal from "@/components/DomainModal";

type SearchResultType = {
  available: boolean;
  domain: string;
  ai_suggestions: {
    domain: string;
    price: string;
    cutoff_price: string;
    discount: string;
  }[];
};

type MaincontentProps = {
  domain: string;
  setDomain: React.Dispatch<React.SetStateAction<string>>;
  searchResult: SearchResultType | null;
  setSearchResult: React.Dispatch<
    React.SetStateAction<SearchResultType | null>
  >;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
};

const Maincontent = ({
  domain,
  setDomain,
  searchResult,
  setSearchResult,
  setIsSearching,
}: MaincontentProps) => {
  const [error, setError] = React.useState("");
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleDomainClick = (selectedDomain: string) => {
    setDomain((prev) => prev.split(".")[0] + selectedDomain);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<{ domain: string; price: string; cutoff_price: string;} | null>(null);
  const handleBuyClick = (suggestion: any) => {
    setSelectedSuggestion({
      domain: suggestion.domain,
      price: suggestion.price,
      cutoff_price: suggestion.cutoff_price,
    });
    setIsModalOpen(true);
  };

  const handleSearch = async () => {
    if (domain.length < 3) {
      setError("Domain name must be at least 3 characters long");
      return;
    }

    setError("");
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
        localStorage.removeItem("user"); 
      }
    }
  }, []);

  return (
    <>
      <section className="flex-1 overflow-y-auto h-screen p-[5.5rem] xxs:pl-[35px] xxs:pr-[35px]  w-full mx-auto">
        {/* Header Section */}
        <h2 className="text-[24px] leading-[52px] text-[#3b3d4a] font-[700] text-center">
          Get a New Domain
        </h2>
        {/* Tab Buttons */}
        <div className="flex xl:flex-row xxl:flex-row  lg:flex-row  md:flex-row  xs-md:flex-row sm:flex-row smx:flex-row  xsm:flex-col xs:flex-col xxs:flex-col xl:space-y-1 xxl:space-y-1 lg:space-y-1 md:space-y-1 xs-md:space-y-1 sm:space-y-1 smx:space-y-1 xsm:space-y-2 xs:space-y-2 xxs:space-y-2 items-center justify-center mt-4">
          <button className="flex items-center  rounded-full font-bold shadow-md p-0 h-[50px]">
            <span className="bg-[#673DE6] text-[14px] text-white xl:px-7 xxl:px-7 lg:px-7 md:px-7 xs-md:px-7 sm:px-7 smx:px-7 xsm:px-7 xl:mr-[-102px] xxl:mr-[-102px] lg:mr-[-102px] md:mr-[-102px] xs-md:mr-[-102px] sm:mr-[-102px] smx:mr-[-102px] xsm:mr-0 xs:mr-0 xsm:pl-[6.75rem] xsm:pr-[7.5rem] xs:pl-[6.5rem] xs:pr-[4.5rem] xxs:pl-[2.5rem] xxs:pr-[5.5rem] pt-[13px] pb-[15px] rounded-full">
              Find new domain
            </span>
          </button>
          <button>
            <span className="text-[#6D7081] border border-[#673DE6] rounded-full text-[14px] xl:pl-[6.75rem] xxl:pl-[6.75rem] lg:pl-[6.75rem] md:pl-[6.75rem] xs-md:pl-[6.75rem] sm:pl-[6.75rem] smx:pl-[6.75rem] xsm:pl-[6.75rem] xs:pl-[2.75rem] pr-[1.5rem] py-2 flex items-center gap-2">
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
          Type your desired domain name into the domain checker search bar and
          find out if it's available instantly!
        </p>

        {/* Search Box */}
        <div className=" flex-col items-center w-full mt-4">
          {/* Description */}

          <div className=" xl:flex-row xxl:flex-row  lg:flex-row  md:flex-row  xs-md:flex-row sm:flex-row smx:flex-row xsm:flex-col xs:flex-col xxs:flex-col xsm:space-y-2 xs:space-y-2 xxs:space-y-2 flex items-center max-w-[981px] space-x-5">
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
                } rounded-md pt-[18px] pb-[10px] xl:px-4 xxl:px-4  lg:px-4 md:px-4 xs-md:px-4 sm:px-4 smx:px-4 xsm:pl-[1rem] xsm:pr-[8rem] xs:pl-[1rem] xs:pr-[8rem] xxs:pl-[1rem] xxs:pr-[8rem] w-full focus:outline-none focus:ring-1`}
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
              className="bg-[#673DE6] text-white xl:px-[29px] xxl:px-[29px] lg:px-[29px] md:px-[29px] xs-md:px-[29px] sm:px-[29px] smx:px-[29px] xsm:pl-[132px] xsm:pr-[150px] xs:pl-[6.5rem] xs:pr-[8rem] xxs:pl-[7.5rem] xxs:pr-[5rem]  py-[12px] rounded-md hover:bg-purple-700 transition disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-[#fc5185] text-sm mt-2">{error}</p>}

          {/* Domain Prices */}
          <div className="flex justify-center  items-center xl:gap-[54px] xxl:gap-[54px] lg:gap-[54px] md:gap-[33px] xs-md:gap-[28px] sm:gap-[19px] smx:gap-[16px] mt-10 text-[#673DE6] xl:flex-nowrap xxl:flex-nowrap lg:flex-nowrap md:flex-nowrap xs-md:flex-nowrap sm:flex-nowrap smx:flex-nowrap xsm:flex-wrap xs:flex-wrap xxs:flex-wrap text-[16px]">
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
                  className="w-[100%] xsm:w-[32%] xs:w-[49%] xxs:w-[49%] space-y-1 hover:text-[#572DD6] transition-all"
                  onClick={() => handleDomainClick(domain.name)}
                >
                  <span className="text-[24px] font-bold">{domain.name}</span>
                  <p className="text-[#6D7081] text-[16px]">{domain.price}</p>
                </button>
                {index < 5 && (
                  <div className="xl:block xxl:block lg:block md:block xs-md:block sm:block smx:block xsm:hidden xs:hidden xxs:hidden h-12 w-[1px] bg-[#D3D3D3]"></div>
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
                    className="py-6 border-b border-gray-200 w-[102%] px-9 flex xl:flex-row xxl:flex-row lg:flex-row md:flex-row xs-md:flex-row sm:flex-row smx:flex-col xsm:flex-row xs:flex-col xxs:flex-col justify-between items-center smx:items-start"
                  >
                    {/* Left Side: Domain Name */}
                    <span className="text-[#2e1c85] font-medium text-base">
                      {suggestion.domain}
                    </span>

                    {/* Right Side: Price & Button */}
                    <div className="flex items-center xl:flex-row xxl:flex-row lg:flex-row md:flex-row xs-md:flex-row sm:flex-row xsm:flex-col xs:flex-col xxs:flex-col gap-[42px] smx:items-left space-x-3">
                      <span className="bg-[#8C85FF] text-[#FFFFFF] mr-[-42px] px-3 py-1 rounded-[8px] text-xs font-semibold">
                        Save {suggestion.discount}
                      </span>
                      <div className="flex flex-col">
                        <span className="line-through text-[#6D7081] text-[14PX]">
                           {suggestion.cutoff_price}
                        </span>
                        <span className="text-[#2F1C6A] font-bold text-[24px]">
                          {suggestion.price}
                          <span className="text-[14px] text-[#2F1C6A]">
                            {" "}
                            /1st yr
                          </span>
                        </span>
                      </div>

                      <button
                        onClick={() => handleBuyClick(suggestion)}
                        className="border border-[#d8dae0] text-[#673DE6] text-sm px-5 py-3 rounded-lg font-medium"
                      >
                        Buy domain
                      </button>
                      {isModalOpen && selectedSuggestion && (
                        <DomainModal
                          domain={selectedSuggestion.domain}
                          price={selectedSuggestion.price}
                          cutoffPrice={selectedSuggestion.cutoff_price}
                          isOpen={isModalOpen}
                          onClose={() => setIsModalOpen(false)}
                        />
                      )}
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
    </>
  );
};
export default Maincontent;
