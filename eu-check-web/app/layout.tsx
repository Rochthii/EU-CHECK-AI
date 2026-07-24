import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Coffee EU-Check AI - Nền tảng Tiền kiểm Tuân thủ EUDR",
  description: "B2B Multi-Tenant SaaS Pre-Audit Platform. Tiền kiểm 100% hồ sơ cà phê xuất khẩu vào EU, loại bỏ rủi ro pháp lý EUDR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${cormorantGaramond.variable} ${jetBrainsMono.variable}`}>
      <body className="antialiased bg-obsidian text-parchment font-sans min-h-screen flex flex-col selection:bg-gold-500/30 selection:text-gold-100">
        <header className="h-16 border-b border-white/5 bg-deep-emerald/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-3">
            {/* Cán cân Themis Logo Placeholder */}
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-obsidian font-bold">
              EU
            </div>
            <span className="font-serif text-lg font-bold tracking-wide text-parchment whitespace-nowrap">
              Coffee EU-Check <span className="text-gold-500">AI</span>
            </span>
            <span className="hidden md:inline-flex ml-4 items-center rounded-full bg-emerald-900/50 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
              EUDR 2026 Ready
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-warm-gray">
            <a href="#" className="hover:text-parchment transition-colors">Trang Chủ</a>
            <a href="#pain-points" className="hover:text-parchment transition-colors">5 Lỗi Âm Thầm</a>
            <a href="#engine" className="hover:text-parchment transition-colors">Động Cơ AI</a>
            <a href="#workflow" className="hover:text-parchment transition-colors">Quy Trình</a>
            <a href="#pricing" className="hover:text-parchment transition-colors">Bảng Giá</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:text-gold-400 transition-colors hidden sm:block">Đăng Nhập</a>
            <a href="#" className="rounded-md bg-gold-500 px-4 py-2 text-sm font-semibold text-obsidian shadow-sm hover:bg-gold-400 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500">
              Dùng Thử Miễn Phí
            </a>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-white/5 bg-deep-emerald py-12 px-6 lg:px-12">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="font-serif text-2xl font-bold tracking-wide text-parchment">
                Coffee EU-Check <span className="text-gold-500">AI</span>
              </span>
              <p className="mt-4 text-sm leading-6 text-warm-gray max-w-sm">
                Nền tảng tiền kiểm tuân thủ luật chống phá rừng (EUDR) & CBAM dành cho chuỗi cung ứng cà phê Việt Nam. Khẳng định uy tín, bảo vệ doanh thu.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-parchment">Sản Phẩm</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-warm-gray hover:text-gold-400">Tính năng cốt lõi</a></li>
                <li><a href="#" className="text-sm leading-6 text-warm-gray hover:text-gold-400">Bảng giá SaaS</a></li>
                <li><a href="#" className="text-sm leading-6 text-warm-gray hover:text-gold-400">ROI Calculator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-parchment">Căn Cứ Pháp Lý</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-warm-gray hover:text-gold-400">EUDR Article 3(b)</a></li>
                <li><a href="#" className="text-sm leading-6 text-warm-gray hover:text-gold-400">EUDR Article 9(1)(d)</a></li>
                <li><a href="#" className="text-sm leading-6 text-warm-gray hover:text-gold-400">Quy định CBAM 2026</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs leading-5 text-muted-slate">&copy; 2026 Orchexa Enterprise Intelligence. All rights reserved.</p>
            <p className="text-xs text-muted-slate max-w-xl text-center md:text-right">
              Tuyên bố miễn trừ trách nhiệm: Hệ thống cung cấp công cụ thẩm định tự động và hỗ trợ doanh nghiệp chuẩn bị hồ sơ tuân thủ. Quyết định thông quan cuối cùng phụ thuộc vào Hải quan EU.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
