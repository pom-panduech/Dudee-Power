"use client";

import Image from "next/image";
import PortfolioLayout from "@/components/PortfolioLayout";

const projects = [
  {
    title: "ระบบ Auto Loader",
    description: "ระบบ Auto Loader ส่งผ่านชิ้นงานเข้าสู่กระบวนการผลิต",
    image: "/automation1.jpg",
    category: "PLC Automation"
  },
  {
    title: "ระบบ Synchronous speed control", 
    description: "ระบบควบคุมความเร็วมอเตอร์เม็ดผสมสี",
    image: "/automation2.jpg",
    category: "PLC Automation"
  }
];

export default function AutomationPortfolio() {
  return (
    <PortfolioLayout title="ผลงาน PLC Automation">
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
            <div className="text-purple-600 text-xs font-medium">{project.category}</div>
          </div>
        ))}
      </div>
    </PortfolioLayout>
  );
}
