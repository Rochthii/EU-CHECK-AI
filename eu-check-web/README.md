# ☕ Coffee EU-Check AI — Web Client

Chào mừng đến với mã nguồn giao diện (Front-end) của hệ thống **Coffee EU-Check AI** — Nền tảng Tiền kiểm Tuân thủ EUDR & CBAM chuyên biệt dành cho chuỗi cung ứng cà phê Việt Nam.

Dự án này được xây dựng dựa trên phong cách thiết kế **Themis Regal Legal-Tech** (Sang trọng, bảo mật và chuẩn B2B Enterprise).

---

## 🚀 1. Yêu Cầu Hệ Thống (Prerequisites)
Để chạy được mã nguồn này trên máy khách, bạn cần cài đặt:
- **Node.js**: Phiên bản `v18.17.0` trở lên. (Khuyên dùng bản LTS mới nhất).
- **Trình quản lý gói**: `npm` (đã đi kèm khi cài Node.js).
- **Trình duyệt**: Google Chrome, Edge hoặc Firefox bản mới nhất.

---

## ⚙️ 2. Hướng Dẫn Cài Đặt & Khởi Chạy (Getting Started)

Mở Terminal (hoặc Command Prompt / PowerShell) và trỏ vào thư mục `eu-check-web`, sau đó thực hiện các bước sau:

### Bước 1: Cài đặt thư viện (Dependencies)
```bash
npm install
```
*Lệnh này sẽ tải về toàn bộ các thư viện cần thiết như Next.js, React, TailwindCSS, Framer Motion, và Lucide React.*

### Bước 2: Chạy môi trường phát triển (Development Server)
```bash
npm run dev
```
*Sau khi chạy thành công, hãy mở trình duyệt và truy cập vào:* 👉 **[http://localhost:3000](http://localhost:3000)**

### Bước 3: Đóng gói bản chính thức (Production Build) - *Chỉ dùng khi cần đưa lên host thật*
```bash
npm run build
npm start
```

---

## 📁 3. Cấu Trúc Thư Mục Chính
Dự án sử dụng **Next.js 15 (App Router)**. Dưới đây là các thư mục bạn cần quan tâm:

```text
eu-check-web/
├── app/                  # Thư mục App Router chính
│   ├── globals.css       # File CSS tổng chứa hệ thống màu (Tailwind v4 theme)
│   ├── layout.tsx        # Cấu trúc chung (Header, Footer, Font chữ)
│   └── page.tsx          # Trang đích (Landing Page) lắp ráp các thành phần
│
├── components/landing/   # Các khối (Sections) giao diện của Landing Page
│   ├── HeroStorySection.tsx
│   ├── PainPointsStorySection.tsx
│   ├── SolutionEngineSection.tsx
│   ├── WorkflowStepsSection.tsx
│   ├── RoiCalculatorSection.tsx
│   ├── PricingSection.tsx
│   └── FaqSection.tsx
│
├── public/               # Thư mục chứa hình ảnh tĩnh (logo, icon)
├── AGENTS.md             # Tài liệu nội bộ hướng dẫn AI viết code dự án
└── package.json          # Quản lý phiên bản các thư viện
```

---

## 🎨 4. Nhận Diện Thương Hiệu (Brand Identity)
Dự án được cấu hình sẵn hệ màu chuyên nghiệp trong `globals.css` để bạn sử dụng qua các class của Tailwind:
- `bg-obsidian`: Màu đen nền sâu thẳm.
- `text-parchment`: Màu trắng ngà cho chữ (không chói mắt).
- `text-gold-400` / `bg-gold-500`: Màu vàng Hoàng gia (điểm nhấn quan trọng).
- `text-emerald-400`: Màu xanh lục bảo (trạng thái an toàn, thành công).

**Font chữ tiếng Việt (đã tối ưu chống lỗi dấu):**
- **Cormorant Garamond** (`font-serif`): Dùng cho các tiêu đề (Heading).
- **Inter** (`font-sans`): Dùng cho văn bản thông thường (Body text).
- **JetBrains Mono** (`font-mono`): Dùng cho các con số kỹ thuật, code.

---

## 📞 5. Hỗ Trợ (Support)
Trong quá trình vận hành, nếu gặp lỗi liên quan đến giao diện hiển thị hoặc tính toán trên trình duyệt, hãy liên hệ với đội ngũ kỹ thuật của **Orchexa Enterprise Intelligence**.
