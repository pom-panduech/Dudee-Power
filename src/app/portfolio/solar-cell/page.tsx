"use client";

import Image from "next/image";
import PortfolioLayout from "@/components/PortfolioLayout";

const projects = [
  {
    title: "โครงการติดตั้ง Solar Cell 1",
    description: "ระบบติดตั้ง Solar Cell ขนาด 5kW บ้านจัดสรร",
    image: "/solar1.jpg",
    category: "Solar Cell"
  },
  {
    title: "โครงการติดตั้ง Solar Cell 2", 
    description: "ระบบ Hybrid ขนาด 5kW บ้านจัดสรร",
    image: "/solar2.jpg",
    category: "Solar Cell"
  },
  {
    title: "โครงการติดตั้ง Solar Cell 3", 
    description: "ระบบ Hybrid ขนาด 25kW (Mini BigC)",
    image: "/service4.jpg",
    category: "Solar Cell"
  },
  {
    title: "โครงการติดตั้ง Solar Cell 4", 
    description: "ระบบ Hybrid ขนาด 5kW บ้านจัดสรร",
    image: "/solar4.jpg",
    category: "Solar Cell"
  }
];

export default function SolarCellPortfolio() {
  return (
    <PortfolioLayout title="งานระบบ Solar Cell">
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
