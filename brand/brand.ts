/**
 * COFFEE EU-CHECK AI — BRAND IDENTITY & SYSTEM ARCHITECTURE
 * Central Export File Aggregating All Brand Specs, Design Tokens & AI Agent Identities.
 */

import { colors } from './colors';
import { tokens } from './tokens';
import { theme } from './theme';
import { agentConfigs } from './agent-config';

export const brand = {
  name: 'Coffee EU-Check AI',
  codeName: 'THEMIS-REGAL-LEGAL-TECH',
  tagline: 'Tiền Kiểm 100% Lô Hàng Cà Phê EU — Loại Bỏ Rủi Ro Tịch Thu Cảng.',
  positioning: 'Nền Tảng Tiền Kiểm Tuân Thủ EUDR & CBAM Cho Cà Phê Việt Nam (B2B SaaS Pre-Audit Platform)',
  symbolism: 'Cán cân Công lý Nữ thần Themis (Đĩa nông sản trái & Đĩa sách luật/búa thẩm phán phải)',
  
  // 20 Core Brand Keywords
  keywords: [
    'Trust', 'Compliance', 'Justice', 'Balance', 'Integrity',
    'Sovereignty', 'Authority', 'Precision', 'Sustainability', 'Provenance',
    'Annex-II', 'Verification', 'Auditability', 'Deforestation-Free', 'Certification',
    'Stewardship', 'Legality', 'Passport', 'Protocol', 'Excellence'
  ] as const,

  // Messaging Pillars
  pillars: [
    {
      id: 1,
      title: '100% Pre-Audit Readiness',
      description: 'Quét sạch 100% rủi ro pháp lý & địa lý trước khi nộp tờ khai hải quan EU, loại bỏ phạt 4% doanh thu.',
    },
    {
      id: 2,
      title: 'Dual GIS & AI Audit Engine',
      description: 'Kết hợp đối soát Polygon với bản đồ Copernicus 2020 và Gemini 2.5 Flash OCR thẩm định hợp đồng đất.',
    },
    {
      id: 3,
      title: 'Enterprise Trust & 5-Year EUDR Passport',
      description: 'Cấp mã QR Passport lưu trữ 5 năm (EUDR Art. 31) bảo vệ độc quyền dữ liệu qua PostgreSQL RLS.',
    },
  ],

  // Theme Core Exports
  colors,
  tokens,
  theme,
  agents: agentConfigs,
} as const;

export default brand;
