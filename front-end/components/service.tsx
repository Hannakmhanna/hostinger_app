export default function MigrationSection() {
  return (
    <section className="bg-[#1F1346] text-white py-16 px-6 xxs:pl-[1px] xxs:pr-[0] text-center">
      <div className="wrapper w-[84%] mx-auto">
        <h2 className="xl:text-[36px] xxl:text-[36px] lg:text-[36px] md:text-[35px] xs-md:text-[28px] sm:text-[28px] smx:text-[28px] xsm:text-[28px] xs:text-[22px] xxs:text-[22px] text-[#FFFFFF] font-bold">Website migration. Made simple.</h2>
        <p className="xl:text-[18px] xxl:text-[18px] lg:text-[18px] md:text-[18px] xs-md:text-[16px] text-[#FFFFFF] mt-2">
          Currently hosting your website elsewhere? Join the 3+ million website
          owners who enjoy fast, secure and reliable web hosting here at
          Hostinger. Our expert team will handle everything while your site
          stays up and running throughout. That’s right – no downtime. No data
          loss. No problem.
        </p>
        <div className="flex smx:flex-col xsm:flex-col xs:flex-col xxs:flex-col sm:flex-col xs-md:flex-col lg:flex-col md:flex-col xl:flex-row gap-6 w-full mx-auto mt-10">
          <div className="bg-[#2F1C6A] p-[40px_32px] rounded-[16px] text-left">
            <img
              src="/images/service1.png"
              alt="3 simple steps"
              className="xl:w-[15%] lg:w-[7%] md:w-[6.9%] xs-md:w-[10%] sm:w-[10%] sm:h-auto smx:w-[10%] xsm:w-[17%] xsm:h-auto smx:h-auto xs-md:h-auto md:h-auto xs:w-[25%] xxs:w-[24%] xxs:h-auto xs:h-auto xl:h-auto lg:h-auto"
            />
            <h3 className="text-[20px] text-[#FFFFFF] font-bold mt-4">3 simple steps</h3>
            <p className="text-[18px] mt-[19px] text-[#FFFFFF]">
              Simply pick your plan, fill in the migration request form, submit
              it and then sit back and relax.
            </p>
          </div>
          <div className="bg-[#2F1C6A]  xl:w-[66%] lg:w-[100%] p-[40px_32px] rounded-[16px] text-left">
            <img
              src="/images/service2.png"
              alt="Fast and secure"
              className="xl:w-[15%] lg:w-[7%] xl:h-auto md:w-[6.9%] xs-md:w-[10%] sm:w-[10%] smx:w-[10%]  xsm:w-[17%] xsm:h-auto smx:h-auto xs:w-[25%] xs:h-auto xxs:w-[24%] xxs:h-auto sm:h-auto xs-md:h-auto md:h-auto lg:h-auto"
            />
            <h3 className="text-[20px] text-[#FFFFFF] font-bold mt-4">Fast and secure</h3>
            <p className="text-[18px] mt-[19px] md:w-[103%] text-[#FFFFFF]">
              95% of websites are migrated in under 20 minutes. The other 5% are
              quicker than the industry average. And, your site stays live the
              whole time too.
            </p>
          </div>
          <div className="bg-[#2F1C6A]  p-[40px_32px] rounded-[16px] text-left">
            <img
              src="/images/service3.png"
              alt="Free"
              className="xl:w-[15%] lg:w-[7%] xl:h-auto md:w-[6.9%] xs-md:w-[10%] smx:w-[10%]  xsm:w-[17%] xsm:h-auto smx:h-auto sm:w-[10%] xs:w-[25%] xs:h-auto xxs:w-[24%] xxs:h-auto sm:h-auto xs-md:h-auto md:h-auto lg:h-auto"
            />
            <h3 className="text-[20px] text-[#FFFFFF] font-bold mt-4">Free</h3>
            <p className="text-[18px] mt-[19px] text-[#FFFFFF]">
              Whether you have 1 website to migrate or 100, migration is free
              with all of our plans.
            </p>
          </div>
        </div>
        <button className="mt-8 bg-[#FC5185] pl-[48px] pr-[48px] py-[12px] text-[18px] font-semibold rounded-lg">
          Get started
        </button>
      </div>
    </section>
  );
}
