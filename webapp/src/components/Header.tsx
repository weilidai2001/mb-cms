"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm flex items-center justify-between px-6 py-3 relative">
      <div className="flex items-center gap-2">
        <img
          src="/MB-logo-400x92-1.svg"
          alt="MoneyB Logo"
          className="h-10 w-auto"
          style={{ maxWidth: 160 }}
        />
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-[16px] font-medium text-gray-700">
        <a href="#investing" className="hover:text-[#4ccfc1]">
          Investing
        </a>
        <a href="#saving" className="hover:text-[#4ccfc1]">
          Saving
        </a>
        <a href="#home-buying" className="hover:text-[#4ccfc1]">
          Home-buying
        </a>
        <a href="#retirement" className="hover:text-[#4ccfc1]">
          Retirement
        </a>
        <a href="#learn" className="hover:text-[#4ccfc1]">
          Learn
        </a>
        <a href="#support" className="hover:text-[#4ccfc1]">
          Support
        </a>
      </nav>
      <div className="hidden md:flex gap-3 items-center">
        <button className="border border-gray-300 rounded-full px-4 py-1 font-semibold hover:bg-gray-100 transition">
          Log in
        </button>
        <button className="bg-[#4ccfc1] text-white rounded-full px-5 py-1 font-semibold hover:bg-[#3bb9a0] transition">
          Get started
        </button>
      </div>
      {/* Hamburger for md and below */}
      <div className="md:hidden flex items-center">
        <button
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ccfc1]"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-md flex flex-col gap-2 px-6 py-4 md:hidden animate-fade-in z-50">
          <nav className="flex flex-col gap-3 text-[16px] font-medium text-gray-700">
            <a href="#investing" className="hover:text-[#4ccfc1]">
              Investing
            </a>
            <a href="#saving" className="hover:text-[#4ccfc1]">
              Saving
            </a>
            <a href="#home-buying" className="hover:text-[#4ccfc1]">
              Home-buying
            </a>
            <a href="#retirement" className="hover:text-[#4ccfc1]">
              Retirement
            </a>
            <a href="#learn" className="hover:text-[#4ccfc1]">
              Learn
            </a>
            <a href="#support" className="hover:text-[#4ccfc1]">
              Support
            </a>
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <button className="border border-gray-300 rounded-full px-4 py-1 font-semibold hover:bg-gray-100 transition w-full">
              Log in
            </button>
            <button className="bg-[#4ccfc1] text-white rounded-full px-5 py-1 font-semibold hover:bg-[#3bb9a0] transition w-full">
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
