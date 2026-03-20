import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function PLCAutomationServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 pt-16">
      <Header />
      
      {/* Service Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
         <div className="inline-block p-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl mb-8">
            <div className="bg-white rounded-2xl px-8 py-4">
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                ระบบ Automation PLC
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content - Image and Description Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <Image
              src="/plc1.jpg"
              alt="งาน PLC ตัวอย่าง"
              width={600}
              height={450}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Description Section */}
          <div>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              ออกแบบและติดตั้งระบบควบคุม PLC SCADA สำหรับอุตสาหกรรม 
              เพิ่มประสิทธิภาพการผลิตและลดต้นทุนการดำเนินงาน
              พร้อมระบบจำลองและทดสอบก่อนการติดตั้งจริง
              เพื่อให้มั่นใจในการทำงานที่มีประสิทธิภาพสูงสุด
            </p>
            
            {/* Service Details */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl shadow-2xl p-8 border border-blue-700">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">
                บริการของเรา
              </h3>

              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start hover:translate-x-1 transition-all duration-200">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">
                    เขียนโปรแกรม PLC ทุกรุ่นครบวงจร
                  </span>
                </li>

                <li className="flex items-start hover:translate-x-1 transition-all duration-200">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">
                    ออกแบบระบบ SCADA/HMI ทันสมัย
                  </span>
                </li>

                <li className="flex items-start hover:translate-x-1 transition-all duration-200">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="leading-relaxed">
                    จำลองระบบควบคุมอัตโนมัติ
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Examples */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">ตัวอย่างผลงานของเรา</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <Image 
                src="/plc1.jpg" 
                alt="งาน PLC ตัวอย่าง 1"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <Image 
                src="/plc2.jpg" 
                alt="งาน PLC ตัวอย่าง 2"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <Image 
                src="/plc3.jpg" 
                alt="งาน PLC ตัวอย่าง 3"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Back to Services */}
        <div className="text-center mb-16">
          <Link 
            href="/services" 
            className="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            กลับไปหน้าบริการ
          </Link>
        </div>
      </div>
    </div>
  );
}
