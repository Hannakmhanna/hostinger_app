import React from "react";
import { Star } from "lucide-react";

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
  return (
    <section className="py-10 bg-white text-center">
       <div className="wrapper w-[96%] mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-[110px]">
    <img src="/images/wwe.png" alt="Star Rating" className="w-[3%] mb-[-35px] ml-[31.5rem]" />
    Recommended by{" "}
    <span className="text-blue-600 font-bold">WordPress.org</span>
  </h2>


      <div className="flex flex-wrap justify-center gap-[66px] mt-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col  w-[16%] items-left mb-8">
            <img
              src={review.image}
              alt={`Review ${index}`}
              className="w-[124px]"
            />

            {/* First review uses an image for stars */}
            {review.starimage ? (
              <img
                src={review.starimage}
                alt="Star Rating"
                className="w-[65%] mt-2"
              />
            ) : (
              /* Next three reviews use Lucide React Star icons */
              <div className="flex mt-2 space-x-3">
                {" "}
                {/* Added spacing between stars */}
                {Array.from({ length: 5 }).map((_, i) => {
                  let starColor =
                    i < Math.floor(review.score)
                      ? "text-green-500"
                      : "text-gray-300";

                  // Last star should be green
                  if (i === Math.floor(review.score)) {
                    starColor = "text-green-500";
                  }

                  return (
                    <Star
                      key={i}
                      size={24}
                      className={`${starColor}`}
                      fill={
                        i < Math.ceil(review.score) ? "currentColor" : "none"
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
    </section>
  );
};

export default Reviews;
