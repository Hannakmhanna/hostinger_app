"use client";

import { useEffect, useState } from "react";
import { Globe, Trash } from "lucide-react";

type CartItem = {
  id: number;
  domain: string;
  plan: string;
};

export default function DomainsPage({
  user,
}: {
  user: { name: string; email: string } | null;
}) {
  const [latestItem, setLatestItem] = useState<CartItem | null>(null);


  const handleDelete = async () => {
    if (!latestItem) return;

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${latestItem.domain}?`
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/cart/${latestItem.id}/`, {
        method: "DELETE",
      });

      if (res.status === 204) {
        alert(" Domain deleted from cart.");
        setLatestItem(null);
      } else {
        alert(" Failed to delete domain.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert(" Something went wrong while deleting.");
    }
  };

 
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cart/");
        const data: CartItem[] = await response.json();

        if (data.length > 0) {
          const last = data[data.length - 1];
          setLatestItem(last);
        }
      } catch (error) {
        console.error("Failed to fetch cart data:", error);
      }
    };

    fetchCart();
  }, []);

  const getExpiryDate = (plan: string) => {
    const startDate = new Date();
    let years = 1;
    if (plan.includes("2")) years = 2;
    if (plan.includes("3")) years = 3;

    startDate.setFullYear(startDate.getFullYear() + years);
    return startDate.toISOString().split("T")[0];
  };

  return (
    <div className="p-4">
      <h1 className="text-[16px] font-bold mb-4">
        Hello, {user?.name || "Guest"}!
      </h1>

      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="font-semibold text-gray-800">Domains</h2>
        </div>

        {latestItem ? (
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="bg-[#F1ECFF] p-2 rounded-md">
                <Globe size={18} className="text-[#673DE6]" />
              </div>
              <div>
                <p className="text-red-600 font-semibold">{latestItem.domain}</p>
                <p className="text-sm text-gray-500">
                  Expires on {getExpiryDate(latestItem.plan)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="border border-gray-200 text-[#673DE6] font-semibold px-4 py-1 rounded-md text-sm">
                Manage
              </button>
              <button
                onClick={handleDelete}
                className="text-red-600 hover:text-red-800 text-sm"
                title="Delete Domain"
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="px-4 py-6 text-gray-500">No domains found.</div>
        )}
      </div>
    </div>
  );
}
