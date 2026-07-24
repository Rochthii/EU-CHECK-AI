/**
 * COFFEE EU-CHECK AI — DESIGN TOKENS (THEMIS REGAL LEGAL-TECH)
 * Defines Spacing, Border Radius, Elevation Shadows, Glass Blur & Motion Timings.
 */

import { colors } from './colors';

export const tokens = {
  // Border Radius Scale
  radius: {
    none: '0px',
    xs: '4px',
    sm: '6px',
    md: '10px',      // Standard Component Radius
    lg: '16px',      // Card & Modal Radius
    xl: '24px',      // Hero Card Radius
    full: '9999px',  // Pills & Badges
  },

  // Spacing System (8pt Grid Base)
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1.0rem',   // 16px
    lg: '1.5rem',   // 24px
    xl: '2.0rem',   // 32px
    '2xl': '3.0rem', // 48px
    '3xl': '4.0rem', // 64px
  },

  // Elevation & Gold Metallic Glow Shadows
  shadows: {
    none: 'none',
    sm: '0 2px 4px rgba(0, 0, 0, 0.4)',
    md: '0 4px 12px rgba(0, 0, 0, 0.6)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.75)',
    goldGlow: '0 0 20px rgba(212, 175, 55, 0.25), 0 0 40px rgba(212, 175, 55, 0.10)',
    emeraldGlow: '0 0 20px rgba(11, 59, 36, 0.40), 0 0 40px rgba(16, 185, 129, 0.15)',
    cardGlass: '0 8px 32px 0 rgba(0, 0, 0, 0.50)',
  },

  // Backdrop Blur Levels for Glassmorphism
  blur: {
    none: '0px',
    sm: '4px',
    md: '12px',     // Standard Glass Card Blur
    lg: '24px',     // Modal & Header Blur
  },

  // Motion & Animation Timings (Subtle, Premium, Executive)
  motion: {
    durationFast: '150ms',
    durationNormal: '200ms',
    durationSlow: '250ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth ease-out
    transitionStandard: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type DesignTokens = typeof tokens;
