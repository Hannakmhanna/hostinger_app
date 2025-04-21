import React, { useRef } from "react";
import { Star } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    score: 4.7,
    reviews: 39063,
    image: "/images/logotrust.svg",
    starimage: "/images/stars-4.5.svg",
  },
  { score: 4.8, reviews: 1237, image: "/images/google.png" },
  { score: 4.6, reviews: 2432, image: "/images/logoadvice.png" },
  { score: 4.7, reviews: 874, image: "/images/hosting.png" },
];

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 bg-white text-center">
      <div className="wrapper w-[87%] mx-auto relative">
        <h2 className="xl:text-xl font-semibold xsm:text-[18px] xxs:text-[18px] xxs:w-[99%] text-gray-800 xsm:mb-[55px] xxs:mb-[23px] xl:mb-[110px]">
          <img
            src="/images/wwe.png"
            alt="Star Rating"
            className="xl:w-[3%] xs:w-[9%] md:w-[6%] mb-[-35px] xs-md:ml-[19%] md:ml-[135px] sm:ml-[15%] xs:mb-[-28px] smx:ml-[11%] xxs:w-[15%] xxs:mb-[-45px] lg:ml-[27%] xxl:ml-[31%] xl:ml-[34%]"
          />
          Recommended by{" "}
          <span className="text-blue-600 font-bold">WordPress.org</span>
        </h2>

        {/* Arrow Buttons - Hidden above 980px */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-white p-2 shadow-md  rounded-full block lg:hidden"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-[55%] -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full block lg:hidden"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-100 max-w-full above980:overflow-x-visible above980:max-w-none scroll-smooth"
        >
          <div className="flex flex-nowrap gap-[66px] xl:mt-6 xxl:mt-6 lg:mt-6 md:mt-6 xs-md:mt-6  xs:mt-[4.5rem] xsm:mt-6 xxs:mt-9 min-w-[981px] px-2">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col xl:w-[240px] xxl:w-[19%] xs-md:w-[29%] items-left mb-8 shrink-0"
              >
                <img
                  src={review.image}
                  alt={`Review ${index}`}
                  className="w-[124px]"
                />

                {review.starimage ? (
                  <img
                    src={review.starimage}
                    alt="Star Rating"
                    className="w-[65%] mt-2"
                  />
                ) : (
                  <div className="flex mt-2 space-x-3">
                    {Array.from({ length: 5 }).map((_, i) => {
                      let starColor =
                        i < Math.floor(review.score)
                          ? "text-green-500"
                          : "text-gray-300";

                      if (i === Math.floor(review.score)) {
                        starColor = "text-green-500";
                      }

                      return (
                        <Star
                          key={i}
                          size={24}
                          className={`${starColor}`}
                          fill={
                            i < Math.ceil(review.score)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      );
                    })}
                  </div>
                )}

                <p className="mt-1 text-gray-600 text-sm text-left">
                  Rating: <span className="font-semibold">{review.score}/5</span> (
                  {review.reviews.toLocaleString()} reviews)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
