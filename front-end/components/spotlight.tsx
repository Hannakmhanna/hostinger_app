import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

const API_URL = "http://127.0.0.1:8000/api/spotlight/";
const baseURL = "http://127.0.0.1:8000";

const Spotlight = () => {
  const [spotlightData, setSpotlightData] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // Fetch API Data
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data from API:", data);

        if (data.error) {
          console.error("API Error:", data.error);
          return;
        }

        setSpotlightData(data);

        if (!data.countdown) {
          console.error("Invalid countdown data, setting default.");
          setTimeLeft(86400); // Default: 1 day
          return;
        }

        const totalSeconds =
          parseInt(data.countdown.days) * 86400 +
          parseInt(data.countdown.hours) * 3600 +
          parseInt(data.countdown.minutes) * 60 +
          parseInt(data.countdown.seconds);

        console.log("Total Countdown Seconds:", totalSeconds);

        if (!isNaN(totalSeconds) && totalSeconds > 0) {
          setTimeLeft(totalSeconds);
        } else {
          console.error("Invalid countdown values detected, setting default.");
          setTimeLeft(86400); // Default: 1 day
        }
      })
      .catch((err) => console.error("Error fetching spotlight data:", err));
  }, []);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    console.log("⏳ Time Left:", timeLeft);

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev && prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => ({
    days: String(Math.floor(seconds / 86400)).padStart(2, "0"),
    hours: String(Math.floor((seconds % 86400) / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((seconds % 3600) / 60)).padStart(2, "0"),
    seconds: String(seconds % 60).padStart(2, "0"),
  });

  const countdown = timeLeft !== null ? formatTime(timeLeft) : { days: "00", hours: "00", minutes: "00", seconds: "00" };

  return (
    <div className="bg-white xl:pt-[12rem] smx:pt-[15rem] md:pt-[10rem] xsm:pt-[10rem] xs:pt-[10rem] xxs:pt-[7rem] pb-[4rem]">
      <div className="wrapper w-[84%] mx-auto flex xl:flex-row md:flex-col smx:flex-col xsm:flex-col xs:flex-col xxs:flex-col sm:flex-col lg:flex-row justify-between items-center">
        <div className="xl:max-w-lg md:max-w-[41rem]">
          <h2 className="text-[#673DE6] font-bold xl:text-[50px] md:text-[41px] smx:text-[35px] xsm:text-[32px] xs:text-[32px] xxs:text-[28px] xs-md:text-[35px] sm:text-[31px] leading-tight">
            {spotlightData?.subtitle || "Loading..."}
            <br />
            <span className="text-[#2F1C6A] smx:text-[28px] xs:text-[30px] md:text-[41px] font-bold xl:text-[46px] xs-md:text-[35px]  sm:text-[31px]">
              {spotlightData?.title || "Everything you need to grow online"}
            </span>
          </h2>

          <p className="text-[#2F1C6A] xl:text-[18px] lg:text-[16px] md:text-[18px] smx:text-[18px] xxs:text-[15px] xs:text-[17px] xs-md:text-[18px] sm:text-[18px] mt-4">
            Launch your website from{" "}
            <span className="text-[#2F1C6A] xl:text-[24px] lg:text-[24px] xs-md:text-[18px]  font-bold">
              {spotlightData?.price || "₹129.00"}
            </span>
            /mo
            <br />
            <span className="text-[#2F1C6A] xl:text-[18px] lg:text-[18px]  xs-md:text-[16px] font-bold">
              {spotlightData?.extra_info || "+ 3 extra months & free domain"}
            </span>
          </p>

          <div className="flex xl:flex-row xxl:flex-row lg:flex-row md:flex-row xs-md:flex-col sm:flex-col smx:flex-col xsm:flex-col xs:flex-col xxs:flex-col items-center gap-4 mt-6">
            <button className="bg-[#2F1C6A] lg:w-[158%] xl:w-[34%] xl:text-[18px] md:text-[16px] lg:text-[15px] sm:text-[18px] xs-md:text-[16px] smx:text-[18px] text-white xl:px-11 xxl:px-11 lg:px-11 md:px-11 xs-md:pl-[16rem] xs-md:pr-[17rem] sm:pl-[14rem] sm:pr-[14rem] smx:pl-[12rem] smx:pr-[13rem] xsm:pl-[10rem] xsm:pr-[8rem] xs:pl-[7rem] xs:pr-[7rem] xxs:pl-[6rem] xxs:pr-[6rem] py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
              Start now
            </button>
            <div
              className="bg-[#E2DBFC] xl:text-[18px]  xxl:text-[16px] lg:w-[205%] md:text-[16px]  lg:text-[13px] xl:w-[48%] text-[#2F1C6A] xs-md:w-[100%] md:w-[31%] xs-md:text-[16px] sm:text-[18px] xl:px-8 xxl:px-8 lg:px-8 md:px-8 xs-md:pl-[12rem] sm:pl-[11rem] sm:pr-[14rem] xs-md:pr-[15rem] smx:pl-[12rem] smx:pr-[10rem] xsm:pl-[7rem] xsm:pr-[8rem] xs:pl-[7rem] xs:pr-[4rem] smx:text-[18px] xxs:pl-[5rem] xxs:pr-[4rem] px-8 py-3 rounded-lg font-bold animate-fadeIn"
              style={{
                fontFamily: "",
                minWidth: "140px",
                textAlign: "center",
              }}
            >
               <p>{countdown.days} : {countdown.hours} : {countdown.minutes} : {countdown.seconds}</p>
           </div>
          </div>
          <p className="text-gray-500 mt-5 gap-1 text-sm flex items-center">
            <ShieldCheck className="w-7 h-[22px] text-[#2F1C6A]" />
            <span className="text-[#2F1C6A] xl:text-[18px] xs-md:text-[18px] md:text-[16px]  sm:text-[18px] smx:text-[18px] xsm:text-[18px] xs:text-[18px] xxs:text-[17px] lg:text-[19px] font-medium">
              30-day money-back guarantee
            </span>
          </p>
        </div>

        <div className="relative">
          {spotlightData?.image && (
            <img
              src={`${baseURL}${spotlightData.image}`}
              alt="Spotlight Sale"
              className="w-full xl:max-w-md md:max-w-[100%] rounded-lg"
            />
          )}
          <img
            src="/images/girl.png"
            alt="Overlay"
            className="absolute top-0 left-0 w-full max-w-md  xl:max-w-[520px] rounded-lg opacity-80"
            style={{ zIndex: 10, pointerEvents: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
