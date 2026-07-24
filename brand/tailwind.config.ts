/**
 * COFFEE EU-CHECK AI — TAILWIND CONFIG PRESET (THEMIS REGAL LEGAL-TECH)
 * Import this preset in eu-check-web/tailwind.config.ts for global component styling.
 */

import { colors } from './colors';
import { tokens } from './tokens';

export const tailwindBrandPreset = {
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: colors.neutral.obsidian,
          card: colors.neutral.deepEmerald,
          elevated: colors.neutral.elevatedSurface,
        },
        parchment: {
          DEFAULT: colors.neutral.parchment,
          muted: colors.neutral.warmGray,
          slate: colors.neutral.mutedSlate,
        },
        brand: {
          green: colors.primary[800],
          greenLight: colors.primary[500],
          gold: colors.gold[500],
          goldLight: colors.gold[300],
          crimson: colors.harvest.crimson,
          durian: colors.harvest.durianAmber,
          mahogany: colors.harvest.mahogany,
        },
      },
      fontFamily: {
        heading: ['Cinzel', 'Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'gold-glow': tokens.shadows.goldGlow,
        'emerald-glow': tokens.shadows.emeraldGlow,
        'card-glass': tokens.shadows.cardGlass,
      },
      borderRadius: {
        '2xl': tokens.radius.lg,
        '3xl': tokens.radius.xl,
      },
      backdropBlur: {
        glass: tokens.blur.md,
      },
      animation: {
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { opacity: '1', boxShadow: tokens.shadows.goldGlow },
          '50%': { opacity: '0.6', boxShadow: 'none' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};

export default tailwindBrandPreset;
