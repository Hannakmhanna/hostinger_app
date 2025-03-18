
import { Check } from 'lucide-react';
const HelpService = () => {
  return (
    <section className="py-16 bg-white">
       <div className="wrapper w-[90%] mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-[36px] md:text-4xl font-[600] text-[#2F1C6A] mb-4">
            Here to help 24/7
          </h2>
          <div className='flex'>
          <Check className="inline-block mr-2 mt-1 text-[#009F47]" size={15} />
          <div className='mb-[20px]'>
          <p className="text-[#2F1C6A] font-[400] text-[14px] w-[86%] mb-3">
            Access expert support whenever you need it via live chat and email.
          </p>
          </div>
          </div>
          <div className='flex'>
          <Check className="inline-block mr-2 mt-1 text-[#009F47]" size={15} />
          <div className='mb-[20px]'>
          <p className="text-[#2F1C6A] font-[400] text-[14px] w-[72%] mb-3">
            Our specialists are fluent in 10+ languages, so you can be sure
            communication will be smooth.
          </p>
          </div>
          </div>
          <div className='flex'>
          <Check className="inline-block mr-2 mt-1 text-[#009F47]" size={15} />
          <div className='mb-[20px]'>
          <p className="text-[#2F1C6A] font-[400] text-[14px]">
            Spend less time waiting—our speedy support team typically responds
            in under 2 minutes.
          </p>
          </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/images/hepl.avif"
            alt="Help Service"
            className="w-full"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HelpService;
