"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Aside from "./aside";
import { Search, CircleX, ChevronDown } from "lucide-react";
import Maincontent from "@/components/domain-name";

export default function Dashboard() {
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");
  const [searchResult, setSearchResult] = useState<{
    available: boolean;
    domain: string;
    ai_suggestions: {
      domain: string;
      price: string;
      cutoff_price: string;
      discount: string;
    }[];
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

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
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      router.replace("/login");
    } else {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        router.replace("/login");
      }
    }

    setIsCheckingAuth(false);
  }, []);

  if (isCheckingAuth) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      {/* Sidebar + Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <Aside />

        {/* Main Content */}
        {!isSearching ? (
          <main className="flex-1 overflow-y-auto h-screen p-8 lg:pl-[30px] lg:pr-[30px] xs:pl-[18px] xs:pr-[18px] xxs:pl-[12px] xxs:pr-[12px] py-[5.5rem]  pt-[48px]">
            {user ? (
              <>
                <h1 className="text-[18px] font-bold">Hello, {user.name}!</h1>
              </>
            ) : (
              <p>Loading user data...</p>
            )}

            {/* Website Builder Section */}
            <section className="bg-white pt-6 px-8  pb-8 rounded-lg border border-[#d8dae0] mt-4">
              <div className="">
                <div className="flex justify-between items-center">
                  <img
                    src="/images/dasboard.png"
                    alt="Website Builder"
                    className="w-[42%] xl:block xxl:block lg:block md:hidden xs-md:hidden sm:hidden smx:hidden xsm:hidden xs:hidden xxs:hidden"
                  />
                  <div className="xl:w-[43%] xxl:w-[43%] lg:w-[43%] md:w-[100%] xs-md:w-[100%] sm:w-[100%] xs:w-[100%] xxs:w-[100%] text-center">
                    <h2 className="xl:text-[20px] xxl:text-[20px] lg:text-[20px] md:text-[20px] xs-md:text-[20px] sm:text-[20px] xxs:text-[18px] font-[700] xl:leading-[57px] xxl:leading-[57px] lg:leading-[57px] md:leading-[57px] xs-md:leading-[57px] sm:leading-[57px] xs:leading-[28px] ">
                      Website Builder & Web Hosting
                    </h2>
                    <p className="text-[#6d7081] xl:text-[16px] xxl:text-[16px] lg:text-[14px] md:text-[14px] xs:text-[14px] font-[400] leading-[24px]">
                      Get your Web Hosting plan and build your website quickly
                    </p>
                    <div className="mt-[1.5rem]">
                      <span className="line-through text-[14px] text-[#6D7081]">
                        $11.99
                      </span>
                      <span className="text-[14px] leading-4 font-bold rounded-[8px]  px-3 py-2 inline-block bg-[#ffe8ef] text-[#d63163] ml-2">
                        SAVE 75%
                      </span>
                    </div>

                    <p className=" mt-1">
                      <span className="xl:text-[40px] xxl:text-[40px] lg:text-[40px] md:text-[49px] xs-md:text-[46px] sm:text-[45px] smx:text-[42px] xsm:text-[25px] xs:text-[28px] xxs:text-[28px] font-bold">
                        $2.99
                      </span>
                      <span className="xl:text-[14px] xxl:text-[14px] lg:text-[14px] md:text-[25px] xs-md:text-[25px]  sm:text-[24px] smx:text-[22px] xsm:text-[22px] xs:text-[21px] xxs:text-[22px] text-[#000000] font-bold ">
                        /mo
                      </span>
                    </p>
                    <button className="bg-[#673DE6] text-white font-bold text-[16px] xl:w-[95%] lg:w-[102%] md:w-[100%] xs-md:w-[100%] sm:w-[100%] smx:w-[100%] xsm:w-[103%] pl-[7.5rem] pr-[9.5rem] xsm:pl-[5.5rem] xsm:pr-[7.5rem] xs:pl-[4rem] xs:pr-[4rem] xxs:pl-[4rem] xxs:pr-[4rem] py-2 leading-6 mt-3 rounded-[8px]">
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
              <h2 className="text-[20px] xl:text-left xxl:text-left lg:text-left md:text-center  xs-md:text-center sm:text-center smx:text-center xsm:text-center xs:text-center xxs:text-center font-bold text-[#1D1E20]">
                Start with a domain name
              </h2>
              <p className="text-[#262831] font-[400] xl:text-left xxl:text-left lg:text-left sm:text-center smx:text-center xsm:text-center xs:text-center xxs:text-center m-0 xl:leading-[47px] xxl:leading-[47px] lg:leading-[47px] md:leading-[47px] xs-md:leading-[47px] sm:leading-[23px] xl:text-[16px] xxl:text-[16px] lg:text-[16px] md:text-[14px] xs-md:text-[14px] sm:text-[14px] xsm:text-[14px">
                Find the perfect domain name with our search tool. Type your
                idea and see what's available instantly.
              </p>
              <div className="flex xl:flex-row xxl:flex-row lg:flex-row md:flex-col xs-md:flex-col sm:flex-col smx:flex-col xsm:flex-col xs:flex-col xxs:flex-col space-y-4 items-center mt-3 text-[14px] text-[#6D7081] relative xl:space-x-4 xxl:space-x-4 lg:space-x-4 md:space-x-0">
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
                  className="bg-[#673DE6] text-white font-bold xl:w-[14%] xxl:w-[14%] lg:w-[14%] md:w-[100%] xs-md:w-[100%] sm:w-[100%] smx:w-[100%] xsm:w-[100%] xs:w-[100%] xxs:w-[100%] px-6 py-3 rounded-[8px]"
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
          <Maincontent
            domain={domain}
            setDomain={setDomain}
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            setIsSearching={setIsSearching}
          />
        )}
      </div>
    </div>
  );
}
