"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />

      {/* Hero Section with Image */}
      <div className="relative h-screen min-h-[600px] w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/hero-bg.jpg" 
            alt="DU DEE POWER Hero Background" 
            fill
            className="object-cover w-full h-full brightness-125"
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
                  </div>
        
        {/* Hero Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-8 md:p-12">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight drop-shadow-lg">
                DU DEE POWER
              </h1>
              {/* <p className="text-2xl md:text-3xl text-white font-semibold mb-12 max-w-4xl mx-auto">
                บริการก่อสร้างและติดตั้งระบบครบวงจร โยธา ไฟฟ้า พลังงาน และอัตโนมัติ
                พร้อมทีมวิศวกรผู้เชี่ยวชาญกว่า 15 ปี
              </p> */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-2xl text-lg">
                  ติดต่อเรา
                </Link>
                <Link href="/services" className="bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-2xl text-lg">
                  บริการ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Vertical Scroll Section */}
        <div className="mt-20 space-y-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">รับเหมาก่อสร้าง</h2>
              <p className="text-xl text-gray-600 mb-8">
                รับเหมาก่อสร้างโครงสร้างคอนกรีต ถนน สะพาน อาคาร และโยธาครบวงจร
                ด้วยทีมวิศวกรผู้เชี่ยวชาญและประสบการณ์กว่า 15 ปี
              </p>
              <Link href="/portfolio/construction" className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                ผลงาน
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Image 
                  src="/construction1.jpg" 
                  alt="รับเหมาก่อสร้าง" 
                  width={600} 
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">งานระบบไฟฟ้า</h2>
              <p className="text-xl text-gray-600 mb-8">
                ติดตั้งระบบไฟฟ้าโรงงาน ระบบจ่ายไฟ ระบบส่งกำลัง และระบบควบคุมไฟฟ้า
                พร้อมมาตรฐานความปลอดภัยสูงสุดและทีมวิศวกรไฟฟ้า
              </p>
              <Link href="/portfolio/electrical" className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                ผลงาน
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Image 
                  src="/electrical1.jpg" 
                  alt="งานระบบไฟฟ้า" 
                  width={600} 
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">งานระบบ Solar Cell</h2>
              <p className="text-xl text-gray-600 mb-8">
                ติดตั้งระบบพลังงานแสงอาทิตย์ On-Grid Off-Grid และ Hybrid
                ลดต้นทุนพลังงานและเพิ่มประสิทธิภาพการผลิตสำหรับอุตสาหกรรม
              </p>
              <Link href="/portfolio/solar-cell" className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                ผลงาน
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Image 
                  src="/solar1.jpg" 
                  alt="งานระบบ Solar Cell" 
                  width={600} 
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">ระบบ PLC HMI SCADA</h2>
              <p className="text-xl text-gray-600 mb-8">
                ออกแบบและติดตั้งระบบควบคุมอัตโนมัติ PLC HMI SCADA
                สำหรับอุตสาหกรรมทุกประเภท พร้อมทีมโปรแกรมเมอร์ผู้เชี่ยวชาญ
              </p>
              <Link href="/portfolio/automation" className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                ผลงาน
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Image 
                  src="/automation1.jpg" 
                  alt="ระบบ PLC HMI SCADA" 
                  width={600} 
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">ระบบ Real Time Monitoring Dashboard</h2>
              <p className="text-xl text-gray-600 mb-8">
                พัฒนาระบบ monitoring แบบ Real-time ติดตามการทำงานเครื่องจักร
                วิเคราะห์ข้อมูล แจ้งเตือน และรายงานผลการผลิตอัตโนมัติ
              </p>
              <Link href="/portfolio/monitoring" className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                ผลงาน
              </Link>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Image 
                  src="/dashboard1.jpg" 
                  alt="ระบบ Real Time Monitoring Dashboard" 
                  width={600} 
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Bottom spacing for scroll */}
      <div className="py-20"></div>
    </div>
  );
}
