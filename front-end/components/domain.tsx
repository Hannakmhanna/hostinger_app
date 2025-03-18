import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const Domain = () => {
  return (
    <section className="bg-[#2F1C6A] pt-20 pb-20 flex justify-center">
      <div className="text-center text-[#FFFFFF]">
        <h4 className="text-[36px] w-[91%] leading-[39px] font-bold">
          Save up to 80% on your plan + get a free domain
        </h4>
        <p className="text-[16px] text-[#FFFFFF] mt-[2.5rem]">
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
