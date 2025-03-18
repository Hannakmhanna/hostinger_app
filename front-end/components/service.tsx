export default function MigrationSection() {
  return (
    <section className="bg-[#1F1346] text-white py-16 px-6 text-center">
      <div className="wrapper w-[84%] mx-auto">
        <h2 className="text-[36px] text-[#FFFFFF] font-bold">Website migration. Made simple.</h2>
        <p className="text-[18px] text-[#FFFFFF] mt-2">
          Currently hosting your website elsewhere? Join the 3+ million website
          owners who enjoy fast, secure and reliable web hosting here at
          Hostinger. Our expert team will handle everything while your site
          stays up and running throughout. That’s right – no downtime. No data
          loss. No problem.
        </p>
        <div className="flex gap-6 w-[100%] mx-auto mt-10">
          <div className="bg-[#2F1C6A] p-[40px_32px] rounded-[16px] text-left">
            <img
              src="/images/service1.png"
              alt="3 simple steps"
              className="w-[15%] h-auto"
            />
            <h3 className="text-[20px] text-[#FFFFFF] font-bold mt-4">3 simple steps</h3>
            <p className="text-[18px] mt-[19px] text-[#FFFFFF]">
              Simply pick your plan, fill in the migration request form, submit
              it and then sit back and relax.
            </p>
          </div>
          <div className="bg-[#2F1C6A]  w-[66%] p-[40px_32px] rounded-[16px] text-left">
            <img
              src="/images/service2.png"
              alt="Fast and secure"
              className="w-[15%] h-auto"
            />
            <h3 className="text-[20px] text-[#FFFFFF] font-bold mt-4">Fast and secure</h3>
            <p className="text-[18px] mt-[19px] text-[#FFFFFF]">
              95% of websites are migrated in under 20 minutes. The other 5% are
              quicker than the industry average. And, your site stays live the
              whole time too.
            </p>
          </div>
          <div className="bg-[#2F1C6A]  p-[40px_32px] rounded-[16px] text-left">
            <img
              src="/images/service3.png"
              alt="Free"
              className="w-[15%] h-auto"
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
