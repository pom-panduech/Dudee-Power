import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DU DEE POWER - ระบบไฟฟ้าและ PLC Automation",
  description: "บริการออกแบบ ติดตั้ง และบำรุงรักษาระบบไฟฟ้าอุตสาหกรรม ระบบควบคุมอัตโนมัติ PLC โดยทีมวิศวกรผู้เชี่ยวชาญ",
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
