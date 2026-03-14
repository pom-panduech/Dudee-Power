"use client";

import Image from "next/image";
import PortfolioLayout from "@/components/PortfolioLayout";

const projects = [
  {
    title: "ระบบ Monitoring Status Machine",
    description: "ตามสถานะการทำงานของเครื่องจักรในโรงงานผ่านเว็บแอปพลิเคชัน",
    image: "/dashboard3.jpg",
    category: "Dashboard"
  },
  {
    title: "Monitoring OEE And Performance", 
    description: "ติดตามประสิทธิภาพการทำงานของเครื่องจักรและคำนวณค่า OEE ผ่านเว็บแอปพลิเคชัน",
    image: "/dashboard2.jpg",
    category: "Dashboard"
  }
];

export default function MonitoringPortfolio() {
  return (
    <PortfolioLayout title="ผลงาน Monitoring Dashboard">
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
