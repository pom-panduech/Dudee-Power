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
        <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl border border-gray-200 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              เรื่องราวของเรา (Our Story)
            </h2>
            <p className="text-xl text-blue-600 font-semibold mb-8">
              "รากฐานที่แข็งแกร่ง จากความเชี่ยวชาญสู่นวัตกรรมวิศวกรรมที่ยั่งยืน"
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              บริษัท ดู ดี พาวเวอร์ จำกัด (DU DEE POWER) ก่อตั้งขึ้นบนเจตนารมณ์ที่ต้องการยกระดับมาตรฐานงานวิศวกรรมในประเทศไทย เราเริ่มต้นเส้นทางจากการรวมตัวของกลุ่มวิศวกรไฟฟ้าที่มีประสบการณ์เข้มข้นในสายงานอุตสาหกรรม โดยมีหมุดหมายสำคัญคือการส่งมอบงานระบบไฟฟ้าและระบบอัตโนมัติที่ไม่ใช่แค่ "ใช้งานได้" แต่ต้อง "ดีที่สุดและปลอดภัยที่สุด" ตามหลักวิศวกรรมสากล
            </p>
            <p>
              จากจุดเริ่มต้นในการให้บริการติดตั้งระบบไฟฟ้าสำหรับสถานประกอบการและโรงงานขนาดเล็ก เราได้พิสูจน์ให้เห็นถึงความใส่ใจในทุกรายละเอียด ความซื่อสัตย์ต่อวิชาชีพ และที่สำคัญที่สุดคือ "ความรับผิดชอบต่อคำมั่นสัญญา" ทำให้ DU DEE POWER ได้รับความไว้วางใจอย่างรวดเร็ว จนสามารถขยายขอบเขตบริการสู่การเป็นผู้เชี่ยวชาญด้านระบบอัตโนมัติ (Automation) และการควบคุมผ่าน PLC ครบวงจร สำหรับอุตสาหกรรมขนาดใหญ่และโครงการโครงสร้างพื้นฐานที่ซับซ้อน
            </p>
            <p>
              เราไม่ได้มองว่าตัวเองเป็นเพียงผู้รับเหมา แต่เราคือ "ที่ปรึกษาและพันธมิตรทางยุทธศาสตร์" ของคู่ค้า ปัจจุบัน DU DEE POWER ภาคภูมิใจที่ได้รับความไว้วางใจจากลูกค้าหลากหลายกลุ่ม ทั้งโรงงานอุตสาหกรรมชั้นนำ อาคารพาณิชย์ และโครงการระดับประเทศ ด้วยการผสานองค์ความรู้ทางวิศวกรรมแบบดั้งเดิมเข้ากับเทคโนโลยีสมัยใหม่ เช่น Industrial IoT และ Dashboard Monitoring เพื่อขับเคลื่อนธุรกิจของลูกค้าให้ก้าวทันโลกยุคดิจิทัลอย่างมั่นคง โดยเรายังคงยึดถือคติพจน์สำคัญคือ "ใส่ใจทุกขั้นตอน พัฒนาตนเองไม่หยุดยั้ง และไม่มีคำว่าทิ้งงาน"
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-2xl shadow-xl mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              วิสัยทัศน์ของเรา (Our Vision)
            </h2>
            <p className="text-xl text-white/90 font-medium leading-relaxed">
              "มุ่งสู่การเป็นผู้นำด้านโซลูชันวิศวกรรมไฟฟ้าและเทคโนโลยีอัตโนมัติที่ได้รับความไว้วางใจสูงสุดในระดับภูมิภาค โดยยึดมั่นในมาตรฐานสากลและความยั่งยืนของนวัตกรรม"
            </p>
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-center leading-relaxed">
              เรามุ่งหวังที่จะเป็น "มาตรฐานใหม่" ของวงการวิศวกรรมไทย ที่ซึ่งคุณภาพงานระดับสูงมาพร้อมกับความคุ้มค่าและความรับผิดชอบ โดยเราจะไม่หยุดนิ่งในการแสวงหาเทคโนโลยีที่ดีที่สุดเพื่อส่งมอบความได้เปรียบในการแข่งขันให้กับลูกค้าของเรา
            </p>
          </div>
        </div>

        

        {/* CTA with Download */}
        <div className="text-center bg-white/90 backdrop-blur-sm p-12 rounded-2xl border border-gray-200 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Download Company Profile
          </h2>
          <p className="text-gray-600 mb-8">
            ติดต่อเราวันนี้เพื่อปรึกษาโซลูชันระบบไฟฟ้าและอัตโนมัติที่เหมาะสมกับธุรกิจของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              ติดต่อเรา
            </Link>
            <Link href="/services" className="bg-white border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-8 rounded-lg transition-colors">
              ดูบริการ
            </Link>
            <a 
              href="/company-profile.pdf" 
              download="DU-DEE-POWER-Company-Profile.pdf"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Company Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
