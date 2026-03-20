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
          <div className="inline-block p-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl mb-8">
            <div className="bg-white rounded-2xl px-8 py-4">
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                ติดต่อเรา
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            พร้อมให้บริการและคำปรึกษาด้านระบบไฟฟ้าและอัตโนมัติ ติดต่อเราวันนี้
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl shadow-2xl p-8 border border-blue-700">
              <h2 className="text-2xl font-bold text-white mb-6">ข้อมูลติดต่อ</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">ที่อยู่</h3>
                    <p className="text-blue-100">
                      125/254 หมู่ที่ 3 ตำบลศาลากลาง<br />
                      อำเภอบางกรวย จังหวัดนนทบุรี 11130
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">โทรศัพท์</h3>
                    <p className="text-blue-100">+66-87-361-0569</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">อีเมล</h3>
                    <p className="text-blue-100">dudeepower@outlook.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mr-4 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">เวลาทำการ</h3>
                    <p className="text-blue-100">
                      จันทร์ - ศุกร์: 08:30 - 17:30<br />
                      เสาร์: 09:00 - 12:00<br />
                      อาทิตย์: ปิดทำการ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency and Social */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-900/90 via-red-800 to-red-700 rounded-2xl shadow-2xl p-6 border border-red-600">
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 p-2 rounded-lg mr-3 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">ฉุกเฉิน 24 ชั่วโมง</h3>
                </div>
                <p className="text-red-100 font-semibold mb-2">
                  สำหรับกรณีฉุกเฉินด้านระบบไฟฟ้าและอัตโนมัติ
                </p>
                <a href="tel:+66873610569" className="text-white font-bold text-lg hover:text-red-200 transition-colors">0873610569</a>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl shadow-2xl p-6 border border-blue-700">
                <h3 className="text-xl font-bold text-white mb-4">ติดตามเรา</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=61584888801917" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
