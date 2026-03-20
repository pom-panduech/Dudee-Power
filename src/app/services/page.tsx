import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 pt-16">
      <Header />
      
      {/* Services Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl mb-8">
            <div className="bg-white rounded-2xl px-8 py-4">
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                บริการของเรา
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            บริการครบวงจรด้านระบบไฟฟ้าและระบบอัตโนมัติสำหรับอุตสาหกรรม โดยทีมวิศวกรผู้เชี่ยวชาญ
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Vertical Services Layout */}
        <div className="space-y-16 mb-16">
          {/* 1. ควบคุมงานก่อสร้าง */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto order-1 md:order-1">
                {/* Main service image */}
                <Image 
                  src="/service1.jpg" 
                  alt="ควบคุมงานก่อสร้าง"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 order-2 md:order-2 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    บริการหลัก
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  รั้วกำแพงดินและงานต่อเติมบ้านพักอาศัย
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  บริหารจัดการและควบคุมงานก่อสร้าง โดยทีมวิศวกรผู้เชี่ยวชาญ 
                  ที่มีประสบการณ์สูง พร้อมระบบติดตามและควบคุมคุณภาพอย่างเข้มงวด
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">บริหารโครงการก่อสร้าง</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ควบคุมงานก่อสร้าง</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ตรวจสอบคุณภาพและความปลอดภัย</span>
                  </li>
                </ul>
                <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer">
                  <Link href="/services/construction" className="flex items-center">
                    <span>ดูรายละเอียดเพิ่มเติม</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ออกแบบระบบไฟฟ้า Autocad */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto order-1">
                {/* Main service image */}
                <Image 
                  src="/service2.jpg" 
                  alt="ออกแบบระบบไฟฟ้า Autocad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 order-2 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                    บริการด้านการออกแบบ
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  ออกแบบระบบไฟฟ้า Autocad
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  ออกแบบและวาดแบบระบบไฟฟ้าด้วยโปรแกรม Autocad โดยวิศวกรผู้เชี่ยวชาญ 
                  ผลิตแบบแปลนที่ตรงตามมาตรฐานและข้อกำหนดทางวิศวกรรม
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ออกแบบระบบจ่ายไฟกำลัง</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">วาดแบบระบบไฟฟ้าโรงงาน</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">คำนวณโหลดและขนาดสายไฟ</span>
                  </li>
                </ul>
                <div className="flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors cursor-pointer">
                  <Link href="/services/drawing" className="flex items-center">
                    <span>ดูรายละเอียดเพิ่มเติม</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3. ติดตั้งระบบไฟฟ้า */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto order-1">
                {/* Main service image */}
                <Image 
                  src="/service3.jpg" 
                  alt="ติดตั้งระบบไฟฟ้า"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 order-2 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                    บริการติดตั้ง
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  ติดตั้งระบบไฟฟ้า
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  ติดตั้งระบบไฟฟ้าโรงงาน อาคาร และอุตสาหกรรมทุกประเภท 
                  ด้วยทีมช่างผู้ชำนาญและอุปกรณ์มาตรฐาน
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ติดตั้งตู้ควบคุมไฟฟ้า</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">วางระบบสายไฟภายในอาคาร</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ติดตั้งระบบแสงสว่าง</span>
                  </li>
                </ul>
                <div className="flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors cursor-pointer">
                  <Link href="/services/electrical" className="flex items-center">
                    <span>ดูรายละเอียดเพิ่มเติม</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4. งานระบบ Solar cell */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto order-1">
                {/* Main service image */}
                <Image 
                  src="/service4.jpg" 
                  alt="งานระบบ Solar cell"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 order-2 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                    พลังงานหมุนเวียน
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  งานระบบ Solar cell
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  ติดตั้งระบบพลังงานแสงอาทิตย์ ระบบ On-Grid/Off-Grid ทุกขนาด 
                  พร้อมรับประกันและบริการหลังการขายครบวงจร
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ติดตั้งโซล่าร์เซลล์ระบบ On-Grid</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ติดตั้งระบบ Off-Grid พร้อมแบตเตอรี่</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ออกแบบโครงสร้างติดตั้งแผงโซล่าร์</span>
                  </li>
                </ul>
                <div className="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors cursor-pointer">
                  <Link href="/services/solarcell" className="flex items-center">
                    <span>ดูรายละเอียดเพิ่มเติม</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 5. ระบบ Automation PLC */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto order-1">
                {/* Main service image */}
                <Image 
                  src="/service5.jpg" 
                  alt="ระบบ Automation PLC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 order-2 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 text-sm font-semibold rounded-full">
                    ระบบอัตโนมัติ
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  ระบบ Automation PLC
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  ออกแบบและติดตั้งระบบควบคุม PLC SCADA สำหรับอุตสาหกรรม 
                  เพิ่มประสิทธิภาพการผลิตและลดต้นทุนการดำเนินงาน
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">เขียนโปรแกรม PLC ทุกรุ่น</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ออกแบบระบบ SCADA/HMI</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ติดตั้งระบบควบคุมอัตโนมัติ</span>
                  </li>
                </ul>
                <div className="flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors cursor-pointer">
                  <Link href="/services/plcAutomation" className="flex items-center">
                    <span>ดูรายละเอียดเพิ่มเติม</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 6. ระบบ Dashboard */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto order-1">
                {/* Main service image */}
                <Image 
                  src="/service6.jpg" 
                  alt="ระบบ Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 order-2 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 text-sm font-semibold rounded-full">
                    ระบบสารสนเทศ
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  ระบบ Dashboard
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  พัฒนาระบบ Monitoring Dashboard สำหรับติดตามและวิเคราะห์ข้อมูล 
                  ช่วยให้การตัดสินใจเป็นไปอย่างมีประสิทธิภาพ
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">พัฒนาหน้าจอ Monitoring แบบ Real-time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">ระบบแจ้งเตือนและรายงานอัตโนมัติ</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">วิเคราะห์ข้อมูลและสร้างกราฟ</span>
                  </li>
                </ul>
                <div className="flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors cursor-pointer">
                  <Link href="/services/monitoring" className="flex items-center">
                    <span>ดูรายละเอียดเพิ่มเติม</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          <div className="relative bg-white/90 backdrop-blur-sm p-12 rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50 rounded-2xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ต้องการปรึกษาเรื่องระบบไฟฟ้าหรืออัตโนมัติ?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                ทีมวิศวกรของเราพร้อมให้คำปรึกษาและออกแบบโซลูชันที่เหมาะสมกับธุรกิจของคุณ
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                ติดต่อเรา
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
