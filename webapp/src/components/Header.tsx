import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#4ccfc1]">moneyb</span>
        <span className="text-2xl font-bold text-[#58d3e2]">x</span>
      </div>
      <nav className="flex gap-6 text-[16px] font-medium text-gray-700">
        <a href="#investing" className="hover:text-[#4ccfc1]">Investing</a>
        <a href="#saving" className="hover:text-[#4ccfc1]">Saving</a>
        <a href="#home-buying" className="hover:text-[#4ccfc1]">Home-buying</a>
        <a href="#retirement" className="hover:text-[#4ccfc1]">Retirement</a>
        <a href="#learn" className="hover:text-[#4ccfc1]">Learn</a>
        <a href="#support" className="hover:text-[#4ccfc1]">Support</a>
      </nav>
      <div className="flex gap-3 items-center">
        <button className="border border-gray-300 rounded-full px-4 py-1 font-semibold hover:bg-gray-100 transition">Log in</button>
        <button className="bg-[#4ccfc1] text-white rounded-full px-5 py-1 font-semibold hover:bg-[#3bb9a0] transition">Get started</button>
      </div>
    </header>
  );
}
