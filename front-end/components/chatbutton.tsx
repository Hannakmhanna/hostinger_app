import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ChatBotProps {
  isOpen: boolean;
  toggleChat: () => void;
}
const ChatBot: React.FC<ChatBotProps> = ({ isOpen, toggleChat }) => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ sender: string, text: string }[]>([]);
  
    const handleSend = () => {
      if (message.trim() === '') return;
  
      // Add user's message to chat history
      const newMessage = { sender: 'user', text: message };
      setChatHistory((prev) => [...prev, newMessage]);
      setMessage('');  // Clear input field
  
      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiResponse = generateAIResponse(message);
        setChatHistory((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
      }, 1000);  // 1-second delay for realism
    };
  
    const generateAIResponse = (userMessage: string) => {
      // Simple simulated responses
      if (userMessage.toLowerCase().includes("create a website")) {
        return "That's great! I recommend starting with our Website Builder. Would you like some tips?";
      } else if (userMessage.toLowerCase().includes("migrate")) {
        return "Migrating is simple! We offer a free migration service. Would you like to know more?";
      } else if (userMessage.toLowerCase().includes("hosting plan")) {
        return "Our shared hosting plans are popular. Do you prefer affordability or high performance?";
      } else {
        return "Let me check that for you! Meanwhile, is there anything else you'd like assistance with?";
      }
    };
  

  if (!isOpen) return null;  // Render nothing if the chatbot isn't open

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-lg border border-gray-300">
      <div className="bg-[#FFFFFF] text-white flex justify-between items-center p-4 rounded-t-xl">
        <h2 className="font-bold text-[#000000]">Kodee</h2>
        <X className="cursor-pointer text-[#000000]" onClick={toggleChat} />
      </div>

      <div className="p-4  space-y-3">
        <div className='bg-[#F2F3F6]'>
        <img src="/images/kodee.png" alt="AI chatbot" className="w-5 h-5" />
        <p className='text-[14px]'>Hi! I’m Kodee, Hostinger AI sales expert 🤖. How can I help you today?</p>
        </div>
        

        <div className="space-y-2">
          <button className="w-full text-[14px] border rounded-full py-2 px-4 hover:bg-gray-100">
            I want to create a website
          </button>
          <button className="w-full text-[14px] border rounded-full py-2 px-4 hover:bg-gray-100">
            I want to migrate to Hostinger
          </button>
          <button className="w-full text-[14px] border rounded-full py-2 px-4 hover:bg-gray-100">
            I need help choosing the right hosting plan
          </button>
        </div>
      </div>

      <div className="border-t p-4 flex items-center space-x-2">
        <input
          type="text"
          className="flex-grow border text-[14px] rounded-full px-4 py-2"
          placeholder="Tell us how we can help..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
       
       
       <button className="text-purple-600" onClick={handleSend}>
          <Send />
        </button>
      </div>

      <p className="text-center text-xs text-gray-400 p-2">
        AI may produce inaccurate information
      </p>
    </div>
  );
};

export default ChatBot;
