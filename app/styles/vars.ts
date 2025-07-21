export const tokens = {
  fontFamily: {
    primary:
      'var(--font-soehne-buch), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  fontWeight: {
    buch: "400",
  },

  letterSpacing: {
    tight: "-3%",
  },

  lineHeight: {
    h1: "120%",
    body: "140%",
  },

  fontSize: {
    h1: "7rem", // 112pt
    h05: "3rem", // 48pt
    bodyL: "1.75rem", // 28pt
    bodyS: "1rem", // 16pt
    bodyXS: "0.875rem", // 14pt (same as bodyS)
  },

  breakpoints: {
    mobile: "500px",
    tablet: "1024px",
    desktop: "1440px",
  },
} as const;

export const colors = {
  black200: "#081E13",
  black100: "#112C2E",
  offWhite: "#FBFAF6",
  white: "#FFFFFF",
  green500: "#153E2A",
  green400: "#30715D",
  green300: "#6E9E8F",
  green200: "#00B684",
  green100: "#CCDDC7",
  orange: "#D87906",
} as const;

// Typography presets with exact specifications
export const typography = {
  h1: {
    fontFamily: tokens.fontFamily.primary,
    fontSize: tokens.fontSize.h1,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.h1,
  },

  h05: {
    fontFamily: tokens.fontFamily.primary,
    fontSize: tokens.fontSize.h05,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.h1,
  },

  bodyL: {
    fontFamily: tokens.fontFamily.primary,
    fontSize: tokens.fontSize.bodyL,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
  },

  bodyS: {
    fontFamily: tokens.fontFamily.primary,
    fontSize: tokens.fontSize.bodyS,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
  },

  bodyXS: {
    fontFamily: tokens.fontFamily.primary,
    fontSize: tokens.fontSize.bodyXS,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
  },
} as const;

// Scaling utilities for viewport-based scaling
export const scale = {
  // Viewport-based scaling function
  vw: (value: number, minSize?: number, maxSize?: number) => {
    const vwValue = `${value}vw`;
    if (minSize && maxSize) {
      return `clamp(${minSize}rem, ${value}vw, ${maxSize}rem)`;
    }
    return vwValue;
  },

  // Responsive scaling with proper breakpoints
  responsive: (mobile: string, tablet: string, desktop: string) => ({
    // Mobile: scales with vw below 500px
    fontSize: mobile,
    // Tablet: 501px - 1024px
    [`@media (min-width: ${tokens.breakpoints.mobile})`]: {
      fontSize: tablet,
    },
    // Desktop: 1025px - 1440px
    [`@media (min-width: ${tokens.breakpoints.tablet})`]: {
      fontSize: desktop,
    },
    // Fullwidth: above 1440px (content stays at desktop size, gutters added)
    [`@media (min-width: ${tokens.breakpoints.desktop})`]: {
      fontSize: desktop, // Keep desktop size, gutters handled by layout
    },
  }),

  // Fluid scaling between two sizes
  fluid: (minSize: string, maxSize: string, scaleValue: number) =>
    `clamp(${minSize}, ${scaleValue}vw, ${maxSize})`,
};

// Utility functions for styled-components
export const applyTypography = (variant: keyof typeof typography) =>
  typography[variant];

export const applyScale = (
  scaleValue: number,
  minSize?: number,
  maxSize?: number
) => ({
  fontSize: scale.vw(scaleValue, minSize, maxSize),
});

export const applyResponsiveScale = (
  mobile: string,
  tablet: string,
  desktop: string
) => scale.responsive(mobile, tablet, desktop);
