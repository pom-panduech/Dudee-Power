import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16">
      <Header />

      {/* About Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ผู้เชี่ยวชาญด้านระบบไฟฟ้าและอัตโนมัติอุตสาหกรรม มากกว่า 10 ปีประสบการณ์
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">เรื่องราวของเรา</h2>
            <p className="text-gray-600 mb-4">
              DU DEE POWER ก่อตั้งขึ้นในปี 2550 โดยทีมวิศวกรไฟฟ้าที่มีประสบการณ์ในอุตสาหกรรม
              ด้วยความมุ่งมั่นที่จะให้บริการด้านระบบไฟฟ้าและอัตโนมัติที่มีคุณภาพสูงสุด
            </p>
            <p className="text-gray-600 mb-4">
              เราเริ่มจากการให้บริการติดตั้งระบบไฟฟ้าในโรงงานขนาดเล็ก และขยายธุรกิจไปสู่การเป็นผู้ให้บริการ
              ระบบอัตโนมัติและ PLC ครบวงจรสำหรับอุตสาหกรรมขนาดใหญ่
            </p>
            <p className="text-gray-600">
              ปัจจุบันเราเป็นพันธมิตรที่เชื่อถือได้ของลูกค้าในหลากหลายอุตสาหกรรม ทั้งในประเทศและต่างประเทศ
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">วิสัยทัศน์ของเรา</h3>
            <p className="text-gray-600 mb-4">
              "เป็นผู้นำด้านโซลูชันระบบไฟฟ้าและอัตโนมัติที่เชื่อถือได้มากที่สุดในประเทศไทย"
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">พันธกิจของเรา</h3>
            <ul className="text-gray-600 space-y-3">
              <li>• มอบโซลูชันที่มีประสิทธิภาพและปลอดภัยสูงสุด</li>
              <li>• พัฒนานวัตกรรมเพื่อเพิ่มประสิทธิภาพการผลิต</li>
              <li>• สร้างความยั่งยืนให้ลูกค้าและสังคม</li>
              <li>• พัฒนาบุคลากรให้มีความเชี่ยวชาญสูงสุด</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
            <div className="text-3xl font-bold text-gray-600 mb-2">15+</div>
            <div className="text-gray-600">ปีประสบการณ์</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
            <div className="text-3xl font-bold text-gray-600 mb-2">200+</div>
            <div className="text-gray-600">โครงการที่สำเร็จ</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
            <div className="text-3xl font-bold text-gray-600 mb-2">50+</div>
            <div className="text-gray-600">ทีมวิศวกร</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
            <div className="text-3xl font-bold text-gray-600 mb-2">98%</div>
            <div className="text-gray-600">ความพึงพอใจ</div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ทีมผู้เชี่ยวชาญของเรา</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-900 text-2xl font-bold">วศ.</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">วิศวกรไฟฟ้า</h3>
              <p className="text-gray-600 text-sm mb-3">ประสบการณ์ 10+ ปี</p>
              <p className="text-gray-600 text-sm">
                ผู้เชี่ยวชาญด้านการออกแบบระบบไฟฟ้าอุตสาหกรรมและระบบกำลัง
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-900 text-2xl font-bold">PLC</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">วิศวกรอัตโนมัติ</h3>
              <p className="text-gray-600 text-sm mb-3">ประสบการณ์ 8+ ปี</p>
              <p className="text-gray-600 text-sm">
                ผู้เชี่ยวชาญด้านระบบควบคุม PLC SCADA และระบบอัตโนมัติ
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-900 text-2xl font-bold">IT</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">วิศวกร IT</h3>
              <p className="text-gray-600 text-sm mb-3">ประสบการณ์ 6+ ปี</p>
              <p className="text-gray-600 text-sm">
                ผู้เชี่ยวชาญด้านระบบเครือข่ายและการเชื่อมต่อระบบอุตสาหกรรม
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">มาตรฐานและการรับรอง</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
              <div className="text-sky-600 text-3xl mb-3">🏆</div>
              <h3 className="text-gray-900 font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600 text-sm">ระบบบริหารคุณภาพ</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
              <div className="text-sky-600 text-3xl mb-3">⚡</div>
              <h3 className="text-gray-900 font-semibold mb-2">มอก. 634</h3>
              <p className="text-gray-600 text-sm">มาตรฐานระบบไฟฟ้า</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
              <div className="text-sky-600 text-3xl mb-3">🔒</div>
              <h3 className="text-gray-900 font-semibold mb-2">IEC 61131</h3>
              <p className="text-gray-600 text-sm">มาตรฐาน PLC</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
              <div className="text-sky-600 text-3xl mb-3">🛡️</div>
              <h3 className="text-gray-900 font-semibold mb-2">OHSAS 18001</h3>
              <p className="text-gray-600 text-sm">ความปลอดภัย</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            พร้อมทำงานร่วมกับเราหรือไม่?
          </h2>
          <p className="text-gray-600 mb-6">
            ติดต่อเราวันนี้เพื่อปรึกษาโซลูชันระบบไฟฟ้าและอัตโนมัติที่เหมาะสมกับธุรกิจของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              ติดต่อเรา
            </Link>
            <Link href="/services" className="bg-white border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-8 rounded-lg transition-colors">
              ดูบริการ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
