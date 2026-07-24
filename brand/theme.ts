/**
 * COFFEE EU-CHECK AI — THEME STYLE ENGINE (THEMIS REGAL LEGAL-TECH)
 * Pre-configured UI Component Styles for Buttons, Cards, Tables, Badges, Dialogs, Dashboard.
 */

import { colors } from './colors';
import { tokens } from './tokens';

export const theme = {
  // 1. Button Component Styles
  button: {
    primary: {
      background: 'linear-gradient(135deg, #0B3B24 0%, #072617 100%)',
      color: colors.gold[500],
      border: `1px solid ${colors.border.goldLight}`,
      shadow: tokens.shadows.goldGlow,
      hoverBackground: 'linear-gradient(135deg, #104E30 0%, #0B3B24 100%)',
      hoverColor: colors.gold[300],
    },
    goldAccent: {
      background: 'linear-gradient(135deg, #D4AF37 0%, #B59227 100%)',
      color: colors.neutral.obsidian,
      border: '1px solid #F3E5AB',
      shadow: tokens.shadows.goldGlow,
      hoverBackground: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 100%)',
    },
    secondary: {
      background: colors.neutral.deepEmerald,
      color: colors.neutral.parchment,
      border: `1px solid ${colors.border.goldMuted}`,
      hoverBackground: colors.neutral.elevatedSurface,
    },
    ghost: {
      background: 'transparent',
      color: colors.neutral.warmGray,
      hoverColor: colors.gold[500],
      hoverBackground: 'rgba(212, 175, 55, 0.08)',
    },
  },

  // 2. Card & Surface Styles (Dark Glassmorphism)
  card: {
    base: {
      background: 'rgba(10, 19, 15, 0.90)',
      border: `1px solid ${colors.border.goldMuted}`,
      borderRadius: tokens.radius.lg,
      backdropFilter: `blur(${tokens.blur.md})`,
      boxShadow: tokens.shadows.cardGlass,
    },
    interactive: {
      background: 'rgba(10, 19, 15, 0.95)',
      border: `1px solid ${colors.border.goldLight}`,
      hoverBorder: `1px solid ${colors.gold[500]}`,
      hoverBoxShadow: tokens.shadows.goldGlow,
      transition: tokens.motion.transitionStandard,
    },
    goldHeroCard: {
      background: 'radial-gradient(ellipse at top left, rgba(212, 175, 55, 0.15), rgba(10, 19, 15, 0.95))',
      border: `1px solid ${colors.gold[500]}`,
      borderRadius: tokens.radius.xl,
      boxShadow: tokens.shadows.goldGlow,
    },
  },

  // 3. Table Component Style (Government / Customs Compliance Table)
  table: {
    header: {
      background: '#072617',
      color: colors.gold[400],
      fontFamily: "'Cinzel', serif",
      fontSize: '0.875rem',
      letterSpacing: '0.05em',
      borderBottom: `1px solid ${colors.border.goldLight}`,
    },
    row: {
      borderBottom: `1px solid ${colors.neutral.divider}`,
      hoverBackground: 'rgba(212, 175, 55, 0.04)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
    codeCell: {
      fontFamily: "'JetBrains Mono', monospace",
      color: colors.gold[300],
    },
  },

  // 4. Badges & Tags (EUDR Readiness Status)
  badge: {
    pass: {
      background: 'rgba(16, 185, 129, 0.12)',
      color: colors.semantic.success,
      border: '1px solid rgba(16, 185, 129, 0.4)',
    },
    warning: {
      background: 'rgba(230, 184, 0, 0.12)',
      color: colors.semantic.warning,
      border: '1px solid rgba(230, 184, 0, 0.4)',
    },
    critical: {
      background: 'rgba(200, 29, 37, 0.15)',
      color: colors.harvest.crimson,
      border: '1px solid rgba(200, 29, 37, 0.5)',
    },
    passportSealed: {
      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(10, 19, 15, 0.8))',
      color: colors.gold[500],
      border: `1px solid ${colors.gold[500]}`,
      boxShadow: tokens.shadows.goldGlow,
    },
  },

  // 5. Form Control Styles
  form: {
    input: {
      background: colors.neutral.obsidian,
      border: `1px solid ${colors.border.goldMuted}`,
      color: colors.neutral.parchment,
      focusBorder: `1px solid ${colors.gold[500]}`,
      focusRing: '0 0 0 2px rgba(212, 175, 55, 0.25)',
      placeholderColor: colors.neutral.mutedSlate,
      borderRadius: tokens.radius.md,
    },
  },

  // 6. Navigation Bar & Sidebar
  navigation: {
    navbar: {
      background: 'rgba(8, 11, 9, 0.85)',
      borderBottom: `1px solid ${colors.border.goldMuted}`,
      backdropFilter: `blur(${tokens.blur.lg})`,
      height: '4.0rem',
    },
    sidebar: {
      background: colors.neutral.deepEmerald,
      borderRight: `1px solid ${colors.neutral.divider}`,
      activeItemBg: 'linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, transparent 100%)',
      activeItemText: colors.gold[500],
    },
  },
} as const;

export type ThemeEngine = typeof theme;
