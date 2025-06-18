"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import { X } from 'lucide-react';

interface Language {
  id: number;
  country_name: string;
  flag_image_url: string;
  language_name: string;
}

const LanguagePage = () => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/languages/")

      .then((response) => {
        console.log("Fetched Data:", response.data);
        setLanguages(response.data);
      })
      .catch((error) => console.error("API Fetch Error:", error.message));
  }, []);

  // Filter languages based on search input
  const filteredLanguages = languages.filter((language) =>
    language.country_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl px-[72px] py-[99px]">
      {/* Heading and Close Icon */}
      <div className="flex justify-between mr-[-357px] items-center mb-6">
        <h1 className="text-3xl font-bold text-[#2F1C6A]">
          Choose your country
        </h1>
        <X className="cursor-pointer text-[#2F1C6A]" />
      </div>

      {/* Search Input */}
      <div className="relative w-[44%] mb-6">
        <input
          type="text"
          placeholder="Search for a country"
          className="w-full border border-gray-300 rounded-lg p-3 pl-[1.3rem] focus:outline-none focus:ring-2 focus:ring-[#2F1C6A] text-gray-800 placeholder:text-gray-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-[21.75rem] top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#673DE6]" />
      </div>

      {/* Country List */}
      <div className="flex flex-wrap w-[148%] gap-[8px]">
        {filteredLanguages.map((language) => (
          <div
            key={language.id}
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer w-[23%]"
          >
            {/* Display Flag Image */}
            <img
              src={language.flag_image_url}
              alt={language.country_name}
              className="w-[2.3rem] h-[21px]"
            />
            <div className="flex items-center gap-4">
              <div>
                <p className="font-medium text-[15px] text-[#2F1C6A]">
                  {language.country_name}
                </p>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#A3B8A3]
">
                  {language.language_name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagePage;
