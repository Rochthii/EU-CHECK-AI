# 📄 THIẾT KẾ BAN ĐẦU: SITEMAP & BỐI CẢNH SẢN PHẨM LANDING PAGE
**Dự án:** Coffee EU-Check AI - Nền tảng Tiền kiểm Tuân thủ EUDR & CBAM Cho Cà Phê Việt Nam

---

## ⚡ 1. BỐI CẢNH SẢN PHẨM (PRODUCT CONTEXT)

- **Tên Sản Phẩm:** Coffee EU-Check AI (B2B Multi-Tenant SaaS Pre-Audit Platform).
- **Thị Trường Target:** Doanh nghiệp Xuất khẩu Cà phê Việt Nam (Robusta & Arabica Tây Nguyên: Đắk Lắk, Lâm Đồng, Gia Lai, Đắk Nông).
- **Nỗi Đau & Vấn Đề Cốt Lõi:** Từ 2026, Liên minh Châu Âu (EU) áp dụng luật EUDR (EU Regulation 2023/1115) & CBAM. Hải quan EU sẽ tịch thu hoặc đình chỉ tờ khai nếu lô hàng dính 3 lỗi chết người:
  - 🔴 **GeoJSON Point vs Polygon (EUDR Art. 9(1)(d)):** Vườn >4.0 ha chỉ nộp 1 điểm GPS Point thay vì Polygon khép góc.
  - 🔴 **Pháp Lý Đất Đai (EUDR Art. 3(b)):** Hợp đồng thuê/khoán đất nông hộ hết hiệu lực trước ngày mở tờ khai xuất khẩu.
  - 🔴 **Mass Balance Violation (EUDR Art. 10):** Mua gom cà phê trôi nổi làm tổng sản lượng lô hàng vượt trần VICOFA (3.500 kg/ha).
- **Giải Pháp Nền Tảng:** Đóng vai trò "Kiểm toán viên AI Nội bộ" — Quét 100% tài liệu địa lý (Turf.js & PostGIS Engine), đọc hợp đồng scan (Gemini 2.5 Flash OCR), tính toán chỉ số Readiness Score (0-100) + Báo cáo Action Plan PDF chuẩn EUDR Annex II + Cấp mã EUDR Passport lưu trữ 05 năm (Art. 31) trước khi hàng xuống tàu.
- **Ai Trả Tiền:** Giám đốc Xuất khẩu & Giám đốc Tài chính (CFO) Doanh nghiệp vì nguy cơ bị phạt 4% doanh thu toàn cầu (EUDR Art. 38) + $15,000/container phí đền lưu kho cảng EU cao gấp 100 lần phí phần mềm.
- **Mô Hình Thu Phí SaaS:**
  - 🟢 **Pay-per-Shipment:** 1.200.000 VNĐ / lô hàng xuất khẩu (~$50 USD).
  - 🔵 **Enterprise Professional:** 15.000.000 VNĐ / tháng (Thanh toán năm - Quét không giới hạn + RBAC 4 Cấp + CBAM).
  - 🟣 **Custom Infrastructure:** Báo giá B2B Tập đoàn Top 10 (Dedicated Supabase RLS + API ERP/SAP).

---

## 🗺️ 2. SƠ ĐỒ SITEMAP LANDING PAGE (/landing hoặc /)

Trang Landing Page được thiết kế như một cuốn tiểu thuyết B2B 6 chương theo mô hình **Phễu Kể Chuyện Chuyển Đổi (Storytelling Sales Funnel)**, dẫn dắt khách hàng từ Cảnh báo khủng hoảng → Vạch trần 5 thói quen âm thầm → Trình diễn động cơ AI & GIS → Quy trình 4 bước → Bảng tính ROI kinh tế → Bảng giá SaaS & Đăng ký dùng thử.

