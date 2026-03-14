"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16">
      <Header />
      
      {/* Portfolio Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ผลงานของเรา
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ผลงานการดำเนินงานทั้งหมดที่ผ่านมา ทั้งด้านระบบไฟฟ้า ก่อสร้าง และระบบอัตโนมัติ
          </p>
        </div>

        {/* Portfolio Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/portfolio/construction" className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative h-48 mb-4">
                <Image 
                  src="/construction1.jpg" 
                  alt="รับเหมาก่อสร้าง"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">รับเหมาก่อสร้าง</h3>
              <p className="text-gray-600 text-sm mb-4">โครงการร้างคอนกรีต ถนน สะพาน อาคาร</p>
              <div className="text-blue-600 font-medium text-sm">ผลงาน →</div>
            </div>
          </Link>

          <Link href="/portfolio/electrical" className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative h-48 mb-4">
                <Image 
                  src="/electrical1.jpg" 
                  alt="ระบบไฟฟ้า"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ระบบไฟฟ้า</h3>
              <p className="text-gray-600 text-sm mb-4">ติดตั้งระบบไฟฟ้าโรงงานอุตสาหกรรม</p>
              <div className="text-blue-600 font-medium text-sm">ผลงาน →</div>
            </div>
          </Link>

          <Link href="/portfolio/solar-cell" className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative h-48 mb-4">
                <Image 
                  src="/solar1.jpg" 
                  alt="Solar Cell"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solar Cell</h3>
              <p className="text-gray-600 text-sm mb-4">ติดตั้งระบบพลังงานแสงอาทิตย์</p>
              <div className="text-blue-600 font-medium text-sm">ผลงาน →</div>
            </div>
          </Link>

          <Link href="/portfolio/automation" className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative h-48 mb-4">
                <Image 
                  src="/automation1.jpg" 
                  alt="PLC Automation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PLC Automation</h3>
              <p className="text-gray-600 text-sm mb-4">ระบบควบคุม PLC SCADA</p>
              <div className="text-blue-600 font-medium text-sm">ผลงาน →</div>
            </div>
          </Link>

          <Link href="/portfolio/monitoring" className="group">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative h-48 mb-4">
                <Image 
                  src="/dashboard1.jpg" 
                  alt="Monitoring"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600 text-sm mb-4">ระบบ Monitoring Dashboard</p>
              <div className="text-blue-600 font-medium text-sm">ผลงาน →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
