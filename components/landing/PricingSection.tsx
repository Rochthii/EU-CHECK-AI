"use client";

import { Check } from "lucide-react";

const tiers = [
  {
    name: "Pay-per-Shipment",
    id: "tier-pay-per-shipment",
    href: "#",
    price: "1.200.000",
    currency: "VNĐ",
    period: "/lô hàng",
    description: "Giải pháp linh hoạt cho doanh nghiệp nhỏ (dưới 10 lô hàng/năm) hoặc kiểm tra đột xuất.",
    features: [
      "Thẩm định 1 bộ hồ sơ lô hàng xuất khẩu",
      "Quét AI (Spatial Engine & OCR)",
      "Cấp mã EUDR Passport (lưu 5 năm)",
      "Báo cáo lỗi trực quan",
    ],
    mostPopular: false,
  },
  {
    name: "Enterprise Professional",
    id: "tier-enterprise",
    href: "#",
    price: "15.000.000",
    currency: "VNĐ",
    period: "/tháng",
    description: "Lá chắn toàn diện cho doanh nghiệp xuất khẩu tầm trung đến lớn, khối lượng hồ sơ cao.",
    features: [
      "Quét & tiền kiểm hồ sơ KHÔNG GIỚI HẠN",
      "Module kiểm tra phát thải CBAM",
      "Quản lý phân quyền (RBAC) 4 cấp",
      "Dashboard báo cáo toàn cảnh chuỗi cung ứng",
      "Ưu tiên hỗ trợ kỹ thuật (SLA 99.9%)",
    ],
    mostPopular: true,
  },
  {
    name: "Custom Infrastructure",
    id: "tier-custom",
    href: "#",
    price: "Liên hệ",
    currency: "",
    period: "",
    description: "Giải pháp chuyên biệt cho Tập đoàn Top 10 và FDI yêu cầu hạ tầng bảo mật tuyệt đối.",
    features: [
      "Mọi tính năng gói Enterprise Pro",
      "Dedicated DB PostgreSQL RLS Server riêng",
      "Tích hợp API 2 chiều ERP / SAP",
      "Customize luồng kiểm duyệt riêng",
      "Kỹ sư hỗ trợ triển khai On-site 24/7",
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function PricingSection() {
  return (
    <section className="bg-deep-emerald py-24 sm:py-32 border-t border-white/5" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gold-400 uppercase tracking-widest font-mono">Bảng giá cước</h2>
          <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-parchment sm:text-5xl">
            Đầu Tư Cho Sự An Tâm Tuyệt Đối
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-warm-gray">
          Minh bạch, không phụ phí ẩn. Tối ưu chi phí phần mềm sao cho luôn thấp hơn ít nhất 100 lần so với rủi ro đền bù lưu kho.
        </p>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "ring-2 ring-gold-500 bg-obsidian/80" : "ring-1 ring-white/10 bg-obsidian/30",
                "rounded-3xl p-8 xl:p-10 relative flex flex-col justify-between"
              )}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                  <span className="inline-flex items-center rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-obsidian uppercase tracking-wider">
                    Khuyên Dùng
                  </span>
                </div>
              )}
              
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-gold-400" : "text-parchment",
                      "text-lg font-semibold leading-8 font-serif"
                    )}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-warm-gray">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-parchment font-mono">{tier.price}</span>
                  {tier.currency && <span className="text-sm font-semibold leading-6 text-warm-gray">{tier.currency}</span>}
                  {tier.period && <span className="text-sm font-semibold leading-6 text-warm-gray">{tier.period}</span>}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-warm-gray">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-emerald-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-gold-500 text-obsidian hover:bg-gold-400 shadow-sm"
                    : "bg-white/10 text-parchment hover:bg-white/20",
                  "mt-8 block rounded-md px-3 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all"
                )}
              >
                Bắt đầu ngay
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
