"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto min-h-[112px] px-4 md:px-0 flex items-center justify-between py-[32px]">
        
        {/* ১. লোগো (বামে) */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Superbase Logo"
              width={139.87}
              height={45}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* ২. ডান পাশের অংশ (লিঙ্ক + আইকন + বাটন) */}
        <div className="flex items-center gap-[30px]">
          
          {/* ডেস্কটপ লিঙ্কগুলো (আইকনের ঠিক পাশে) */}
          <nav className="hidden md:flex items-center gap-[24px]">
            <Link href="#" className="text-[14px] font-bold text-[#666666] hover:text-black">
              HOME
            </Link>
            <Link href="#" className="text-[14px] font-bold text-black border-black ">
              PROGRAMS & SERVICES
            </Link>
            <Link href="#" className="text-[14px] font-bold text-[#666666] hover:text-black">
              ABOUT
            </Link>
            <Link href="#" className="text-[14px] font-bold text-[#666666] hover:text-black">
              CONTACT
            </Link>
          </nav>

          {/* শপিং ব্যাগ আইকন */}
          <button className="text-black hover:opacity-70 transition-opacity flex items-center">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>

          {/* সাইন ইন বাটন */}
          <div className="hidden md:block">
            <Button 
              className="bg-[#5D06E9] hover:bg-[#4c05c7] text-white font-semibold text-[15px] px-[32px] py-[12px] h-[48px] rounded-[4px] uppercase tracking-wider"
            >
              SIGN IN
            </Button>
          </div>

          {/* মোবাইল মেনু (Sheet) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-10">
                  <Link href="#" className="text-lg font-bold">HOME</Link>
                  <Link href="#" className="text-lg font-bold ">PROGRAMS & SERVICES</Link>
                  <Link href="#" className="text-lg font-bold">ABOUT</Link>
                  <Link href="#" className="text-lg font-bold">CONTACT</Link>
                  <Button className="bg-[#5D06E9] w-full mt-4">SIGN IN</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;