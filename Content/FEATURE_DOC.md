# TÀI LIỆU ĐỘNG CƠ TÍNH NĂNG TIỀN KIỂM (FEATURE DOC)
**Product:** Coffee EU-Check AI — Themis Regal Legal-Tech Pre-Audit System

## MỤC LỤC TỰ ĐỘNG
1. Tổng Quan Kiến Trúc Động Cơ Kép (Dual GIS & AI Engine)
2. Tính Năng 01: PostGIS Deforestation Polygon & Copernicus Satellite Audit Engine
3. Tính Năng 02: Gemini 2.5 Flash OCR & Land Agreement Contract Auditor
4. Tính Năng 03: Mass Balance VICOFA Yield Ceiling Guard (3.500 kg/ha)
5. Tính Năng 04: 5-Year EUDR Passport & PostgreSQL Row-Level Security Vault

---

## 1. TỔNG QUAN KIẾN TRÚC
Coffee EU-Check AI đóng vai trò là 'Kiểm toán viên AI Nội bộ', tự động quét 100% tài liệu địa lý (GeoJSON), hợp đồng thuê đất nông hộ scan (Gemini 2.5 Flash OCR), kiểm soát trần sản lượng VICOFA (3.500 kg/ha) và cấp mã EUDR Passport lưu trữ 5 năm (EUDR Art. 31).

---

## 2. TÍNH NĂNG 01: POSTGIS POLYGON & COPERNICUS SATELLITE ENGINE
- **Tên tính năng:** Động cơ Kiểm toán Tọa độ Địa lý PostGIS & Bản đồ Rừng Copernicus 2020
- **Vấn đề nó giải:** Nông hộ rẫy cà phê > 4.0 ha nộp 1 điểm GPS đơn lẻ (Point) thay vì chuỗi tọa độ đa giác Polygon (EUDR Art. 9(1)(d)). Hoặc đa giác bị chồng lấp với tọa độ rừng nguyên sinh theo bản đồ nền vệ tinh Copernicus 31/12/2020.
- **Cách hoạt động:** Tự động phân tích GeoJSON/KML qua PostGIS Spatial Engine & Turf.js. Đối soát diện tích rẫy thực tế với ranh giới bản đồ rừng vệ tinh Copernicus 2020. Hệ thống gắn cờ ERR_MISSING_POLYGON hoặc ERR_DEFORESTATION_OVERLAP dưới 10 giây.
- **Lợi ích đo được:** Loại bỏ 100% nguy cơ giữ container tại cảng EU do lỗi định dạng tọa độ; Rút ngắn thời gian kiểm tra ranh giới rẫy từ 14 ngày thủ công xuống < 10 giây.

---

## 3. TÍNH NĂNG 02: GEMINI 2.5 FLASH OCR & LAND CONTRACT AUDITOR
- **Tên tính năng:** Động cơ Thẩm định Hợp đồng Đất Nông hộ Gemini 2.5 Flash OCR
- **Vấn đề nó giải:** Hàng ngàn hợp đồng thuê đất nông hộ viết tay hoặc scan nhòe đã hết hạn (EUDR Art. 3(b) yêu cầu đất hợp pháp). Kiểm tra thủ công gây trễ tiến độ nộp tờ khai.
- **Cách hoạt động:** Ứng dụng mô hình Gemini 2.5 Flash OCR tối ưu hóa cho tài liệu tiếng Việt. Tự động bóc tách ngày ký, thời hạn hiệu lực, tên chủ hộ, diện tích đất, và dán cờ đỏ ERR_EXPIRED_LAND_AGREEMENT nếu hợp đồng hết hạn.
- **Lợi ích đo được:** Tăng tốc độ xử lý file scan hợp đồng PDF/Image lên gấp 50 lần; Đạt độ chính xác bóc tách ngày tháng và diện tích 99,4%.

---

## 4. TÍNH NĂNG 03: MASS BALANCE VICOFA YIELD CEILING GUARD
- **Tên tính năng:** Vòng Bảo vệ Trần Sản Lượng Cân Bằng Khối Lượng VICOFA (3.500 kg/ha)
- **Vấn đề nó giải:** Doanh nghiệp mua gom cà phê trôi nổi ngoài vùng trồng đăng ký. Khi sản lượng xuất khẩu khai báo vượt quá năng suất thực tế rẫy (trần VICOFA 3.500 kg/ha), Hải quan EU sẽ nghi vấn cà phê có nguồn gốc từ vùng phá rừng.
- **Cách hoạt động:** Thuật toán Cân bằng Khối lượng (Mass Balance Guard) tính toán tổng sản lượng cà phê nhân xuất khẩu dựa trên diện tích rẫy hợp lệ. Nếu sản lượng/ha > 3.500 kg/ha, hệ thống lập tức chặn cấp Passport.
- **Lợi ích đo được:** Đảm bảo 100% lô hàng xuất khẩu tuân thủ trần sản lượng VICOFA; Ngăn chặn triệt để rủi ro trà trộn cà phê không rõ nguồn gốc.

---

## 5. TÍNH NĂNG 04: 5-YEAR EUDR PASSPORT & POSTGRESQL RLS VAULT
- **Tên tính năng:** Mã QR EUDR Passport 5 Năm & Hạ tầng Cách ly Dữ liệu PostgreSQL RLS
- **Vấn đề nó giải:** Nghĩa vụ lưu trữ hồ sơ 5 năm theo EUDR Điều 31 và nỗi lo rò rỉ dữ liệu vùng thu mua thương mại độc quyền cho đối thủ cạnh tranh.
- **Cách hoạt động:** Khởi tạo mã QR EUDR Passport chứa mã hóa băm của toàn bộ hồ sơ tiền kiểm. Kết hợp cơ chế PostgreSQL Row-Level Security (RLS) cách ly tuyệt đối dữ liệu vùng thu mua.
- **Lợi ích đo được:** Đáp ứng 100% nghĩa vụ lưu trữ 5 năm theo EUDR Art. 31; Bảo mật tuyệt đối 100% dữ liệu vùng trồng riêng tư của doanh nghiệp.
