
import { Check } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-[#1F1346] text-white py-16 px-6 text-center">
       <div className="wrapper w-[90%] mx-auto">
      <div className="max-w-[79rem] h-auto mx-auto">
        {/* Heading */}
        <h2 className="text-[36px] text-[#FFFFFF] font-bold">
          Speed. Reliability. Efficiency.
        </h2>
        <p className="text-[#FFFFFF] mt-3 text-[18px]">
          Enjoy top-notch performance you can rely on and give your website
          visitors a smooth experience.
        </p>

        {/* Feature Boxes */}
        <div className="mt-10 flex flex-col md:flex-row gap-6">
          {/* Feature 1 */}

          <div className=" p-6 bg-[#2F1C6A] text-left rounded-2xl flex-1 shadow-lg">
          <img
              src="/images/globee.png"
              alt="3 simple steps"
              className="w-[15%] h-auto"
            />
            <h3 className="mt-4 font-bold  text-[#FFFFFF] text-[18px]">
              Local data centers. <br /> Around the world.
            </h3>
            <p className=" text-[#FFFFFF] text-[18px] mt-6">
              Wherever you are in the world, your site will automatically
              connect to the closest data center in our global network. Extra
              efficiency at no extra cost.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#2F1C6A] p-6 text-left rounded-2xl flex-1 shadow-lg">
          <img
              src="/images/speed.png"
              alt="3 simple steps"
              className="w-[15%] h-auto"
            />

            <h3 className="mt-4 font-bold  text-[#FFFFFF] text-[18px]">
              Full speed ahead. <br /> Whatever the traffic.
            </h3>
            <p className=" text-[#FFFFFF] text-[18px] mt-6">
              Benefit from lower response times and rapid page-loading speeds,
              no matter how high your site traffic spikes.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#2F1C6A] p-6 rounded-2xl text-left flex-1 shadow-lg">
          <img
              src="/images/arroww.png"
              alt="3 simple steps"
              className="w-[15%] h-auto"
            />
            <h3 className="mt-4 font-bold text-[#FFFFFF] text-[18px]">
              Live and kicking. <br /> 24/7.
            </h3>
            <p className=" text-[#FFFFFF] text-[18px] mt-6">
              Day and night your site is working hard. Our 99.9% uptime
              guarantee means your website is always available.
            </p>
          </div>
        </div>

        {/* Total Security Section */}
        <div className="mt-16 flex flex-col md:flex-row  text-left">
          {/* Left Side (Image) */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/sslcertificate.avif"
              alt="Security Preview"
              className=""
            />
          </div>
 
          {/* Right Side (Content) */}
          <div className="w-full md:w-1/2 p-8 pl-[108px]">
            <h2 className="text-[36px] leading-tight w-[114%] font-bold">
           Total Security.Complete<br></br> Confidence.
            </h2>
            <div className="text-[#FFFFFF] flex mt-7 text-[15px]">
            <Check className="inline-block mr-2 mt-1 text-[#009F47] " size={15} />
            <div className='mb-[20px]'>
             <span className="leading-relaxed"> Secure your files with regular automatic backups and two-factor
              authentication.</span>
            </div>
            </div>
            <div className="text-[#FFFFFF] flex mt-2 text-[15px]">
            <Check className="inline-block mr-2 mt-1 text-[#009F47]" size={15} />
            <div className='mb-[20px]'>
              <span className='leading-relaxed '> Encrypt your website traffic with unlimited SSL security
              certificates.</span>
            </div>
            </div>
            <div className="text-[#FFFFFF] mt-2 flex text-[15px]">
            <Check className="inline-block mr-2 mt-1 text-[#009F47]" size={15} />
            <div className='mb-[20px]'>
              <span className='leading-relaxed'> Enjoy full protection from DDoS attacks with Cloudflare-protected
              nameservers.</span>
            </div>
             
            </div>
            <button className="mt-6 bg-[#FC5185] hover:bg-purple-700 text-white px-20 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
