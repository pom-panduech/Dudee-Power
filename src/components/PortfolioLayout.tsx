"use client";

import React from "react";
import Header from "@/components/Header";

interface PortfolioLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function PortfolioLayout({ children, title }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-4">
            {title}
          </h1>
        </div>
        
        {children}
      </div>
    </div>
  );
}
