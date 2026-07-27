<!-- BEGIN:eu-check-agent-rules -->
# 🤖 KNOWLEDGE BASE DÀNH CHO AI AGENTS (AGENTS.md)
**Dự án:** Coffee EU-Check AI — Nền Tảng Tiền Kiểm Tuân Thủ EUDR & CBAM

Tài liệu này đóng vai trò là "Sổ tay hướng dẫn" dành cho các AI Agent (như Cursor, GitHub Copilot, Gemini, Claude) tham gia bảo trì, phát triển và tối ưu hóa dự án `eu-check-web`. 

Mọi AI Agent khi tương tác với repo này **bắt buộc** phải tuân thủ các quy tắc sau:

---

## 1. THÔNG TIN CỐT LÕI (CORE CONTEXT)
- **Sản phẩm:** Giải pháp B2B Multi-Tenant SaaS hỗ trợ tiền kiểm 100% hồ sơ xuất khẩu cà phê vào thị trường EU.
- **Vấn đề giải quyết:** 
  1. Thiếu Polygon khép góc (GeoJSON) theo Art. 9(1)(d).
  2. Hợp đồng đất nông hộ hết hạn theo Art. 3(b).
  3. Gian lận trần sản lượng (Mass Balance).
- **Mục tiêu UX/UI:** Xây dựng sự tin cậy tuyệt đối cho C-Level (CTO, CIO, CDO) bằng sự chuyên nghiệp, chuẩn xác và mượt mà.

---

## 2. STACK CÔNG NGHỆ (TECH STACK)
Tuyệt đối không tự ý thay đổi version hoặc thêm thư viện ngoài lề nếu chưa hỏi ý kiến user:
- **Framework:** Next.js 15 (App Router bắt buộc, không dùng Pages Router).
- **Ngôn ngữ:** TypeScript (Strict mode).
- **Styling:** Tailwind CSS v4 (cấu hình qua `@theme` trong `globals.css`).
- **Icons:** `lucide-react`.
- **Animation:** `framer-motion` (ưu tiên các hiệu ứng vi mô - micro-interactions, không làm quá lố).

---

## 3. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM: THEMIS REGAL)
Giao diện tuân thủ phong cách **Themis Regal Legal-Tech** (Tối màu, sang trọng, đẳng cấp).
- **Màu nền (Backgrounds):** `bg-obsidian` (#080B09) và `bg-deep-emerald` (#0A130F) tạo chiều sâu.
- **Chữ chính (Text):** `text-parchment` (#F5F5F0) trên nền tối. Chữ phụ: `text-warm-gray` (#A3A89E).
- **Màu nhấn (Accents):** 
  - Vàng Hoàng gia (Imperial Gold): `text-gold-400`, `bg-gold-500` (cho CTA, viền nổi bật).
  - Lục bảo (Forest Emerald): `text-emerald-400`, `bg-emerald-900` (cho tính hợp lệ, an toàn).
  - Đỏ (Crimson): `text-red-500` (cho cảnh báo lỗi EUDR chết người).
- **Font chữ (Typography):**
  - Tiêu đề (Headings): `font-serif` (Sử dụng **Cormorant Garamond**).
  - Nội dung (Body): `font-sans` (Sử dụng **Inter** - Phải có subset `vietnamese`).
  - Dữ liệu/Code (Data/GeoJSON): `font-mono` (Sử dụng **JetBrains Mono**).
- **Thành phần UI (UI Elements):** 
  - Thường xuyên dùng thẻ Glassmorphism (`backdrop-blur-sm`, `bg-obsidian/50`, `border border-white/5`).

---

## 4. QUY TẮC VIẾT CODE (CODING CONVENTIONS)
1. **App Router:** Mọi file layout, page phải nằm trong thư mục `app/`. 
2. **Client Components:** Mặc định các file trong `app/` là Server Components. Nếu sử dụng `useState`, `useEffect`, hoặc `framer-motion`, **BẮT BUỘC** phải có chỉ thị `"use client";` ở dòng đầu tiên của file component (lưu trong thư mục `components/`).
3. **Responsive:** Code theo nguyên tắc Mobile-first, nhưng phải đảm bảo trải nghiệm Desktop/Monitor to (xl, 2xl) hoàn hảo vì khách hàng B2B thường dùng màn hình lớn tại văn phòng.
4. **Viết Component Tái Sử Dụng:** Hãy tách nhỏ component vào `components/` thay vì nhồi nhét tất cả vào `page.tsx`.
5. **Typescript:** Cố gắng định nghĩa `interface` hoặc `type` cho Props, tránh dùng `any`.

---

## 5. QUY TẮC ỨNG XỬ KHI ĐƯỢC USER YÊU CẦU
- **Hiểu ý đồ trước khi code:** Đọc kỹ `AGENTS.md` và `sitemap_landing_page.md` trước khi gen code.
- **KHÔNG bịaa đặt thư viện:** Nếu cần vẽ bản đồ, hãy đề xuất `react-leaflet` hoặc `mapgl` thay vì tự gọi một API tưởng tượng.
- **Tối ưu tiếng Việt:** Nếu user yêu cầu nội dung, hãy hành văn theo giọng điệu chuyên nghiệp, B2B, tránh dùng từ lóng, và tuyệt đối không để xảy ra lỗi font chữ có dấu.

<!-- END:eu-check-agent-rules -->
