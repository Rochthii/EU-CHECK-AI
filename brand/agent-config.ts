/**
 * COFFEE EU-CHECK AI — AI AGENT ECOSYSTEM CONFIGURATION
 * Defines Visual Identities, Avatars, Accent Colors, Icons, and Status Animations
 * for 8 Specialized AI Compliance Agents (Themis Regal Theme).
 */

export interface AgentVisualIdentity {
  id: string;
  name: string;
  roleTitle: string;
  accentColor: string;
  statusColor: string;
  avatarStyle: {
    background: string;
    border: string;
    glow: string;
  };
  iconName: string;
  illustrationPrompt: string;
  statusLabel: string;
  thinkingAnimation: string;
}

export const agentConfigs: Record<string, AgentVisualIdentity> = {
  compliance: {
    id: 'compliance',
    name: 'Themis Compliance Agent',
    roleTitle: 'Trưởng Ban Tiền Kiểm Tuân Thủ EUDR',
    accentColor: '#D4AF37', // Imperial Gold
    statusColor: '#10B981', // PASS Green
    avatarStyle: {
      background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.25), #0A130F)',
      border: '1px solid #D4AF37',
      glow: '0 0 15px rgba(212, 175, 55, 0.4)',
    },
    iconName: 'ShieldCheck',
    illustrationPrompt: 'Golden scales of justice floating above a dark emerald globe with EU border certification stamp, photorealistic executive 3d style',
    statusLabel: 'EUDR READY / SEALED',
    thinkingAnimation: 'animate-pulse-gold',
  },

  risk: {
    id: 'risk',
    name: 'Copernicus Risk Guard Agent',
    roleTitle: 'Chuyên Gia Phân Tích Rủi Ro Vệ Tinh GIS',
    accentColor: '#E6B800', // Durian Amber Gold
    statusColor: '#E6B800',
    avatarStyle: {
      background: 'radial-gradient(circle at center, rgba(230, 184, 0, 0.25), #0A130F)',
      border: '1px solid #E6B800',
      glow: '0 0 15px rgba(230, 184, 0, 0.4)',
    },
    iconName: 'AlertTriangle',
    illustrationPrompt: 'High resolution satellite overlay of coffee farm polygon with gold forest canopy boundary, dark mode radar aesthetic',
    statusLabel: 'MONITORING POLYGONS',
    thinkingAnimation: 'animate-spin-slow',
  },

  legal: {
    id: 'legal',
    name: 'Article 31 Legal Auditor Agent',
    roleTitle: 'Kiểm Toán Viên Pháp Lý EUDR & CBAM',
    accentColor: '#C5A059',
    statusColor: '#D4AF37',
    avatarStyle: {
      background: 'radial-gradient(circle at center, rgba(197, 160, 89, 0.25), #0A130F)',
      border: '1px solid #C5A059',
      glow: '0 0 15px rgba(197, 160, 89, 0.4)',
    },
    iconName: 'Scale',
    illustrationPrompt: 'Classic mahogany leather law manuscript with gold embossed seal of EUDR Annex II regulation, luxury legal lighting',
    statusLabel: 'AUDITING CLAUSES',
    thinkingAnimation: 'animate-pulse-gold',
  },

  document: {
    id: 'document',
    name: 'Gemini OCR Land Contract Agent',
    roleTitle: 'Chuyên Gia Đọc Thẩm Định Hợp Đồng Nông Hộ',
    accentColor: '#10B981', // Forest Emerald
    statusColor: '#10B981',
    avatarStyle: {
      background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.25), #0A130F)',
      border: '1px solid #10B981',
      glow: '0 0 15px rgba(16, 185, 129, 0.4)',
    },
    iconName: 'FileText',
    illustrationPrompt: 'Scanning laser beam parsing Vietnamese land lease document into gold structured JSON data stream, dark background',
    statusLabel: 'PARSING CONTRACTS',
    thinkingAnimation: 'animate-pulse',
  },

  dds: {
    id: 'dds',
    name: 'Due Diligence Statement (DDS) Passport Agent',
    roleTitle: 'Chuyên Gia Cấp Mã QR EUDR Passport',
    accentColor: '#D4AF37',
    statusColor: '#10B981',
    avatarStyle: {
      background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.3), #0A130F)',
      border: '1px solid #F3E5AB',
      glow: '0 0 20px rgba(212, 175, 55, 0.5)',
    },
    iconName: 'QrCode',
    illustrationPrompt: 'Gold 3D QR passport card with embedded cryptographic hash seal for 5-year EU customs verification',
    statusLabel: 'GENERATING PASSPORT',
    thinkingAnimation: 'animate-pulse-gold',
  },

  supplier: {
    id: 'supplier',
    name: 'VICOFA Yield Ceiling Guard Agent',
    roleTitle: 'Kiểm Soát Viên Nguồn Gốc & Sản Lượng Nông Hộ',
    accentColor: '#A3A89E',
    statusColor: '#D4AF37',
    avatarStyle: {
      background: 'radial-gradient(circle at center, rgba(163, 168, 158, 0.2), #0A130F)',
      border: '1px solid #A3A89E',
      glow: '0 0 10px rgba(163, 168, 158, 0.3)',
    },
    iconName: 'Users',
    illustrationPrompt: 'Interconnected network of Central Highland farmer cooperatives with gold node links and 3500kg/ha ceiling indicator',
    statusLabel: 'VERIFYING MASS BALANCE',
    thinkingAnimation: 'animate-pulse',
  },

  audit: {
    id: 'audit',
    name: 'PostgreSQL RLS Vault Agent',
    roleTitle: 'Bảo Vệ Hạ Tầng Dữ Liệu Thương Mại Độc Quyền',
    accentColor: '#0B3B24',
    statusColor: '#10B981',
    avatarStyle: {
      background: 'radial-gradient(circle at center, rgba(11, 59, 36, 0.5), #0A130F)',
      border: '1px solid #104E30',
      glow: '0 0 15px rgba(11, 59, 36, 0.5)',
    },
    iconName: 'Lock',
    illustrationPrompt: 'Encrypted golden vault door with PostgreSQL logo emblem and row level security isolation shields',
    statusLabel: 'ISOLATION SECURED',
    thinkingAnimation: 'animate-pulse',
  },

  analytics: {
    id: 'analytics',
    name: 'Container ROI Calculator Agent',
    roleTitle: 'Chuyên Gia Tối Ưu Chi Phí & Định Giá SaaS',
    accentColor: '#DAA520',
    statusColor: '#DAA520',
    avatarStyle: {
      background: 'radial-gradient(circle at center, rgba(218, 165, 32, 0.25), #0A130F)',
      border: '1px solid #DAA520',
      glow: '0 0 15px rgba(218, 165, 32, 0.4)',
    },
    iconName: 'TrendingUp',
    illustrationPrompt: 'Financial dashboard chart displaying 4% revenue fine avoidance metrics in gold bars against shipping container silhouettes',
    statusLabel: 'COMPUTING ROI',
    thinkingAnimation: 'animate-pulse',
  },
};
