"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo or Title */}
        <a href="#about-us" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] text-gray-300">
            Physics Club
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-gray-300 hover:text-gray-200"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0300145e] text-gray-200">
          <div className="flex flex-col space-y-4 px-5 py-6">
            <a href="#about-me" className="cursor-pointer hover:text-gray-100">
              About Us
            </a>
            <a href="#skills" className="cursor-pointer hover:text-gray-100">
              How We Started
            </a>
            <a href="#projects" className="cursor-pointer hover:text-gray-100">
              The Committee
            </a>
            <a href="#projects" className="cursor-pointer hover:text-gray-100">
              Upcoming Events
            </a>
          </div>
        </div>
      )}

      {/* Desktop Menu (hidden on mobile) */}
      <div
        className={`w-full h-full flex flex-row items-center justify-center md:mr-20 md:flex md:static ${
          isMobileMenuOpen ? "hidden" : "hidden md:flex"
        }`}
      >
        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            About Us
          </a>
          <a href="#skills" className="cursor-pointer">
            How We Started
          </a>
          <a href="#projects" className="cursor-pointer">
            The Committee
          </a>
          <a href="#projects" className="cursor-pointer">
            Upcoming Events
          </a>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
