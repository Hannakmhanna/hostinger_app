import { useEffect, useState } from "react";
import axios from "axios";
import { IndianRupee, Check, Minus, ChevronDown, X  } from "lucide-react";


const boldFeaturesMap: { [key: string]: (plan: string) => string } = {
  "1 website": () => "<b>1</b> website",
  "50 GB SSD storage": () => "<b>50 GB</b> SSD storage",
  "Free automatic website migration": () =>
    "<b>Free</b> automatic website migration",
  "1 email account": () => "<b>1</b> email account",
  "Unlimited free SSL": () => "<b>Unlimited free</b> SSL",
  "Weekly backups": () => "<b>Weekly</b> backups",
  "100 websites": () => "<b>100</b> websites",
  "100 GB SSD storage": () => "<b>100 GB</b> SSD storage",
  "Free email": () => "<b>Free</b> email",
  "Starter WooCommerce": () => "<b>Starter</b> WooCommerce",
  "200 GB NVMe storage": () => "<b>200 GB</b> NVMe storage",
  "Free domain (₹749.00 value)": (plan) =>
    plan === "single"
      ? "Free domain (₹749.00 value)"
      : "<b>Free</b> domain (₹749.00 value)",
  "Daily backups (₹2,268.00 value)": () =>
    "<b>Daily</b> backups (₹2,268.00 value)",
  "Basic WooCommerce Optimisation": () =>
    "<b>Basic</b> WooCommerce Optimisation",
  "Free CDN": (plan) => (plan === "premium" ? "Free CDN" : "<b>Free</b> CDN"),
  "300 websites": () => "<b>300</b> websites",
  "Standard WooCommerce": () => "<b>Standard</b> WooCommerce",
};

const featuresWithMinus = [
  "Free domain",
  "Free CDN",
  "Free domain (₹749.00 value)",
  "WooCommerce",
  "Dedicated IP address",
  "Priority support",
];
const featuresWithMinusInBusiness = [
  "Dedicated IP address",
  "Priority support",
];

const underlinedFeatures = [
  "100 websites",
  "Managed Hosting for WordPress",
  "Free domain (₹749.00 value)",
  "Free automatic website migration",
  "Free email",
  "Unlimited free SSL",
  "Daily backups (₹2,268.00 value)",
  "Basic WooCommerce Optimisation",
  "Free CDN",
  "Dedicated IP address",
  "Weekly backups",
  "Starter WooCommerce",
  "Standard WooCommerce",
  "WooCommerce",
];

const widthLimitedFeatures = [
  "Managed Hosting for WordPress",
  "Free automatic website migration",
  "Daily backups (₹2,268.00 value)",
  "Basic WooCommerce Optimisation",
];

const greyFeaturesInSingle = [
  "Free CDN",
  "WooCommerce",
  "Dedicated IP address",
  "Priority support",
  "Free domain (₹749.00 value)",
];
const greyFeaturesInBusiness = ["Dedicated IP address", "Priority support"];

const greyFeaturesInPremium = [
  "Free CDN",
  "Dedicated IP address",
  "Priority support",
];

interface ExtraFeature {
  title: string;
  description: string[];
}

interface PricingPlan {
  name: string;
  description: string;
  renewal_price: number;
  discounted_price: number;
  discount_percentage: number;
  features: string[];
  has_free_months: boolean;
  extra_features?: ExtraFeature[];
}

