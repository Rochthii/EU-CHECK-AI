/**
 * COFFEE EU-CHECK AI — BRAND COLOR PALETTE (THEMIS REGAL LEGAL-TECH THEME)
 * Extracted directly from logo.jpg (Scales of Justice, Agriculture Produce & Legal Manuscripts)
 * Single Source of Truth for Web, Dashboard, Mobile, and PDF Exports.
 */

export const colors = {
  // Primary — Forest Emerald Green (EUDR Deforestation-Free Brand Color)
  primary: {
    50: '#E8F5EE',
    100: '#C3E7D3',
    200: '#98D7B4',
    300: '#6BC593',
    400: '#44B477',
    500: '#1E9E5C',
    600: '#14824A',
    700: '#0E663B',
    800: '#0B3B24', // Core Forest Emerald Dark
    900: '#072617',
    950: '#04160D',
  },

  // Accent — Imperial Metallic Gold (Prestige, Legal Authority, EUDR Passport)
  gold: {
    50: '#FAF7E8',
    100: '#F4EBC4',
    200: '#EBDD9A',
    300: '#E1CC6E',
    400: '#DABE4E',
    500: '#D4AF37', // Imperial Metallic Gold Main
    600: '#B59227',
    700: '#8C6E1C',
    800: '#664F13',
    900: '#45340B',
    950: '#281D05',
  },

  // Harvest Accents (Coffee Cherry & Durian/Wheat Produce)
  harvest: {
    crimson: '#C81D25',  // Coffee Cherry Red (EUDR Risk Alert)
    crimsonDark: '#900C3F',
    durianAmber: '#E6B800', // Durian Gold / Wheat Amber (Moderate Risk / Value)
    durianAmberDark: '#DAA520',
    mahogany: '#5C2C16', // Legal Gavel Walnut / Book Leather
  },

  // Neutrals — Obsidian Canvas & Parchment
  neutral: {
    obsidian: '#080B09',       // Deep Dark Canvas Background
    deepEmerald: '#0A130F',    // Card / Sidebar Surface Background
    elevatedSurface: '#101C16',// Glass Panel Elevated Surface
    parchment: '#F5F5F0',      // High-Contrast Light Parchment Text
    warmGray: '#A3A89E',       // Secondary Body Text
    mutedSlate: '#6D7368',     // Subtitles, Captions, Muted Icons
    divider: '#1A2A20',        // Subtle Divider Line
  },

  // Semantic System Colors
  semantic: {
    success: '#10B981',       // Readiness PASS (Score 90-100)
    warning: '#E6B800',       // Readiness WARNING (Score 70-89)
    error: '#C81D25',         // Readiness FAIL (Score < 70)
    info: '#D4AF37',          // Audit Log & Compliance Notice
  },

  // Glassmorphic Borders & Highlights
  border: {
    goldLight: 'rgba(212, 175, 55, 0.35)',
    goldMuted: 'rgba(212, 175, 55, 0.15)',
    emeraldLight: 'rgba(11, 59, 36, 0.40)',
    subtleDark: 'rgba(255, 255, 255, 0.08)',
  },
} as const;

export type ColorPalette = typeof colors;
