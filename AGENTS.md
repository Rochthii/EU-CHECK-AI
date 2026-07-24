# WORKSPACE GUIDELINES & CONTEXT

Workspace **Coffee EU-Check AI** được thiết kế theo mô hình **Multi-Project Workspace**, là trung tâm quản lý bối cảnh cho AI và nhân sự làm việc đồng bộ.

## 🎯 Tổng Quan Dự Án & Bối Cảnh
- **Sản phẩm:** Coffee EU-Check AI — Nền tảng Tiền kiểm Tuân thủ EUDR & CBAM Cho Cà Phê Việt Nam (B2B Multi-Tenant SaaS Pre-Audit Platform).
- **Thị trường:** Doanh nghiệp Xuất khẩu Cà phê Tây Nguyên (Đắk Lắk, Lâm Đồng, Gia Lai, Đắk Nông).
- **Giải pháp:** Đóng vai trò "Kiểm toán viên AI Nội bộ / Tòa án Tiền kiểm Pháp lý", tự động quét 100% tài liệu địa lý (GeoJSON/Polygon), hợp đồng thuê đất nông hộ (Gemini 2.5 Flash OCR), kiểm soát trần sản lượng VICOFA (3.500 kg/ha) và cấp mã EUDR Passport lưu trữ 5 năm (EUDR Art. 31).

---

## 📁 Cấu Trúc Workspace
- `brand/brand.md`: Bộ quy chuẩn thương hiệu Coffee EU-Check AI (Themis Executive Regal Legal-Tech Theme), tone of voice, bảng màu Obsidian Black `#080B09` + Imperial Metallic Gold `#D4AF37` + Deep Forest Emerald `#0B3B24`, typography Serif/Sans/Mono và 3 trụ cột thông điệp.
- `eu-check-web/`: Mã nguồn dự án website (Next.js / Web Application).
  - `content/`: Sitemap, data cấu hình tĩnh và tài liệu thiết kế landing page.
  - `app/`: Mã nguồn ứng dụng web chính.
- `Content/`: Lưu trữ các bài viết phân tích pháp lý EUDR, blog chuyên sâu & tài liệu kỹ thuật (docs).
- `ContentViral/`: Lưu trữ nội dung mạng xã hội (Facebook, LinkedIn, Threads), hook ngắn, chuỗi bài lan truyền.
- `Videos/`: Kịch bản video demo, shorts/reels hướng dẫn doanh nghiệp và nội dung đa phương tiện.

---

## 🛑 Nguyên Tắc Cho AI Assistants
1. **Tham chiếu Brandkit:** Tất cả các nội dung tạo ra (web UI, bài viết, kịch bản video) phải tham chiếu `brand/brand.md` để đảm bảo chuẩn phong cách **Themis Executive Regal Legal-Tech** (Nền Obsidian Black `#080B09`, điểm nhấn Imperial Gold `#D4AF37`, xanh Forest Emerald `#0B3B24`, tiêu đề Serif `Cinzel`/`Cormorant Garamond`).
2. **Quy tắc Real Production (Zero Mock):** Tất cả logic, nút bấm, bảng tính ROI, API đều phải thực tế, không tạo logic giả lập hoặc TODO trôi nổi trong luồng production.
3. **Tuân thủ Căn cứ Pháp lý:** Luôn dẫn chiếu chính xác điều khoản EUDR (Article 3, 9, 10, 31, 38) và trần VICOFA (3.500 kg/ha) với phong thái uy nghiêm, chuẩn xác.
