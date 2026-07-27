"use client";

import { motion } from "framer-motion";
import { UploadCloud, Zap, Activity, FileCheck2 } from "lucide-react";

const steps = [
  {
    id: "01",
    name: "Tải Hồ Sơ Khối Lượng Lớn",
    description: "Nhập hàng loạt GeoJSON, KML và bản scan PDF Hợp đồng từ các HTX/Đại lý chỉ bằng 1 thao tác kéo thả.",
    icon: UploadCloud,
  },
  {
    id: "02",
    name: "Tiền Kiểm Đa Chiều",
    description: "Hệ thống tự động rà quét chéo tọa độ, xác thực tính hợp pháp giấy tờ bằng AI và đối soát trần sản lượng trong dưới 30 giây.",
    icon: Zap,
  },
  {
    id: "03",
    name: "Cấp Readiness Score",
    description: "Đánh giá thang điểm tuân thủ (0-100). Tự động khoanh vùng cảnh báo đỏ các rủi ro chết người cần khắc phục ngay.",
    icon: Activity,
  },
  {
    id: "04",
    name: "Phát Hành Passport",
    description: "Kết xuất bộ hồ sơ chuẩn Annex II dạng PDF. Cấp mã QR EUDR Passport mã hóa, lưu trữ an toàn trong suốt 5 năm.",
    icon: FileCheck2,
  },
];

export function WorkflowStepsSection() {
  return (
    <section className="bg-deep-emerald py-24 sm:py-32 border-t border-white/5" id="workflow">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gold-400 uppercase tracking-widest font-mono">Quy trình vận hành</h2>
          <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-parchment sm:text-4xl">
            Từ Dữ Liệu Thô <br /> Đến Hành Động An Toàn
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-4 lg:gap-x-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                className="relative pl-16 lg:pl-0 lg:pt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/10 border border-gold-500/20 lg:left-0 lg:top-0">
                  <step.icon className="h-6 w-6 text-gold-400" aria-hidden="true" />
                </div>
                {/* Connector Line for Desktop */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-14 w-full h-[1px] bg-gradient-to-r from-gold-500/30 to-transparent z-0" />
                )}
                
                <h3 className="mt-4 font-mono text-4xl font-black text-white/5 absolute -top-4 right-4 lg:top-8 lg:right-auto lg:left-0 z-0">
                  {step.id}
                </h3>
                
                <h3 className="text-lg font-semibold leading-8 text-parchment font-serif relative z-10 lg:mt-4">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-warm-gray relative z-10">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
