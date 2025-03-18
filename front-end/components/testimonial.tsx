import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: "Shreyash Pandey",
    position: "Founder of Ethereal Corporate Network",
    image: "/images/man1.png",
    rating: 5,
    text: "Unlike the previous web hosts we’ve tried, Hostinger’s user experience was much less complicated. Its hPanel is easy to use, and the response time is fast. I don’t need to train my team members on how to navigate it because everyone can learn it by themselves.",
  },
  {
    name: "Pranay Jain",
    position: "Co-founder of Brandemic",
    image: "/images/man2.png",
    rating: 5,
    text: "I found out about Hostinger through an ad, and it’s been great since the first experience. I’ve now hosted over 150 websites on Hostinger and joined the affiliate program.",
  },
  {
    name: "Charlie Low",
    position: "Co-founder of Nohma",
    image: "/images/man3.png",
    rating: 5,
    text: "Ever since we’ve been with Hostinger, it’s been amazing. We've not really had any issues at all and if we ever do have a question, their customer service is incredible.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="wrapper w-[84%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-[600] text-[#2F1C6A] mb-10">
          Trusted by 3+ million website owners worldwide
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {testimonials.map((testimonial, index) => (
           <div
           key={index}
           className="bg-white shadow-lg rounded-xl border border-g-200 flex-1 max-w-[26rem] h-auto">
         
              <div className="flex items-center justify-start bg-[#F4F5FF] p-4 rounded-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-left text-[#2F1C6A] ml-4">
                  <h3 className="text-[20px] font-bold">{testimonial.name}</h3>
                  <p className="text-[16px]">{testimonial.position}</p>
                </div>
              </div>
              <div className="text-left  pb-[69px] p-6">
                <div className="flex mt-4 text-[#673DE6]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="mr-1" />
                  ))}
                </div>

                <p className="text-[#2F1C6A] mt-4 text-[16px] leading-[30px]">{testimonial.text}</p>
                <div className=' pt-[82px]'>
                <a href="#" className="text-[#673DE6] font-semibold mt-4">
                  Read the full story
                </a>
                </div>
              </div>
            </div>
             
          ))}
        </div>
        <button className="mt-6 text-[#673DE6] text-[14px] border-2 border-[#673DE6] px-10 py-3 rounded-lg font-bold">
             Read more stories
            </button>
      </div>
    </section>
  );
};

export default Testimonials;
