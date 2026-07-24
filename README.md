# Coffee EU-Check AI

> **Nền Tảng Tiền Kiểm Tuân Thủ EUDR & CBAM Cho Cà Phê Việt Nam**  
> *B2B Multi-Tenant SaaS Pre-Audit Platform — Hệ thống tiền kiểm toán AI & GIS độc lập.*

---

## 1. Bài Toán & Giải Pháp

- **Thách thức pháp lý 2026:** Hải quan EU tịch thu lô hàng hoặc phạt **4% doanh thu toàn cầu (EUDR Art. 38)** + chi phí đền bù lưu kho **$15,000/container** khi vi phạm:
  1. **ERR_MISSING_POLYGON (Art. 9(1)(d)):** Vườn >4.0 ha nộp 1 điểm GPS Point thay vì Polygon khép góc.
  2. **ERR_EXPIRED_LAND_AGREEMENT (Art. 3(b)):** Hợp đồng thuê/khoán đất nông hộ hết hiệu lực trước ngày mở tờ khai.
  3. **ERR_YIELD_EXCEEDED (Art. 10):** Tổng sản lượng mua gom vượt trần VICOFA (3.500 kg/ha).
- **Giải pháp:** Tiền kiểm 100% hồ sơ (<30 giây) → Chỉ số **Readiness Score (0-100)** → Báo cáo **Action Plan PDF chuẩn Annex II** & Cấp mã **EUDR Passport lưu trữ 5 năm (Art. 31)**.

---

## 2. Cấu Trúc Multi-Project Workspace

```text
EU-CHECK/
├── brand/               # Quy chuẩn thương hiệu & Brandkit dùng chung (brand.md)
├── eu-check-web/        # Mã nguồn ứng dụng Website (Next.js, TailwindCSS)
│   ├── content/         # Sitemap, specs & static data (sitemap_landing_page.md)
│   └── app/             # App Router / Pages
├── Content/             # Bài viết phân tích pháp lý EUDR, blog & tài liệu chuyên sâu
├── ContentViral/        # Nội dung social (Facebook, LinkedIn), hook ngắn & bài viral
└── Videos/              # Kịch bản video demo, Shorts/Reels sản xuất đa phương tiện
```

---

## 3. Động Cơ Công Nghệ Core

- **PostGIS & Turf.js Spatial Engine:** Thẩm định Polygon khép góc, đối soát giao thoa bản đồ rừng Copernicus 2020.
- **Gemini 2.5 Flash OCR Engine:** Đọc & kiểm tra tự động thời hạn hợp đồng thuê đất nông hộ scan.
- **Mass Balance Guard:** Tự động chặn gian lận trần sản lượng VICOFA (3.500 kg/ha).
- **PostgreSQL Row-Level Security (RLS):** Cách ly 100% dữ liệu vùng thu mua thương mại độc quyền giữa các tenant.

---

## 4. Căn Cứ Pháp Lý Luật EU

| Điều khoản EUDR | Nội dung quy định | Cơ chế giải quyết trên Coffee EU-Check AI |
| :--- | :--- | :--- |
| **Article 3(b)** | Quyền sử dụng đất hợp pháp | OCR kiểm tra thời hạn hợp đồng thuê đất nông hộ |
| **Article 9(1)(d)** | Tọa độ địa lý vườn (Point/Polygon) | Turf.js validation khép góc Polygon > 4.0 ha |
| **Article 10** | Đánh giá rủi ro & Cân bằng khối lượng | Mass Balance Yield Ceiling Guard (3.500 kg/ha) |
| **Article 31** | Lưu trữ hồ sơ thẩm định 05 năm | Mã định danh QR Passport lưu trữ bảo mật |
| **Article 38** | Chế tài xử phạt (4% doanh thu toàn cầu) | Pre-audit triệt tiêu rủi ro trước khi xuất cảng |

---

## 5. Mô Hình Thu Phí SaaS

- **Pay-per-Shipment:** 1.200.000 VNĐ / lô hàng xuất khẩu (~$50 USD).
- **Enterprise Professional:** 15.000.000 VNĐ / tháng (Quét không giới hạn + RBAC 4 Cấp + CBAM).
- **Custom Infrastructure:** Báo giá B2B Tập đoàn Top 10 (Dedicated Supabase RLS + API ERP/SAP).
