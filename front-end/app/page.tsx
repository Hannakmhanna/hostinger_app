"use client";  // Add this at the top

import React, { useState } from 'react';
import FloatingButton from "@/components/ai";
import ChatBot from "@/components/chatbutton"; // Import ChatBot
import CardSection from "@/components/card";
import Dashboard from "@/components/content";
import Domain from "@/components/domain";
import Features from "@/components/feature";
import Footer from "@/components/footer";
import HeaderPage from "@/components/Header";
import Header2Page from "@/components/header2";
import HelpService from "@/components/helpservice";
import PricingTable from "@/components/pricingPlan";
import Reviews from "@/components/Reviews";
import MigrationSection from "@/components/service";
import SlideSection from "@/components/slidebar";
import Spotlight from "@/components/spotlight";
import Testimonials from "@/components/testimonial";
import Image from "next/image";
import Login from '@/components/Login';



export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div>
      <HeaderPage />
      <Spotlight />
      <Reviews />
      <PricingTable />
      <CardSection />
      <MigrationSection />
      <SlideSection />
      <Dashboard />
      <Features />
      <Testimonials />
      <HelpService />
      <FloatingButton onClick={toggleChat} /> {/* Floating button opens chat */}
      <ChatBot isOpen={isChatOpen} toggleChat={toggleChat} /> {/* ChatBot component */}
      <Domain />
      <Footer />     
    </div>
  );
}