```text
┌─────────────────────────────────────────────────────────────────────────────────┐
│              SƠ ĐỒ CẤU TRÚC DẠNG CÂY CHO LANDING PAGE                          │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 🌐 LANDING PAGE BÁN HÀNG TỔNG THỂ (/landing hoặc /)                             │
│ ├── 1. Thanh Header Siêu Gọn Simplamo Style (Navbar Section)                    │
│ │   ├── 1.1. Logo Icon Emerald, Chữ Coffee EU-Check & Badge EUDR                 │
│ │   ├── 1.2. Menu Sitemap: Trang chủ, Giải Pháp ▾, 5 Lỗi Âm Thầm, Quy Trình, v.v. │
│ │   └── 1.3. Bộ đôi Nút CTA: Đăng Nhập & Dùng Thử Miễn Phí (dẫn vào /dashboard)  │
│ │                                                                               │
│ ├── 2. Hero Section: Lời Hứa Pre-Audit & Live Simulator (#hero)                │
│ │   ├── 2.1. Badge bối cảnh: "CẢNH BÁO EUDR 2026: HẠN CHÍNH THỨC ĐANG ĐẾN GẦN"    │
│ │   ├── 2.2. Tiêu đề: "Tiền Kiểm 100% Lô Hàng Cà Phê EU — Loại Bỏ Lỗi GeoJSON"   │
│ │   ├── 2.3. Thẻ tương tác Live Pre-Audit Simulator (Chưa quét 35 -> Sửa AI 98)  │
│ │   └── 2.4. 4 Badge căn cứ: EUDR Art. 9(1)(d), Art. 3(b), Copernicus, RLS       │
│ │                                                                               │
│ ├── 3. Chương 1: Phân Tích 5 Thói Quen Âm Thầm (#pain-points)                   │
│ │   ├── 3.1. 🔴 ERR_MISSING_POLYGON: Vườn >4.0 ha nộp 1 điểm GPS Point          │
│ │   ├── 3.2. 🔴 ERR_EXPIRED_LAND_AGREEMENT: Hợp đồng đất nông hộ hết hạn       │
│ │   ├── 3.3. 🔴 ERR_YIELD_EXCEEDED: Cà phê trôi nổi vượt trần 3.500kg/ha VICOFA │
│ │   ├── 3.4. 🟢 ERR_PRIVACY_PARANOIA: Sợ rò rỉ vùng thu mua (RLS PostgreSQL)   │
│ │   └── 3.5. 🔵 ERR_CBAM_PROCRASTINATION: Trì hoãn báo cáo carbon sấy 2026     │
│ │                                                                               │
│ ├── 4. Chương 2: Bộ Máy AI & PostGIS Engine (#engine)                           │
│ │   ├── 4.1. Engine 1: PostGIS Spatial & Copernicus Forest Baseline             │
│ │   ├── 4.2. Engine 2: Gemini 2.5 Flash OCR & LLM Auditor                        │
│ │   ├── 4.3. Engine 3: Mass Balance Regional Yield Ceiling Guard                │
│ │   └── 4.4. Engine 4: PostgreSQL Row-Level Security (RLS) Isolation           │
│ │                                                                               │
│ ├── 5. Chương 3: Quy Trình Vận Hành 4 Bước (#workflow)                          │
│ │   ├── 5.1. Bước 01: Upload Hồ Sơ (GeoJSON, Scan PDF Hợp đồng, Excel)           │
│ │   ├── 5.2. Bước 02: AI & PostGIS Quét Tiền Kiểm (< 30 giây)                   │
│ │   ├── 5.3. Bước 03: Đánh Giá Readiness Score (0-100) & Tô đỏ cờ lỗi           │
│ │   └── 5.4. Bước 04: Xuất PDF Action Plan chuẩn Annex II & Passport 5 Năm       │
│ │                                                                               │
│ ├── 6. Chương 4: Công Cụ Tính ROI Rủi Ro Lô Hàng (#roi-calculator)               │
│ │   ├── 6.1. Thanh trượt Sản lượng Container (5 đến 200 Container/Năm)           │
│ │   └── 6.2. Dashboard tự động: Phạt 4% doanh thu + $15k lưu kho vs Phí SaaS   │
│ │                                                                               │
│ ├── 7. Chương 5: Bảng Giá Cước SaaS Minh Bạch (#pricing)                        │
│ │   ├── 7.1. Gói Pay-per-Shipment (1.200.000 VNĐ / lô hàng)                     │
│ │   ├── 7.2. Gói Enterprise Professional (15.000.000 VNĐ / tháng - Khuyên dùng)  │
│ │   └── 7.3. Gói Custom Infrastructure (Báo giá B2B Tập đoàn Top 10)            │
│ │                                                                               │
│ └── 8. Chương 6: Hỏi Đáp FAQ & Footer Chuyển Đổi (#faq)                         │
│     ├── 8.1. Accordion FAQ 5 câu hỏi pháp lý khắt khe (EUDR Art. 31, RLS, CBAM) │
│     ├── 8.2. Banner CTA Chuyển Đổi Cuối Trang                                   │
│     └── 8.3. Footer B2B: Sitemap Links, Căn cứ luật EUDR & Miễn trừ trách nhiệm │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📖 3. DIỄN GIẢI CHI TIẾT TỪNG PHẦN LANDING PAGE (PROSE NARRATIVE)

- **Header (`LandingHeader`):** Cao `h-16` thanh thoát. Logo biểu trưng Cán cân Themis mạ vàng + Badge EUDR. Menu Trang chủ, Giải Pháp ▾, 5 Lỗi Âm Thầm, Quy Trình, Bảng Giá, FAQ. Nút Đăng Nhập & Dùng Thử Miễn Phí.
- **Hero Section (`HeroStorySection`):** Tiêu đề *"Tiền Kiểm 100% Lô Hàng Cà Phê EU — Loại Bỏ Lỗi GeoJSON & Hợp Đồng Đất"*. Phía bên phải là thẻ tương tác Live Pre-Audit Simulator (Score 35/100 → 98/100 PASS). Nút Quét Hồ Sơ Lô Hàng Ngay & Tính ROI Rủi Ro Lô Hàng.
- **Chương 1: 5 Lỗi Âm Thầm (`PainPointsStorySection` - `#pain-points`):**
  - 🔴 **ERR_MISSING_POLYGON (EUDR Art. 9(1)(d)):** Vườn > 4.0 ha nộp 1 điểm GPS Point → Bị giữ hàng tại cảng EU.
  - 🔴 **ERR_EXPIRED_LAND_AGREEMENT (EUDR Art. 3(b)):** Hợp đồng thuê đất nông hộ hết hạn từ 2025 nhưng không được kiểm tra.
  - 🔴 **ERR_YIELD_EXCEEDED (Mass Balance):** Mua gom cà phê trôi nổi vượt trần 3.500 kg/ha VICOFA → Nghi vấn phá rừng.
  - 🟢 **ERR_PRIVACY_PARANOIA:** Lo sợ lộ tọa độ rẫy cà phê cho đối thủ → Giải pháp RLS PostgreSQL cách ly 100%.
  - 🔵 **ERR_CBAM_PROCRASTINATION:** Trì hoãn số liệu nhiên liệu sấy lò cho cơ chế thuế carbon 2026.
