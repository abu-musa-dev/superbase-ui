import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    // OUTER WRAPPER
    // Mobile: py-6, Desktop: py-[32px] (আগের মতোই)
    <footer className="w-full bg-white border-t border-[#E5E7EB] py-6 md:py-[32px] flex justify-center mt-auto">
      
      {/* INNER CONTAINER */}
      {/* ১. Flex Direction: মোবাইলে 'flex-col' (নিচে নিচে), ডেস্কটপে 'md:flex-row' (পাশাপাশি) */}
      {/* ২. Height: মোবাইলে 'h-auto' (কনটেন্ট অনুযায়ী), ডেস্কটপে 'md:h-[48px]' (ফিক্সড) */}
      <div className="w-full max-w-[1280px] h-auto md:h-[48px] px-4 xl:px-0 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-[10px]">
        
        {/* Left Side: Price Info */}
        {/* Text Alignment: মোবাইলে সেন্টারে, ডেস্কটপে লেফটে */}
        <div className="text-[#111827] font-bold text-[14px] md:text-[16px] uppercase tracking-tight text-center md:text-left">
          $35 FOR 5 DAYS (1 ACTIVITY PER DAY)
        </div>

        {/* Right Side: Back & Next Buttons */}
        {/* Width: মোবাইলে ফুল উইডথ এবং স্পেস বিটুইন, ডেস্কটপে অটো */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4 md:gap-[32px]">
          
          {/* BACK Button */}
          <button className="text-[#111827] font-[600] text-[14px] md:text-[15px] hover:text-gray-600 transition-colors uppercase tracking-wide">
            BACK
          </button>

          {/* NEXT Button */}
          <Button 
            className="bg-[#C7D2FE] hover:bg-[#b0bdfc] text-[#5D06E9] font-bold text-[14px] md:text-[15px] px-[32px] md:px-[48px] h-[44px] md:h-[48px] rounded-[6px] uppercase tracking-wide shadow-sm transition-all"
          >
            NEXT
          </Button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;