"use client";
import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export default function DomainModal({
  domain,
  isOpen,
  onClose,
  price,
  cutoffPrice,
}: any) {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const tax = 5.46;

  // Convert initial price to number and remove $ sign if present
  useEffect(() => {
    if (price) {
      const numericPrice = parseFloat(price.replace("$", "")) || 0;
      setSelectedPrice(numericPrice);
    }
  }, [price]);

  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
    let planPrice = 0;

    switch (plan) {
      case "1 years":
        planPrice = parseFloat(price.replace("$", "")) || 0;
        break;
      case "2 years":
        planPrice = 19.99;
        break;
      case "3 year":
        planPrice = 29.99;
        break;
    }

    setSelectedPrice(planPrice);
  };

  const total = parseFloat((selectedPrice + tax).toFixed(2));

  const handleCheckout = async () => {
    if (!selectedPlan) {
      alert(" Please select a plan before continuing.");
      return;
    }

    try {
      const numericCutoff = parseFloat(cutoffPrice.replace("$", ""));

      const roundedPrice = parseFloat(selectedPrice.toFixed(2));
      const roundedTotal = parseFloat((roundedPrice + tax).toFixed(2));

      const response = await fetch("http://127.0.0.1:8000/api/cart/checkout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          domain,
          plan: selectedPlan,
          price: roundedPrice,
          cutoff_price: numericCutoff,
          total: roundedTotal,
        }),
      });

      if (response.ok) {
        alert(" Domain added to cart!");
        onClose();
      } else {
        alert("Failed to add domain. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(" An error occurred. Try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.15)] flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-lg rounded-xl px-[40px] py-[32px] relative border border-[#e5e7eb]">
        <h2 className="text-[18px] text-[#212529] leading-[43px] font-bold">
          Choose billing period – {domain}
        </h2>
        <p className="text-[#6D7081] text-[14px] mb-4">
          Choose a billing period and finish the checkout
        </p>

        <div className="space-y-3 mb-4">
          {["1 years", "2 years", "3 year"].map((plan, index) => (
            <div
              key={index}
              className={`flex justify-between border px-[10px] py-[15px] rounded cursor-pointer ${selectedPlan === plan ? "border-[#673de6]" : "border-gray-300"
                }`}
              onClick={() => handlePlanChange(plan)}
            >
              <div className="space-x-2">
                <input
                  type="radio"
                  name="plan"
                  defaultChecked={plan === "3 years"}
                  onChange={() => handlePlanChange(plan)}
                  className="accent-[#673de6]"
                />
                <span className="text-[14px]">
                  {plan}
                  {plan === "2 years" && (
                    <span className="text-xs text-pink-500 ml-1">
                      MOST POPULAR
                    </span>
                  )}
                </span>
              </div>
              <div className="space-x-2">
                <span className="font-semibold text-[14px] line-through text-[#6D7081]">
                  US$ {cutoffPrice}
                </span>
                <span className="font-semibold rounded-[8px] p-2 bg-[#F2F3F6] text-[14px] text-[#1D1E20]">
                  US$ {selectedPrice.toFixed(2)}/1st yr
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[14px] space-x-2 flex mb-4 bg-[#F2F3F6] p-[16px] rounded">
          <ShieldCheck className="text-[#00b090] w-5 h-6" />
          <p>
            <b>FREE</b> domain privacy protection included
          </p>
        </div>

        <div className="text-sm border-t pt-3 bg-[#F2F3F6] p-[16px] rounded space-y-3">
          <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-[#212529] font-bold">Taxes & Fees</span>
            <span>US${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#212529] font-bold">Total</span>
            <span>US${total.toFixed(2)}</span>
          </div>
          <div className="font-bold">
            <span className="text-[#212529]">Coupon code </span>
            <span className="text-[#673DE6]">Add</span>
          </div>
          
          <p className="text-[13px] text-[#1D1E20]">
            By checking out, you agree with our{" "}
            <span className="text-[#673DE6] font-bold">Terms of Service</span> and confirm that you have read our{" "}
            <span className="text-[#673DE6] font-bold">Privacy Policy</span>. You can cancel recurring payments at any time.
          </p>
          </div>
        </div>

        <p className="text-[14px] text-[#6D7081] mt-3">
          Domain renews at US$ {cutoffPrice}/year on 2028-06-09
        </p>

        <div className="mt-4 flex justify-between">
          <button onClick={onClose} className="text-sm font-bold text-[#673DE6]">
            Cancel
          </button>
          <button
            className={`text-[14px] px-4 py-2 rounded ${selectedPlan
                ? "bg-[#673DE6] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            onClick={handleCheckout}
            disabled={!selectedPlan}
          >
            Choose payment method
          </button>
        </div>
      </div>
    </div>
  );
}
