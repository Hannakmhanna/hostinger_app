import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const Domain = () => {
  return (
    <section className="bg-[#2F1C6A] pt-20 pb-20 flex justify-center">
      <div className="text-center text-[#FFFFFF]">
        <h4 className="xl:text-[36px] lg:text-[32px] md:text-[30px] xs-md:text-[26px] sm:text-[24px] smx:text-[24px] xsm:text-[23px] xs:text-[24px] xl:w-[91%] xxl:w-[91%] lg:w-[90%] md:w-[99%] leading-[39px] font-bold">
          Save up to 80% on your plan + get a free domain
        </h4>
        <p className="xl:text-[16px] xxl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[18px] xs-md:text-[18px] text-[#FFFFFF] sm:mt-[0.8rem] xl:mt-[2.5rem]">
          Try risk-free. 30-day money-back guarantee.
          <FontAwesomeIcon icon={faQuestion} className="ml-2 text-xl" />
        </p>
        <button className="mt-8 bg-[#FC5185] pl-10 pr-14 py-3 text-[15px] font-semibold rounded-lg">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Domain;
