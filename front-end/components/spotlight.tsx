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
    <div className="bg-white pt-[12rem] pb-[4rem]">
      <div className="wrapper w-[84%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-lg">
          <h2 className="text-[#673DE6] font-bold text-[50px] leading-tight">
            {spotlightData?.subtitle || "Loading..."}
            <br />
            <span className="text-[#2F1C6A] font-bold text-[46px]">
              {spotlightData?.title || "Everything you need to grow online"}
            </span>
          </h2>

          <p className="text-[#2F1C6A] mt-4">
            Launch your website from{" "}
            <span className="text-[#2F1C6A] text-[24px] font-bold">
              {spotlightData?.price || "₹129.00"}
            </span>
            /mo
            <br />
            <span className="text-[#2F1C6A] text-[18px] font-bold">
              {spotlightData?.extra_info || "+ 3 extra months & free domain"}
            </span>
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-[#2F1C6A] text-white px-11 py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
              Start now
            </button>
            <div
              className="bg-[#E2DBFC] text-[18px] text-[#2F1C6A] px-8 py-3 rounded-lg font-bold animate-fadeIn"
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
            <span className="text-[#2F1C6A] text-[18px] font-medium">
              30-day money-back guarantee
            </span>
          </p>
        </div>

        <div className="relative">
          {spotlightData?.image && (
            <img
              src={`${baseURL}${spotlightData.image}`}
              alt="Spotlight Sale"
              className="w-full max-w-md rounded-lg"
            />
          )}
          <img
            src="/images/girl.png"
            alt="Overlay"
            className="absolute top-0 left-0 w-full max-w-md rounded-lg opacity-80"
            style={{ zIndex: 10, pointerEvents: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
