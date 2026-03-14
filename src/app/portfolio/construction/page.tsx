"use client";

import Link from "next/link";
import Image from "next/image";
import PortfolioLayout from "@/components/PortfolioLayout";

const projects = [
  {
    title: "โครงการก่อสร้างร้างรั้วคอนกรีต",
    description: "ก่อสร้างรั้วคอนกรีตเสริมเหล็ก และ กำแพงดิน",
    image: "/construction1.jpg",
    category: "โครงการ"
  },
  {
    title: "โครงการก่อสร้าง Duct Bank", 
    description: "ก่อสร้าง duct bank สำหรับนำสายไฟ underground",
    image: "/construction2.jpg",
    category: "โครงการ"
  }
];

export default function ConstructionPortfolio() {
  return (
    <PortfolioLayout title="งานก่อสร้าง">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="relative h-48 mb-4">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <div className="text-orange-600 text-xs font-medium">{project.category}</div>
          </div>
        ))}
      </div>
    </PortfolioLayout>
  );
}
