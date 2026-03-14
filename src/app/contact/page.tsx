"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = "ติดต่อจาก DU DEE POWER Website";
    const body = `ชื่อ-นามสกุล: ${formData.name}
อีเมล: ${formData.email}
เบอร์โทรศัพท์: ${formData.phone}
ชื่อบริษัท: ${formData.company || 'ไม่ระบุ'}
บริการที่สนใจ: ${formData.service}
ข้อความ: ${formData.message}`;
    
    const mailtoUrl = `mailto:panudech.ee52@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16">
      <Header />

      {/* Contact Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ติดต่อเรา
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            พร้อมให้บริการและคำปรึกษาด้านระบบไฟฟ้าและอัตโนมัติ ติดต่อเราวันนี้
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-sky-50/70 backdrop-blur-sm p-8 rounded-lg border border-sky-200">
            <h2 className="text-2xl font-bold text-sky-900 mb-6">ส่งข้อความถึงเรา</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sky-900 font-semibold mb-2">ชื่อ-นามสกุล *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-sky-100/50 border-sky-300 text-gray-900 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:border-blue-400"
                  placeholder="กรุณากรอกชื่อ-นามสกุล"
                />
              </div>
              <div>
                <label className="block text-sky-900 font-semibold mb-2">อีเมล *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-sky-100/50 border-sky-300 text-gray-900 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:border-blue-400"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sky-900 font-semibold mb-2">เบอร์โทรศัพท์ *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-sky-100/50 border-sky-300 text-gray-900 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:border-blue-400"
                  placeholder="08x-xxx-xxxx"
                />
              </div>
              <div>
                <label className="block text-sky-900 font-semibold mb-2">ชื่อบริษัท</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-sky-100/50 border-sky-300 text-gray-900 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:border-blue-400"
                  placeholder="บริษัท จำกัด"
                />
              </div>
              <div>
                <label className="block text-sky-900 font-semibold mb-2">บริการที่สนใจ *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-sky-100/50 border-sky-300 text-gray-900 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:border-blue-400"
                >
                  <option value="">เลือกบริการ</option>
                  <option value="electrical">ระบบไฟฟ้าอุตสาหกรรม</option>
                  <option value="plc">PLC Automation</option>
                  <option value="scada">ระบบ SCADA/HMI</option>
                  <option value="maintenance">บำรุงรักษา</option>
                  <option value="training">อบรมพนักงาน</option>
                  <option value="other">อื่นๆ</option>
                </select>
              </div>
              <div>
                <label className="block text-sky-900 font-semibold mb-2">ข้อความ *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-sky-100/50 border-sky-300 text-gray-900 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:border-blue-400"
                  placeholder="กรุณาระบุรายละเอียด..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-sky-50/70 backdrop-blur-sm p-8 rounded-lg border border-sky-200">
              <h2 className="text-2xl font-bold text-sky-900 mb-6">ข้อมูลติดต่อ</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-sky-600 text-2xl mr-4 mt-1">📍</div>
                  <div>
                    <h3 className="text-sky-900 font-semibold mb-1">ที่อยู่</h3>
                    <p className="text-sky-700">
                      125/254 หมู่ที่ 3 ตำบลศาลากลาง<br />
                      อำเภอบางกรวย จังหวัดนนทบุรี 11130
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-sky-600 text-2xl mr-4 mt-1">📞</div>
                  <div>
                    <h3 className="text-sky-900 font-semibold mb-1">โทรศัพท์</h3>
                    <p className="text-sky-700">+66-87-361-0569</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-sky-600 text-2xl mr-4 mt-1">✉️</div>
                  <div>
                    <h3 className="text-sky-900 font-semibold mb-1">อีเมล</h3>
                    <p className="text-sky-700">dudeepower@outlook.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-sky-600 text-2xl mr-4 mt-1">🕐</div>
                  <div>
                    <h3 className="text-sky-900 font-semibold mb-1">เวลาทำการ</h3>
                    <p className="text-sky-700">
                      จันทร์ - ศุกร์: 08:30 - 17:30<br />
                      เสาร์: 09:00 - 12:00<br />
                      อาทิตย์: ปิดทำการ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-900/40 backdrop-blur-sm p-6 rounded-lg border border-red-700">
              <div className="flex items-center mb-4">
                <div className="text-red-400 text-2xl mr-3">🚨</div>
                <h3 className="text-xl font-bold text-sky-900">ฉุกเฉิน 24 ชั่วโมง</h3>
              </div>
              <p className="text-sky-900 font-bold mb-2">
                สำหรับกรณีฉุกเฉินด้านระบบไฟฟ้าและอัตโนมัติ
              </p>
              <a href="tel:+66873610569" className="text-sky-900 font-bold text-lg hover:text-sky-700 transition-colors">0873610569</a>
            </div>

            {/* Social Media */}
            <div className="bg-sky-50/70 backdrop-blur-sm p-6 rounded-lg border border-sky-200">
              <h3 className="text-xl font-bold text-sky-900 mb-4">ติดตามเรา</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61584888801917" target="_blank" rel="noopener noreferrer" className="bg-sky-600 hover:bg-sky-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <span>f</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-sky-900 mb-6 text-center">แผนที่บริษัท</h2>
          <div className="bg-sky-50/70 backdrop-blur-sm p-8 rounded-lg border border-sky-200 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sky-600 text-5xl mb-4">🗺️</div>
              <p className="text-sky-700 mb-4">แผนที่ Google Maps จะแสดงที่นี่</p>
              <p className="text-sky-700 text-sm">
                สามารถ embed Google Maps หรือใช้ Map API ได้
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