- **Chương 2: Bộ Máy Engine (`SolutionEngineSection` - `#engine`):** PostGIS Spatial, Gemini 2.5 Flash OCR, Mass Balance Guard, Supabase RLS Isolation kèm mã nguồn.
- **Chương 3: Quy Trình 4 Bước (`WorkflowStepsSection` - `#workflow`):** Upload → AI Quét 30s → Readiness Score → PDF & Passport.
- **Chương 4: Tính ROI Rủi Ro (`RoiCalculatorSection` - `#roi-calculator`):** Slider Container (5-200 container/năm) tính toán phạt 4% doanh thu (EUDR Art. 38) + $15,000 phí đền lưu kho.
- **Chương 5: Bảng Giá (`PricingSection` - `#pricing`):** Pay-per-shipment (1.200.000đ), Enterprise Pro (15.000.000đ/tháng), Custom Infrastructure.
- **Chương 6: FAQ & Footer (`FaqAndFooterSection` - `#faq`):** Accordion FAQ pháp lý & Footer trích dẫn luật EUDR Article 3, 9, 10, 31, 38.

---

## 🎨 4. QUY TẮC THIẾT KẾ THEO PHONG CÁCH THEMIS REGAL LEGAL-TECH

1. **Tông Màu Executive Dark Theme (Dark Canvas & Imperial Gold):** Nền chủ đạo Obsidian Black (`#080B09` / `bg-[#080B09]`) và Deep Obsidian Emerald (`#0A130F`), điểm nhấn Imperial Metallic Gold (`#D4AF37` / `text-amber-400`) & Deep Forest Emerald (`#0B3B24` / `bg-emerald-900`).
2. **Typography Uy Nghiêm & Sắc Nét:** Tiêu đề H1/H2 phông chữ Serif cổ điển (`Cinzel` / `Cormorant Garamond`), nội dung phông chữ Sans-serif (`Plus Jakarta Sans`), dữ liệu mã GeoJSON & QR Passport phông Monospace (`JetBrains Mono`). Thẻ bo tròn 2xl mượt mà hiệu ứng Dark Glassmorphism (`rounded-2xl border border-amber-500/20 bg-[#0A130F]/90 shadow-xl backdrop-blur-md`).
3. **Thanh Header Siêu Gọn (Ultra-Compact Slim Header):** Chiều cao `h-16` thanh thoát, Logo biểu trưng Cán cân Themis mạ vàng 1 dòng (`whitespace-nowrap`), Nút Đăng Nhập & Dùng Thử Miễn Phí ánh kim nằm gọn bên phải.
4. **Quy tắc Zero Mock:** Mọi nút bấm chuyển đổi kết nối 100% đến luồng ứng dụng làm việc thật (`/dashboard`).
