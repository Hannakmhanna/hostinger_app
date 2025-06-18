"use client";

import React, { useState } from "react";
import DomainModal from "@/components/DomainModal";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // show modal on load

  return (
    <div className="flex items-center justify-center min-h-screen">
      <DomainModal
        domain="gbfvd.net"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Cart;
