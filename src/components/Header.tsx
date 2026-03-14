"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  scrollEffect?: boolean;
}

export default function Header({ scrollEffect = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!scrollEffect) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollEffect]);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
      scrollEffect && scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
        : scrollEffect && !scrolled
        ? "bg-transparent"
        : "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Image 
              src="/logo.jpg" 
              alt="DU DEE POWER Logo" 
              width={60} 
              height={60}
              className="rounded-lg shadow-md"
            />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">DU DEE POWER</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors font-bold">หน้าแรก</Link>
            <Link href="/services" className="text-gray-900 hover:text-blue-600 transition-colors font-bold">บริการ</Link>
            <Link href="/portfolio" className="text-gray-900 hover:text-blue-600 transition-colors font-bold">ผลงานของเรา</Link>
            <Link href="/about" className="text-gray-900 hover:text-blue-600 transition-colors font-bold">เกี่ยวกับเรา</Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 transition-colors font-bold">ติดต่อ</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
