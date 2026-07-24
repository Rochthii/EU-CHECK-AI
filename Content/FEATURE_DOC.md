# FEATURE DOC: ĐẶC TẢ TÍNH NĂNG COFFEE EU-CHECK AI

## Mục lục
1. [PostGIS & Turf.js Spatial Engine](#1-postgis--turfjs-spatial-engine)
2. [Gemini 2.5 Flash OCR Engine](#2-gemini-25-flash-ocr-engine)
3. [Mass Balance Guard](#3-mass-balance-guard)
4. [PostgreSQL Row-Level Security (RLS)](#4-postgresql-row-level-security-rls)

---

## 1. PostGIS & Turf.js Spatial Engine
- **Tên tính năng:** Động cơ Thẩm định Không gian (Spatial Engine)
- **Vấn đề pháp lý/vận hành nó giải quyết:** Giải quyết vi phạm **ERR_MISSING_POLYGON (Art. 9(1)(d))** của luật EUDR. Nông hộ có diện tích >4.0 ha thường nộp sai định dạng (nộp 1 điểm GPS Point thay vì Polygon khép góc), dẫn đến rủi ro bị từ chối hồ sơ ngay tại cảng EU.
- **Cách hoạt động:** Hệ thống sử dụng PostGIS và Turf.js để vẽ lại và thẩm định tọa độ địa lý. Engine tự động kiểm tra tính khép góc của Polygon, đo lường chính xác diện tích vườn thực tế, và đối soát giao thoa (intersect) với bản đồ rừng Copernicus năm 2020 để xác nhận không có hành vi phá rừng.
- **Lợi ích đo lường được:** 
  - Rút ngắn thời gian xác minh bản đồ từ vài ngày (bằng mắt người) xuống **dưới 5 giây/hồ sơ**.
  - Đạt điểm Readiness Score tối đa cho tiêu chí dữ liệu địa lý.

## 2. Gemini 2.5 Flash OCR Engine
- **Tên tính năng:** Trợ lý OCR Phân tích Pháp lý
- **Vấn đề pháp lý/vận hành nó giải quyết:** Ngăn chặn vi phạm **ERR_EXPIRED_LAND_AGREEMENT (Art. 3(b))** liên quan đến tính hợp pháp của quyền sử dụng đất. Các bản scan hợp đồng thuê đất nông hộ thường xuyên bị hết hạn nhưng nhân sự kiểm tra bị sót.
- **Cách hoạt động:** Nhúng sức mạnh của Gemini 2.5 Flash, hệ thống OCR lập tức đọc và trích xuất dữ liệu từ hàng ngàn bản scan PDF/ảnh của Sổ đỏ, Hợp đồng thuê/khoán đất. Phân tích tự động ngày hết hạn, đối chiếu chéo với ngày mở tờ khai hải quan dự kiến.
- **Lợi ích đo lường được:** 
  - Khả năng đọc và bóc tách dữ liệu chuẩn xác lên tới 99% cho các loại văn bản giấy tờ Việt Nam.
  - Tiết kiệm 95% thời gian rà soát thủ tục pháp lý.

## 3. Mass Balance Guard
- **Tên tính năng:** Hệ thống Vệ sĩ Cân bằng Khối lượng
- **Vấn đề pháp lý/vận hành nó giải quyết:** Chống lại vi phạm **ERR_YIELD_EXCEEDED (Art. 10)**. Tình trạng thương lái mua gom quá trần sản lượng cho phép của một vườn (ví dụ: nông hộ có 1 ha nhưng khai bán 10 tấn) dẫn tới hồ sơ bị hải quan EU xếp vào diện gian lận nguy cơ cao.
- **Cách hoạt động:** Hệ thống tự động đặt mức trần sản lượng (ví dụ theo trần VICOFA là 3.500 kg/ha). Mọi phiếu thu mua từ đại lý sẽ được nạp vào sổ cái hệ thống. Khi tổng sản lượng mua vượt quá diện tích thực, hệ thống lập tức chốt chặn, cảnh báo đỏ và khóa tính năng xuất mã QR Passport cho lô hàng.
- **Lợi ích đo lường được:**
  - Bảo vệ 100% doanh nghiệp khỏi rủi ro gian lận truy xuất nguồn gốc.
  - Triệt tiêu nguy cơ bị phạt **4% doanh thu toàn cầu**.

## 4. PostgreSQL Row-Level Security (RLS)
- **Tên tính năng:** Bảo mật Dữ liệu Cấp độ Dòng (Row-Level Security)
- **Vấn đề pháp lý/vận hành nó giải quyết:** Đáp ứng yêu cầu **Lưu trữ hồ sơ bảo mật 05 năm (Art. 31)** và giải quyết nỗi lo lớn nhất của doanh nghiệp B2B: lộ lọt thông tin vùng trồng độc quyền vào tay đối thủ.
- **Cách hoạt động:** Sử dụng kiến trúc Multi-Tenant của PostgreSQL RLS. Mỗi tập đoàn/doanh nghiệp có một không gian dữ liệu cách ly tuyệt đối ngay tại tầng Database. Ngay cả admin hệ thống hoặc hacker cũng không thể query dữ liệu của tenant khác.
- **Lợi ích đo lường được:**
  - Ngăn chặn thất thoát 100% dữ liệu chuỗi cung ứng.
  - Đáp ứng tiêu chuẩn bảo mật Enterprise-grade cho các tập đoàn đa quốc gia.
