"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Database, Map } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroStorySection() {
  const [score, setScore] = useState(35);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(98);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-obsidian py-24 sm:py-32" id="hero">
      {/* Background Glow */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-800 to-gold-700 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="max-w-2xl lg:w-1/2">
          <div className="mb-6 flex items-center gap-x-2">
            <span className="rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold leading-6 text-gold-400 ring-1 ring-inset ring-gold-500/20">
              CẢNH BÁO EUDR 2026: HẠN CHÍNH THỨC ĐANG ĐẾN GẦN
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-parchment sm:text-6xl mb-6 leading-tight">
            Tiền Kiểm 100% Lô Hàng Cà Phê EU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
              Loại Bỏ Lỗi GeoJSON
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-warm-gray">
            Biến nguy cơ phạt 4% doanh thu toàn cầu thành lợi thế cạnh tranh. Hệ thống tự động quét 100% tài liệu bản đồ, hợp đồng thuê đất và sản lượng thu mua chỉ trong 30 giây.
          </p>
          
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#workflow" className="rounded-md bg-gold-500 px-6 py-3.5 text-sm font-semibold text-obsidian shadow-sm hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 transition-all flex items-center gap-2">
              Quét Hồ Sơ Lô Hàng Ngay <ArrowRight size={16} />
            </a>
            <a href="#roi-calculator" className="text-sm font-semibold leading-6 text-parchment hover:text-gold-400 transition-colors">
              Tính ROI Rủi Ro Lô Hàng <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-8 border-t border-white/5">
            <div className="flex flex-col items-start">
              <Map className="w-5 h-5 text-emerald-500 mb-2" />
              <span className="text-xs text-muted-slate font-medium">EUDR Art. 9(1)(d)</span>
            </div>
            <div className="flex flex-col items-start">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2" />
              <span className="text-xs text-muted-slate font-medium">EUDR Art. 3(b)</span>
            </div>
            <div className="flex flex-col items-start">
              <Cpu className="w-5 h-5 text-emerald-500 mb-2" />
              <span className="text-xs text-muted-slate font-medium">Copernicus 2020</span>
            </div>
            <div className="flex flex-col items-start">
              <Database className="w-5 h-5 text-emerald-500 mb-2" />
              <span className="text-xs text-muted-slate font-medium">PostgreSQL RLS</span>
            </div>
          </div>
        </div>

        {/* Right Dashboard Simulator */}
        <div className="lg:w-1/2 w-full perspective-1000">
          <motion.div 
            initial={{ opacity: 0, rotateY: 10, x: 20 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="rounded-2xl border border-gold-500/20 bg-deep-emerald/90 p-8 shadow-2xl backdrop-blur-xl relative"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gold-400 font-mono tracking-widest uppercase">Live Pre-Audit Simulator</h3>
              <p className="text-xs text-warm-gray mt-1">Lô hàng: EXP-2026-089 (Đắk Lắk)</p>
            </div>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative flex items-center justify-center">
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-obsidian" />
                  <motion.circle 
                    cx="96" cy="96" r="88" 
                    stroke="currentColor" 
                    strokeWidth="12" 
                    fill="transparent" 
                    strokeDasharray="552.92" 
                    initial={{ strokeDashoffset: 552.92 }}
                    animate={{ strokeDashoffset: 552.92 - (552.92 * score) / 100 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    className={score > 80 ? "text-emerald-500" : "text-red-500"} 
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <motion.span 
                    key={score}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-serif font-bold text-parchment"
                  >
                    {score}
                  </motion.span>
                  <span className="text-xs font-mono text-muted-slate mt-1">READINESS SCORE</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-obsidian/50 border border-white/5">
                <span className="text-sm text-warm-gray font-mono">GeoJSON Khép góc</span>
                {score > 80 ? (
                  <span className="text-emerald-400 text-sm font-semibold flex items-center gap-1"><ShieldCheck size={14}/> PASS</span>
                ) : (
                  <span className="text-red-400 text-sm font-semibold">MISSING POLYGON</span>
                )}
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-obsidian/50 border border-white/5">
                <span className="text-sm text-warm-gray font-mono">Hợp đồng pháp lý</span>
                {score > 80 ? (
                  <span className="text-emerald-400 text-sm font-semibold flex items-center gap-1"><ShieldCheck size={14}/> VALIDATED</span>
                ) : (
                  <span className="text-red-400 text-sm font-semibold">EXPIRED Art. 3(b)</span>
                )}
              </div>
            </div>
            
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 to-transparent rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