const PricingTable = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/pricing/")
      .then((response) => setPlans(response.data))
      .catch((error) => console.error("Error fetching pricing plans:", error));
  }, []);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="text-center mb-9 py-4 pt-[8rem]">
      <h1 className="text-[36px] font-bold leading-[90px] text-[#2F1C6A]">
        Pick your perfect plan
      </h1>
      <p className="text-[#2F1C6A] text-[18px] mt-2">
        Get started in complete confidence. Our 30-day money-back guarantee
        means it's risk-free.
      </p>

      <div className="flex flex-col md:flex-row justify-center  items-stretch gap-6 pt-[62px] p-6 ml-5 relative">
        {plans.map((plan) => {
          const isSinglePlan = plan.name.toLowerCase() === "single";
          const isPremiumPlan = plan.name.toLowerCase() === "premium";

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between md:w-1/3 py-6 pb-[8.5rem] px-8 bg-[#FAFBFF] shadow-lg rounded-2xl text-left border mt-16 ${
                isPremiumPlan
                  ? "border-[3px] border-[#8C85FF] mt-[15px] pt-[48px]"
                  : "border border-[#D5DFFF]"
              }`}
            >
              {isPremiumPlan && (
                <div className="absolute top-0 left-0 w-full flex items-center justify-center h-[2.9rem] bg-[#8C85FF] text-[#FFFFFF] text-[16px] font-semibold rounded-t-[10px]">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-[600] text-[#2F1C6A] mb-6 mt-16">
                {plan.name}
              </h3>

              <p className="text-[#2F1C6A] text-[14px] mb-12">
                {plan.description}
              </p>

              <p className="mb-6">
                <span className="line-through text-[#2F1C6A]">
                  ₹ {plan.renewal_price}
                </span>
                <span className="text-[#2F1C6A]  font-bold text-sm inline-block ml-2 py-2 px-3 rounded-[20px] bg-[#D5DFFF]">
                  SAVE{" "}
                  {Math.round(
                    ((plan.renewal_price - plan.discounted_price) /
                      plan.renewal_price) *
                      100
                  )}
                  %
                </span>
              </p>

              <div className="flex items-center gap-1 mt-8">
                <IndianRupee size={20} className="text-[#2F1C6A]" />
                <h3 className="text-[48px] mt-[-22px] text-[#2F1C6A] font-bold">
                  {plan.discounted_price}
                </h3>
                <h4 className="text-[#2F1C6A] text-[20px] font-semibold">
                  /mo
                </h4>
              </div>

              {plan.has_free_months && (
                <p className="text-lg font-bold text-[#673DE6] mt-1">
                  +2 Months Free
                </p>
              )}

              <button
                className={`mt-8 w-full mb-8 font-semibold p-3 px-5 border-2 rounded-lg  ${
                  isPremiumPlan
                    ? "bg-[#673DE6] text-white hover:bg-[#673DE6]"
                    : "bg-[#FAFBFF] text-[#673DE6] border-[#673DE6] hover:bg-[#673DE6] hover:text-white"
                }`}
              >
                Choose Plan
              </button>

              <p className="mt-4 text-sm text-[#262831] border-b border-gray-300 pb-6">
                ₹ {plan.renewal_price} /mo when you renew
              </p>

              <div className="mt-4 text-[#2F1C6A] space-y-4">
                {plan.features.map((feature, index) => {
                  const isGrey =
                    (plan.name.toLowerCase() === "business" &&
                      greyFeaturesInBusiness.includes(feature)) ||
                    (isSinglePlan && greyFeaturesInSingle.includes(feature)) ||
                    (isPremiumPlan && greyFeaturesInPremium.includes(feature));

                  const isMinusFeature =
                    (plan.name.toLowerCase() === "business" &&
                      featuresWithMinusInBusiness.includes(feature)) ||
                    (isSinglePlan && featuresWithMinus.includes(feature)) ||
                    (isPremiumPlan && greyFeaturesInPremium.includes(feature));

                  const isUnderlined = underlinedFeatures.includes(feature);
                  const isWidthLimited = widthLimitedFeatures.includes(feature);
                  const formattedFeature = boldFeaturesMap[feature]
                    ? boldFeaturesMap[feature](plan.name.toLowerCase())
                    : feature;

                  return (
                    <div
                      key={`${plan.name}-feature-${index}`}
                      className="flex items-center"
                    >
                      {isMinusFeature ? (
                        <Minus className="mr-2 text-[#6D7081]" size={14} />
                      ) : (
                        <Check className="mr-2 text-[#009F47]" size={14} />
                      )}
                      <span
                        className={`text-[16px] ${
                          isGrey ? "text-[#6D7081]" : "text-[#2F1C6A]"
                        } ${
                          isUnderlined
                            ? "underline decoration-dashed decoration-[#2F1C6A] underline-offset-[3px]"
                            : ""
                        } ${
                          isWidthLimited ? "w-[75%] inline-block" : "w-full"
                        }`}
                        dangerouslySetInnerHTML={{ __html: formattedFeature }}
                      ></span>
                    </div>
                  );
                })}
              </div>
              {isExpanded &&
                plan.extra_features &&
                plan.extra_features.length > 0 && (
                  <div className="mt-6 py-4  border-gray-300">
                    <ul className="space-y-4 text-[14px] text-[#2F1C6A]">
                      {plan.extra_features.map((feature, index) => (
                        <li key={`${plan.name}-extra-${index}`}>
                          <p className="font-bold text-[#2F1C6A] text-[18px]">
                            {feature.title}
                          </p>
                          <ul className=" mt-6 space-y-5">
                            {feature.description.map((desc, i) => (
                              <li
                                key={i}
                                className="flex items-center w-[85%] underline decoration-dashed decoration-[#2F1C6A] underline-offset-[3px] space-y-4"
                              >
                                <Check
                                  className="mr-2 text-[#009F47]"
                                  size={14}
                                />
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              <div
                className="flex justify-center text-center text-[18px] mb-8  ml-[25px] text-[#673DE6] font-bold cursor-pointer gap-2"
                onClick={toggleExpanded}
              >
                {isExpanded ? "See Less Features" : "See All Features"}
                <ChevronDown />
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="text-[#673DE6] text-[16px] font-[700]"
      >
        Payment Terms
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white px-[44px] py-[77px] rounded-lg shadow-lg w-[74%]">
            <div className="ml-[61.8rem]">
              {" "}
              <button
                onClick={() => setShowModal(false)}
                className="text-black text-xl"
              >
                    <X />
              </button>
            </div>

            {/* Modal Header */}
            <div className="">
              <h2 className="text-[#2F1C6A] text-[24px]  text-center font-[600]">
                Payment terms
              </h2>
            </div>

            {/* Modal Content */}
            <p className="text-[#2F1C6A] text-[16px] mt-6">
              The price displayed is the monthly rate excluding applicable
              taxes. The total price for the plan to be paid upfront at checkout
              includes the monthly rate multiplied by the number of months in
              your plan, along with any applicable taxes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingTable;
