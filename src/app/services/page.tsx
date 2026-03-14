import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16">
      <Header />

      {/* Services Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            บริการของเรา
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            บริการครบวงจรด้านระบบไฟฟ้าและระบบอัตโนมัติสำหรับอุตสาหกรรม โดยทีมวิศวกรผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Electrical Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ระบบไฟฟ้าอุตสาหกรรม</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-3xl mb-4 rounded-lg p-3 text-center">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ออกแบบระบบไฟฟ้า</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ระบบไฟฟ้าโรงงาน</li>
                <li>• ระบบจ่ายไฟกำลัง</li>
                <li>• ระบบฉุกเฉิน UPS</li>
                <li>• ระบบสายดิน</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-purple-500 to-teal-500 text-white text-3xl mb-4 rounded-lg p-3 text-center">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ติดตั้งระบบไฟฟ้า</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ตู้ควบคุมไฟฟ้า</li>
                <li>• ระบบสายไฟ</li>
                <li>• อุปกรณ์ไฟฟ้า</li>
                <li>• ระบบแสงสว่าง</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white text-3xl mb-4 rounded-lg p-3 text-center">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ทดสอบและตรวจสอบ</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ทดสอบระบบ</li>
                <li>• ตรวจสอบความปลอดภัย</li>
                <li>• วัดประสิทธิภาพ</li>
                <li>• ออกรายงาน</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PLC Automation Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">PLC Automation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-3xl mb-4 rounded-lg p-3 text-center">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ระบบ PLC</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Siemens S7-1200/1500</li>
                <li>• Mitsubishi FX/Q Series</li>
                <li>• Allen-Bradley</li>
                <li>• Omron</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-purple-500 to-teal-500 text-white text-3xl mb-4 rounded-lg p-3 text-center">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ระบบ SCADA/HMI</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ออกแบบหน้าจอควบคุม</li>
                <li>• ระบบแจ้งเตือน</li>
                <li>• รายงานข้อมูล</li>
                <li>• บันทึกข้อมูล</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white text-3xl mb-4 rounded-lg p-3 text-center">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ระบบอัตโนมัติ</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ระบบคอนเวเยอร์</li>
                <li>• ระบบบรรจุภัณฑ์</li>
                <li>• ระบบคัดแยก</li>
                <li>• ระบบจัดเก็บ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Maintenance Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">บริการหลังการขาย</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-3xl mb-4 rounded-lg p-3 text-center">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">บำรุงรักษา</h3>
              <p className="text-gray-600 mb-4">
                บริการบำรุงรักษาระบบไฟฟ้าและอัตโนมัติทุกประเภท 
                เพื่อให้ระบบทำงานอย่างต่อเนื่องและมีประสิทธิภาพสูงสุด
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• ตรวจเช็คประจำเดือน</li>
                <li>• ซ่อมแซงฉุกเฉิน</li>
                <li>• อัพเกรดระบบ</li>
                <li>• ให้คำปรึกษา</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg">
              <div className="bg-gradient-to-r from-purple-500 to-teal-500 text-white text-3xl mb-4 rounded-lg p-3 text-center">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">อบรมพนักงาน</h3>
              <p className="text-gray-600 mb-4">
                จัดอบรมพนักงานของท่านให้มีความรู้ความเข้าใจในการใช้งาน
                และบำรุงรักษาระบบไฟฟ้าและอัตโนมัติอย่างถูกต้อง
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• การใช้งานระบบ</li>
                <li>• การแก้ไขปัญหาเบื้องต้น</li>
                <li>• การบำรุงรักษา</li>
                <li>• มาตรฐานความปลอดภัย</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ต้องการปรึกษาเรื่องระบบไฟฟ้าหรืออัตโนมัติ?
          </h2>
          <p className="text-gray-600 mb-6">
            ทีมวิศวกรของเราพร้อมให้คำปรึกษาและออกแบบโซลูชันที่เหมาะสมกับธุรกิจของคุณ
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </div>
  );
}
