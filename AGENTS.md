# WORKSPACE GUIDELINES & CONTEXT

Workspace này được thiết kế theo mô hình **Multi-Project Workspace**, là trung tâm quản lý bối cảnh cho AI và con người cùng làm việc.

## Cấu trúc Workspace

- `brand/brand.md`: Định vị thương hiệu, câu chuyện, tone of voice dùng chung cho tất cả dự án.
- `eu-check-web/`: Mã nguồn dự án website (Next.js / Web Application).
  - `content/`: Nội dung tĩnh và cấu hình dữ liệu web.
  - `app/`: Mã nguồn ứng dụng web.
- `Content/`: Lưu trữ bài viết, bài blog, tài liệu chuyên sâu (docs).
- `ContentViral/`: Lưu trữ nội dung mạng xã hội, hook, bài viết ngắn lan truyền.
- `Videos/`: Kịch bản video, nội dung sản xuất đa phương tiện.

## Nguyên tắc dành cho AI Assistants
1. Tất cả các nội dung tạo ra (web, bài viết, kịch bản) đều phải tham chiếu tới `brand/brand.md` để đảm bảo đồng nhất thương hiệu.
2. Không tạo mã nguồn demo/mock nếu không được yêu cầu. Tất cả logic phải thực tế.
3. Khi làm việc với dự án web, tập trung vào thư mục `eu-check-web/`.
