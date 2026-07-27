"use client";

import { motion } from "framer-motion";
import { DatabaseZap, FileScan, Map, ShieldCheck } from "lucide-react";

const engines = [
  {
    name: "PostGIS Spatial & Copernicus Base",
    description: "Động cơ quét đa không gian tự động vẽ và xác thực 100% Polygon nông hộ. Đối soát giao thoa trực tiếp với bản đồ rừng Copernicus 2020 để xác nhận không vi phạm phá rừng.",
    icon: Map,
  },
  {
    name: "Gemini 2.5 Flash OCR Auditor",
    description: "Mắt thần AI đọc và bóc tách dữ liệu từ hàng vạn bản scan giấy tờ tay (Sổ đỏ, Hợp đồng). Tự động tính toán ngày hết hạn hợp pháp so với ngày dự kiến xuất cảng.",
    icon: FileScan,
  },
  {
    name: "Mass Balance Yield Guard",
    description: "Lá chắn cân bằng khối lượng khu vực. Tự động từ chối các mã QR lô hàng vượt quá định mức 3.500 kg/ha, ngăn chặn triệt để hành vi trộn lẫn cà phê trôi nổi.",
    icon: DatabaseZap,
  },
  {
    name: "PostgreSQL Row-Level Security",
    description: "Kiến trúc dữ liệu siêu cách ly. Toàn bộ vùng trồng và danh sách nông hộ của doanh nghiệp được mã hóa tách biệt. Ngay cả Admin hệ thống cũng không thể truy xuất chéo.",
    icon: ShieldCheck,
  },
];

export function SolutionEngineSection() {
  return (
    <section className="bg-obsidian py-24 sm:py-32 relative" id="engine">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-emerald-400 font-mono tracking-widest uppercase">Động cơ lõi</h2>
          <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-parchment sm:text-4xl">
            Tổ Hợp AI & GIS <br/> Enterprise-Grade
          </p>
          <p className="mt-6 text-lg leading-8 text-warm-gray">
            Cấu trúc 4 lớp bảo vệ độc lập, xử lý song song, giải quyết trọn vẹn cả khía cạnh Dữ liệu địa lý (GIS) lẫn Hồ sơ pháp lý (Legal OCR).
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {engines.map((engine, index) => (
              <motion.div 
                key={engine.name} 
                className="flex flex-col relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-800 to-obsidian border border-emerald-500/20 group-hover:border-emerald-400/50 transition-colors">
                    <engine.icon className="h-6 w-6 text-emerald-400" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-parchment font-serif">
                    {engine.name}
                  </dt>
                </div>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-warm-gray border-l-2 border-emerald-900/50 pl-6 ml-6">
                  <p className="flex-auto">{engine.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
