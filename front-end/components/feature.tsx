
import { Check } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-[#1F1346] text-white py-16 px-6  xxs:pl-[1px] xxs:pr-[0] text-center">
       <div className="wrapper w-[90%] mx-auto">
      <div className="max-w-[79rem] h-auto mx-auto">
        {/* Heading */}
        <h2 className="xl:text-[36px] xxl:text-[36px] lg:text-[36px] md:text-[36px] xs-md:text-[28px] sm:text-[28px] smx:text-[28px] xsm:text-[26px] xs:text-[28px] text-[#FFFFFF] font-bold">
          Speed. Reliability. Efficiency.
        </h2>
        <p className="text-[#FFFFFF] mt-3 xl:text-[18px] xxl:text-[18px] lg:text-[18px] md:text-[18px] xs-md:text-[16px]">
          Enjoy top-notch performance you can rely on and give your website
          visitors a smooth experience.
        </p>

        {/* Feature Boxes */}
        <div className="mt-10 flex  flex-col xl:flex-row  gap-6">
          {/* Feature 1 */}

          <div className=" p-6 bg-[#2F1C6A] text-left rounded-2xl flex-1 shadow-lg">
          <img
              src="/images/globee.png"
              alt="3 simple steps"
              className="xl:w-[15%] lg:w-[7%] md:w-[7%] xs-md:w-[10%] sm:w-[10%] smx:w-[10%]  xs:w-[20%]  xs:h-auto xxs:w-[20%] xxs:h-auto smx:h-auto xsm:w-[17%] xsm:h-auto sm:h-auto xs-md:h-auto  md:h-auto xl:h-auto lg:h-auto"
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
              className="xl:w-[15%] lg:w-[7%] xl:h-auto lg:h-auto xs-md:w-[10%] sm:w-[10%] sm:h-auto  xs:w-[20%] xs:h-auto xxs:w-[20%] xxs:h-auto  smx:w-[10%] smx:h-auto xsm:w-[17%] xsm:h-auto xs:w-[23%] xs:h-auto xs-md:h-auto md:w-[7%] md:h-auto"
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
              className="xl:w-[15%] lg:w-[7%] xl:h-auto xs-md:w-[10%] sm:w-[10%] sm:h-auto smx:w-[10%]  xs:w-[20%] xs:h-auto xxs:w-[20%] xxs:h-auto  smx:h-auto xsm:w-[17%] xsm:h-auto xs:w-[23%] xs:h-auto xs-md:h-auto lg:h-auto md:w-[7%] md:h-auto"
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
        <div className="mt-16 flex flex-col md:flex-col-reverse xs-md:flex-col-reverse sm:flex-col-reverse xl:flex-row text-left">
          {/* Left Side (Image) */}
          <div className="xl:w-full md:w-[100%]">
            <img
              src="/images/sslcertificate.avif"
              alt="Security Preview"
              className=""
            />
          </div>
 
          {/* Right Side (Content) */}
          <div className="w-full md:w-[100%] p-8 xl:pl-[108px] md:pl-0">
            <h2 className="xl:text-[36px] leading-tight  xl:w-[95%]  lg:w-[87%] xs:text-[18px] xxs:text-[24px] font-bold">
           Total Security.Complete Confidence.
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
            <button className="mt-6 bg-[#FC5185] hover:bg-purple-700 text-white px-20 py-3 text-[16px] xl:w-[50%] xxl:w-[50%]  lg:w-[50%] md:w-[50%] xs-md:w-[50%] sm:w-[50%] smx:w-[50%] xsm:w-[50%]  xxs:w-[109%] rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
