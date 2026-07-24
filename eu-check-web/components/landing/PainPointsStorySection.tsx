"use client";

import { motion } from "framer-motion";
import { AlertCircle, AlertTriangle, Fingerprint, MapPin, Scale } from "lucide-react";

const painPoints = [
  {
    id: "ERR_MISSING_POLYGON",
    title: "Thiếu Polygon Khép Góc",
    subtitle: "EUDR Art. 9(1)(d)",
    description: "Vườn > 4.0 ha nộp 1 điểm GPS thay vì Polygon. Hải quan lập tức từ chối hồ sơ.",
    icon: MapPin,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  },
  {
    id: "ERR_EXPIRED_LAND_AGREEMENT",
    title: "Hợp Đồng Đất Hết Hạn",
    subtitle: "EUDR Art. 3(b)",
    description: "Bản scan hợp đồng thuê đất nông hộ hết hiệu lực nhưng nhân sự bỏ sót khi rà soát thủ công.",
    icon: Scale,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  },
  {
    id: "ERR_YIELD_EXCEEDED",
    title: "Vượt Trần Sản Lượng",
    subtitle: "Mass Balance Violation",
    description: "Cà phê mua gom vượt trần 3.500kg/ha của VICOFA, báo động nghi vấn phá rừng.",
    icon: AlertTriangle,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    id: "ERR_PRIVACY_PARANOIA",
    title: "Nỗi Lo Lộ Vùng Trồng",
    subtitle: "Bảo mật Data Doanh nghiệp",
    description: "Sợ rò rỉ cơ sở dữ liệu nông hộ và đại lý thu mua độc quyền cho đối thủ cạnh tranh.",
    icon: Fingerprint,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  }
];

export function PainPointsStorySection() {
  return (
    <section className="bg-deep-emerald py-24 sm:py-32 border-t border-white/5" id="pain-points">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gold-400 uppercase tracking-widest font-mono">Cảnh Báo Rủi Ro</h2>
          <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-parchment sm:text-4xl">
            Những Lỗi Âm Thầm <br /> Khiến Lô Hàng Bị Tịch Thu
          </p>
          <p className="mt-6 text-lg leading-8 text-warm-gray">
            Từ năm 2026, các phương pháp kiểm tra thủ công không còn tác dụng. Chỉ một lỗi nhỏ trong hàng vạn bộ hồ sơ cũng đủ khiến doanh nghiệp chịu đền bù lưu kho $15,000/container.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {painPoints.map((point, index) => (
              <motion.div 
                key={point.id} 
                className={`flex flex-col rounded-2xl border ${point.border} bg-obsidian/50 p-6 shadow-sm backdrop-blur-sm relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`absolute top-0 right-0 p-4 opacity-10 ${point.color}`}>
                  <AlertCircle size={80} />
                </div>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-parchment relative z-10">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${point.bg}`}>
                    <point.icon className={`h-6 w-6 ${point.color}`} aria-hidden="true" />
                  </div>
                  {point.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-warm-gray relative z-10">
                  <p className="flex-auto">{point.description}</p>
                  <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-wider text-muted-slate">
                    {point.subtitle}
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
