"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function SlideSection() {
  const testimonials = [
    {
      image: "/images/slide1.avif",
      quote: `Building our website with Hostinger Website Builder was <span class="text-[#673DE6] font-[400]">user-friendly</span> and as easy as getting ready to play cricket.`,
      author: "Renuka Prasad",
      website: "lithuaniacricket.com",
    },

    {
      image: "/images/slide3.avif",
      quote: "Migrating to Hostinger was the best decision I ever made.",
      author: "Gabrielle Scarlett",
      website: "gabriellescarlett.com",
    },
    {
      image: "/images/slide2.png",
      quote:
        "We honestly reference Hostinger as the benchmark for our engineers when providing support.",
      story: "Read the full story",
      author: "Charlie Low and Dale Comely",
      website: "nohma.com",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="text-white py-16 px-6 text-center">
      <div className="wrapper w-[84%] mx-auto">
        <div className="flex flex-col items-center mt-10">
          <div className="relative pl-[0] rounded-lg text-left flex items-center gap-6">
            {/* Image Section */}
            <div className="relative rounded-lg">
              <img
                src={testimonials[currentIndex].image}
                alt="Testimonial"
                className={`rounded-lg ${
                  currentIndex === 1 ? "w-[500px] h-auto" : "w-[990px] h-auto"
                } object-cover`}
              />
              <div
                className="absolute top-[51%] left-[46%] transform -translate-x-1/2 -translate-y-1/2 bg-neutral-300 bg-opacity-50 rounded-full"
                style={{ padding: "15px 18px 19px 23px" }}
              >
                <a
                  href={
                    currentIndex === 1
                      ? "https://youtu.be/z56unf2kMIM?si=9TX85pMRfBVrThaA" // Link for second slide
                      : currentIndex === 2
                      ? "https://youtu.be/W8EhA8zOCj8?si=e0HUHOhXJ6KICfBT" // Link for last slide
                      : "https://youtu.be/vVULKlixuq0?si=7y8OEwmziUABnLP2" // Default link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-white text-[25px]"
                  />
                </a>
              </div>
            </div>

            {/* Testimonial Text Section */}
            <div className="mb-[50px]">
              <img
                src="/images/Screenshot (280).png"
                alt="quote"
                className="w-[8%] h-auto rounded-[6px]"
              />
              <blockquote
                className={`text-[#2F1C6A] font-[480] leading-tight text-[38px] ${
                  currentIndex === 2 ? "mb-6" : ""
                }`}
                dangerouslySetInnerHTML={{
                  __html: testimonials[currentIndex].quote,
                }}
              />
              {testimonials[currentIndex].story && (
                <a
                  href={
                    currentIndex === 2
                      ? "https://www.hostinger.com/blog/climbingvan" // Link for the third slide
                      : "#" // Default link (if needed)
                  }
                  className="text-[#673DE6] font-semibold mt-2 inline-block"
                >
                  {testimonials[currentIndex].story}
                </a>
              )}

              <hr className="border-t border-grey mt-4 w-full" />

              <p className="mt-5 text-[#2F1C6A] font-bold">
                {testimonials[currentIndex].author}
              </p>

              <p className="text-[#2F1C6A]">
                {testimonials[currentIndex].website}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className={`absolute transform -translate-y-1/2 bg-[#F4F5FF] p-2 rounded-full ${
                testimonials[currentIndex].image === "/images/slide2.png"
                  ? "top-[71%]"
                  : "top-[73%]"
              }`}
              style={{ left: "68rem" }}
            >
              <ChevronLeft size={24} className="text-[#673DE6]" />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-4 transform -translate-y-1/2 bg-[#F4F5FF] p-2 rounded-full ${
                testimonials[currentIndex].image === "/images/slide2.png"
                  ? "top-[71%]"
                  : "top-[73%]"
              }`}
            >
              <ChevronRight size={24} className="text-[#673DE6]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
