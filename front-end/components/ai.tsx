// components/ai.tsx
import React from 'react';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={onClick}
        className="flex items-center bg-[#673DE6] gap-2 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-[#5B21B6] transition duration-300"
      >
        <img src="/images/kodee.png" alt="AI chatbot" className="w-5 h-5" />
        <h1 className="text-[14px]">Ask Kodee</h1>
      </button>
    </div>
  );
};

export default FloatingButton;
