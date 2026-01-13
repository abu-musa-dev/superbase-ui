"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Check, ChevronLeft } from "lucide-react"; // ChevronLeft আইকন ইম্পোর্ট করা হলো
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [selectedId, setSelectedId] = useState(4);
  const [showModal, setShowModal] = useState(false);
  
  // ডেট ম্যানেজমেন্ট স্টেট
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const cards = [
    { id: 1, weeks: 1, title: "1 WEEK", calculation: "(1 Week X 5 Days) = 5 Days", price: "$35 for 5 days", icon: "/card.png" },
    { id: 2, weeks: 2, title: "2 WEEKS", calculation: "(2 Weeks X 5 Days) = 10 Days", price: "$70 for 10 days", icon: "/card.png" },
    { id: 3, weeks: 3, title: "3 WEEKS", calculation: "(3 Weeks X 5 Days) = 15 Days", price: "$105 for 15 days", icon: "/card.png" },
    { id: 4, weeks: 4, title: "4 WEEKS", calculation: "(4 Weeks X 5 Days) = 20 Days", price: "$140 for 20 days", icon: "/card.png" },
  ];

  const selectedData = cards.find((card) => card.id === selectedId);

  // কনফার্ম হ্যান্ডলার
  const handleConfirm = () => {
    const start = new Date("2026-06-18"); 
    const weeksToAdd = selectedData ? selectedData.weeks : 0;
    const end = new Date(start);
    end.setDate(start.getDate() + (weeksToAdd * 7)); 

   const formatDate = (date: Date) => {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${m}/${d}/${y}`;
};

    setStartDate(formatDate(start));
    setEndDate(formatDate(end));
    setIsConfirmed(true); 
    setShowModal(false); 
  };

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        // আপনার দেওয়া নতুন কালার কোড অনুযায়ী গ্রেডিয়েন্ট
        background: "linear-gradient(180deg, rgba(93, 6, 233, 0.02) 0%, rgba(28, 29, 246, 0.13) 100%)",
        minHeight: "795px"
      }}
    >
      {/* --- BACKGROUND DECORATIONS (STARS) --- */}
      
      {/* ১. মাঝখানের উপরের স্টার (Center Top Star) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
        <Image src="/star.png" alt="star-center" width={48} height={48} priority />
      </div>

      {/* ২. ডান পাশের স্টার (Side Star) - আপনার রিকোয়ারমেন্ট অনুযায়ী */}
      <div className="absolute top-[490px] left-[1360px] md:right-0 z-0 opacity-90">
        <Image src="/star.png" alt="star-right" width={64} height={64} className="rotate-[15deg]" />
      </div>

      {/* --- MAIN CONTAINER --- */}
      {/* Figma: Width Fill 1440px, Padding Top/Bottom 96px */}
      <div className="relative z-10 max-w-[1440px] mx-auto pt-[96px] pb-[96px] px-4 md:px-[80px]">
        
        {/* --- INNER CONTENT WRAPPER --- */}
        {/* Figma: Width Fill 1280px, Gap 48px */}
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px]">
          
          {/* 1. HEADER SECTION */}
          <div className="flex flex-col gap-[10px]">
            {/* Back Button */}
            <button 
              onClick={() => setIsConfirmed(false)}
              className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition-colors w-fit mb-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="font-[300] text-[15px] uppercase tracking-wide">Regular aftercare program</span>
            </button>
            
            {/* Main Title */}
            <h1 className="font-[500] text-[32px] md:text-[36px] text-[#111827] leading-tight">
              How many weeks you like to continue?
            </h1>
            
            {/* Subtitle */}
            <p className="font-[300] text-[15px] text-[#6B7280] leading-none">
              Based on your selection Mon, Tue, Thu, Fri, Sat
            </p>
          </div>

          {/* 2. CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => {
                  setSelectedId(card.id);
                  setIsConfirmed(false);
                }}
                className={`relative w-full h-[199px] rounded-[12px] border-[1.5px] p-[24px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 bg-white shadow-sm
                  ${selectedId === card.id ? "border-[#5D06E9] ring-1 ring-[#5D06E9]/10 scale-[1.02]" : "border-[#E5E7EB] hover:border-[#D1D5DB]"}`}
              >
                {/* Checkbox Circle */}
                <div className="absolute top-[16px] right-[16px]">
                  <div className={`w-[24px] h-[24px] rounded-full border flex items-center justify-center transition-all
                    ${selectedId === card.id ? "bg-[#5D06E9] border-[#5D06E9]" : "border-[#E5E7EB] bg-transparent"}`}>
                    {selectedId === card.id && <Check className="text-white w-3.5 h-3.5 stroke-[3px]" />}
                  </div>
                </div>

                {/* Card Icon & Text */}
                <div className="flex flex-col items-center gap-[16px]">
                  <Image src={card.icon} alt={card.title} width={85} height={85} className="object-contain" />
                  <div className="text-center">
                    <h3 className="font-[600] text-[15px] text-[#111827] uppercase tracking-wide">{card.title}</h3>
                    <p className="font-[300] text-[13px] text-[#6B7280] mt-1">{card.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. DETAILS / DATE INPUT BOX */}
          {selectedData && (
            <div className="w-full bg-white border border-[#E5E7EB] rounded-[12px] p-[32px] flex flex-col items-center shadow-sm min-h-[212px]">
              
              {/* Box Title */}
              <div className="text-center h-[80px] flex flex-col items-center justify-center gap-[6px] mb-8">
                <h2 className="text-[18px] font-bold text-[#111827] uppercase tracking-wide">{selectedData.title}</h2>
                <p className="text-[#6B7280] text-[14px] font-[300]">{selectedData.calculation}</p>
              </div>

              {/* Input Fields Logic */}
              {!isConfirmed ? (
                // Single Input (Before Confirm)
                <div 
                  className="w-full max-w-[1232px] h-[56px] relative flex items-center cursor-pointer group"
                  onClick={() => setShowModal(true)}
                >
                  <div className="absolute -top-2.5 left-4 bg-white px-1 text-[13px] text-[#6B7280] z-10 font-medium">Start date</div>
                  <Input 
                    readOnly
                    placeholder="Select start date" 
                    className="w-full h-full border-[#E5E7EB] rounded-[8px] px-5 text-[16px] font-[400] cursor-pointer bg-transparent group-hover:border-[#5D06E9] transition-colors"
                  />
                  <CalendarIcon className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
                </div>
              ) : (
                // Double Input (After Confirm)
                <div className="w-full max-w-[1232px] flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  {/* Start Date */}
                  <div className="relative w-full h-[56px]">
                    <div className="absolute -top-2.5 left-4 bg-white px-1 text-[13px] text-[#6B7280] z-10 font-medium">Start date</div>
                    <Input readOnly value={startDate} className="w-full h-full border-[#E5E7EB] rounded-[8px] px-5 text-[16px] font-[600] text-[#111827] bg-transparent" />
                    <CalendarIcon className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
                  </div>
                  {/* End Date */}
                  <div className="relative w-full h-[56px]">
                    <div className="absolute -top-2.5 left-4 bg-white px-1 text-[13px] text-[#6B7280] z-10 font-medium">End date</div>
                    <Input readOnly value={endDate} className="w-full h-full border-[#E5E7EB] rounded-[8px] px-5 text-[16px] font-[600] text-[#111827] bg-[#F9FAFB]" />
                    <CalendarIcon className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* --- MODAL (আগের মতোই) --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[16px] shadow-2xl flex flex-col items-center animate-in zoom-in-95 duration-300 w-[505px] max-w-[90vw] p-[48px_22px] gap-[32px]">
            <h3 className="text-[#111827] text-center text-[28px] font-[500] leading-[34px]">
              Please select your start date
            </h3>
            
            {/* Picker Visual */}
            <div className="w-full h-[140px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[40px] bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-[40px] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute top-1/2 inset-x-0 -translate-y-1/2 h-[40px] border-y border-gray-100 pointer-events-none" />
              <div className="flex gap-12 text-[18px] text-gray-300 items-center justify-center w-full">
                <div className="flex flex-col items-center gap-3"><span className="opacity-40">17</span><span className="text-[#111827] font-medium text-[22px] scale-110">18</span><span className="opacity-40">19</span></div>
                <div className="flex flex-col items-center gap-3"><span className="opacity-40">May</span><span className="text-[#111827] font-medium text-[22px] scale-110">June</span><span className="opacity-40">July</span></div>
                <div className="flex flex-col items-center gap-3"><span className="opacity-40">2025</span><span className="text-[#111827] font-medium text-[22px] scale-110">2026</span><span className="opacity-40">2027</span></div>
              </div>
            </div>

            <p className="text-[#4B5563] text-center font-[300] text-[15px] leading-[24px]">
              <span className="font-bold text-[#111827]">NB:</span> You&apos;ve chosen a <span className="font-semibold text-[#111827]">{selectedData?.title.toLowerCase()}</span> schedule starting on June 18, 2026, with sessions on Mon, Tue, Thu, Fri, and Sat.
              We&apos;ll automatically set your end date, and you can renew whenever you like — no worries!
            </p>

            <div className="w-full flex items-center gap-[16px] mt-2">
              <button onClick={() => setShowModal(false)} className="flex-1 h-[48px] border border-[#E5E7EB] rounded-[6px] text-[#EF4444] text-[15px] font-[600] uppercase tracking-wide hover:bg-red-50 transition-colors">CANCEL</button>
              <button onClick={handleConfirm} className="flex-1 h-[48px] bg-[#6200EE] rounded-[6px] text-white text-[15px] font-[600] uppercase tracking-wide hover:bg-[#5200cc] transition-colors shadow-md">CONFIRM</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;