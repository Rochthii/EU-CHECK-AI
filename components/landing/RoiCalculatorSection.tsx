"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function RoiCalculatorSection() {
  const [containers, setContainers] = useState(50);
  const [errorRate, setErrorRate] = useState(2); // 2% error rate assumption

  const storageFeePerContainer = 15000;
  const estimatedRevenuePerContainer = 100000; // $100k
  
  const estimatedContainersWithErrors = Math.ceil((containers * errorRate) / 100);
  const storageRisk = estimatedContainersWithErrors * storageFeePerContainer;
  const totalRevenue = containers * estimatedRevenuePerContainer;
  const fineRisk = totalRevenue * 0.04; // 4% fine

  const totalRisk = storageRisk + fineRisk;
  const saasCost = 15000000 * 12 / 25000; // Approx $720/year for Enterprise Pro

  return (
    <section className="bg-obsidian py-24 sm:py-32" id="roi-calculator">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-gold-400 uppercase tracking-widest font-mono">Báo Cáo Đầu Tư</h2>
          <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-parchment sm:text-4xl">
            Tính Toán Rủi Ro <br/> & Lợi Nhuận Tức Thì
          </p>
        </div>

        <div className="bg-deep-emerald/50 border border-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Controls */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-parchment mb-6">Thông số xuất khẩu</h3>
              
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <label className="text-sm font-medium text-warm-gray">Số lượng Container / Năm</label>
                  <span className="text-2xl font-mono text-gold-400 font-bold">{containers}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="500" 
                  step="5"
                  value={containers} 
                  onChange={(e) => setContainers(parseInt(e.target.value))}
                  className="w-full h-2 bg-obsidian rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-sm font-medium text-warm-gray">Tỷ lệ hồ sơ lỗi (Ước tính)</label>
                  <span className="text-2xl font-mono text-emerald-400 font-bold">{errorRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  step="1"
                  value={errorRate} 
                  onChange={(e) => setErrorRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-obsidian rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <p className="text-xs text-muted-slate mt-2 italic">Trang trại sai tọa độ, hợp đồng hết hạn...</p>
              </div>
            </div>

            {/* Results */}
            <div className="bg-obsidian rounded-2xl p-6 lg:p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="font-serif text-8xl font-black">€</span>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-sm font-medium text-warm-gray">Rủi ro đền bù lưu kho ($15k/cont)</p>
                  <p className="text-2xl font-mono font-bold text-red-400">${storageRisk.toLocaleString()}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-warm-gray">Rủi ro phạt 4% doanh thu (EUDR Art.38)</p>
                  <p className="text-2xl font-mono font-bold text-red-500">${fineRisk.toLocaleString()}</p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm font-medium text-warm-gray mb-1">Tổng rủi ro tiềm ẩn</p>
                  <p className="text-4xl font-mono font-black text-red-500 mb-6">${totalRisk.toLocaleString()}</p>

                  <div className="flex items-center justify-between p-4 bg-emerald-900/30 rounded-lg border border-emerald-500/20">
                    <p className="text-sm font-medium text-emerald-100">Chi phí phần mềm (Enterprise)</p>
                    <p className="text-xl font-mono font-bold text-emerald-400">~${Math.round(saasCost).toLocaleString()}/năm</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
