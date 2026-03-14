"use client";

import Image from "next/image";
import PortfolioLayout from "@/components/PortfolioLayout";

const projects = [
  {
    title: "โครงการติดตั้งระบบไฟฟ้าโรงงาน 1",
    description: "ติดตั้งระบบจ่ายไฟ และระบบควบคุมไฟฟ้า",
    image: "/electrical1.jpg",
    category: "ระบบไฟฟ้า"
  },
  {
    title: "โครงการติดตั้งระบบไฟฟ้าโรงงาน 2", 
    description: "ระบบส่งกำลังไฟฟ้าแรงสูง",
    image: "/electrical2.jpg",
    category: "ระบบไฟฟ้า"
  },
  {
    title: "งานระบบรถไฟฟ้าสายสีเหลือง",
    description: "ออกแบบและติดตั้งระบบไฟฟ้าสายสีเหลือง",
    image: "/electrical3.jpg",
    category: "ระบบไฟฟ้า"
  },
  {
    title: "งานระบบรถไฟฟ้าสายสีน้ำเงิน", 
    description: "ออกแบบและติดตั้งระบบไฟฟ้าสายสีน้ำเงิน",
    image: "/electrical4.jpg",
    category: "ระบบไฟฟ้า"
  },
  {
    title: "งานระบบรถไฟฟ้าส่องสว่าง", 
    description: "ออกแบบและติดตั้งงานระบบส่องสว่าง",
    image: "/electrical5.jpg",
    category: "ระบบไฟฟ้า"
  },
  {
    title: "งานระบบ UPS", 
    description: "ออกแบบและติดตั้งระบบ UPS",
    image: "/electrical6.jpg",
    category: "ระบบไฟฟ้า"
  },
  {
    title: "งานระบบสายส่งไฟฟ้าแรงสูง 22 KV", 
    description: "ออกแบบและติดตั้งระบบสายส่งไฟฟ้าแรงสูง 22 KV",
    image: "/electrical7.jpg",
    category: "ระบบไฟฟ้า"
  },
  {
    title: "งานเปลี่ยน Circuit Breaker", 
    description: "เปลี่ยน Circuit Breaker",
    image: "/electrical8.jpg",
    category: "ระบบไฟฟ้า"
  }
 
];

export default function ElectricalPortfolio() {
  return (
    <PortfolioLayout title="งานระบบไฟฟ้า">
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
