"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Dữ liệu vùng trồng của doanh nghiệp tôi có bị rò rỉ cho đối thủ không?",
    answer: "Tuyệt đối không. Hệ thống được xây dựng trên kiến trúc PostgreSQL Row-Level Security (RLS) Multi-Tenant. Dữ liệu của từng doanh nghiệp được cô lập và mã hóa ở cấp độ database. Thậm chí quản trị viên hệ thống cũng không thể truy xuất dữ liệu vùng trồng của bạn.",
  },
  {
    question: "Hệ thống đáp ứng điều khoản lưu trữ 5 năm của EUDR như thế nào?",
    answer: "Theo Article 31 của EUDR, hồ sơ truy xuất phải được lưu giữ 5 năm. Coffee EU-Check AI tự động đóng gói toàn bộ bản đồ GeoJSON, giấy tờ pháp lý và Readiness Score vào một chuẩn mã hóa QR EUDR Passport, lưu trữ bảo mật trên đám mây liên tục 5 năm để xuất trình bất cứ lúc nào.",
  },
  {
    question: "Nếu nông hộ nhà vườn không biết vẽ bản đồ Polygon thì sao?",
    answer: "Hệ thống có tính năng hỗ trợ nhập liệu thô. Nếu bản đồ bị sai hoặc chỉ là 1 điểm GPS (Point), hệ thống sẽ cảnh báo lỗi ERR_MISSING_POLYGON và có module hướng dẫn bộ phận thực địa vẽ lại nhanh chóng trên mobile app vệ tinh.",
  },
  {
    question: "Phần mềm có kiểm tra được các hợp đồng thuê đất viết tay không?",
    answer: "Có. Chúng tôi tích hợp Gemini 2.5 Flash OCR, công nghệ nhận dạng ký tự thông minh. Nó có khả năng đọc chính xác chữ viết tay, con dấu và tự động phân tích tính hợp lệ của ngày tháng trên sổ đỏ, hợp đồng thuê khoán.",
  },
  {
    question: "Sau EUDR, phần mềm có hỗ trợ báo cáo Carbon (CBAM) không?",
    answer: "Có. Module CBAM đã được chúng tôi tích hợp vào các gói Enterprise. Nó tự động thu thập và tính toán dữ liệu tiêu hao nhiên liệu sấy (điện, than, trấu) để tạo báo cáo phát thải Carbon theo chuẩn châu Âu.",
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-obsidian py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-parchment font-serif mb-10 text-center sm:text-4xl">
            Câu Hỏi Thường Gặp Về Pháp Lý
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left text-parchment focus:outline-none"
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDown
                        className={`h-5 w-5 text-gold-400 transition-transform duration-300 ${
                          openIndex === index ? "-rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.dd
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pr-12 overflow-hidden"
                    >
                      <p className="text-base leading-7 text-warm-gray">{faq.answer}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="mt-24 sm:mt-32 border border-gold-500/20 rounded-3xl bg-gradient-to-r from-emerald-900/40 to-obsidian p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          <h2 className="text-3xl font-bold tracking-tight text-parchment sm:text-4xl font-serif relative z-10">
            Sẵn sàng bảo vệ doanh thu của bạn?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-warm-gray relative z-10">
            Khủng hoảng pháp lý luôn đến bất ngờ. Đừng để một điểm GPS sai khiến bạn mất 4% doanh thu toàn cầu. Bắt đầu tiền kiểm hồ sơ với AI ngay hôm nay.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 relative z-10">
            <a
              href="#"
              className="rounded-md bg-gold-500 px-8 py-4 text-base font-semibold text-obsidian shadow-sm hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:scale-105"
            >
              Dùng Thử Nền Tảng (Miễn Phí)
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-parchment hover:text-gold-400 transition-colors">
              Liên Hệ Đội Sales Tập Đoàn <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
