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

  // Design sizes for scaling calculations
  designSizes: {
    mobile: 375,
    tablet: 1024,
    desktop: 1440,
  },

  breakpoints: {
    mobile: "500px", // Mobile scaling stops, tablet begins
    tablet: "1024px", // Tablet scaling stops, desktop begins
    desktop: "1440px", // Desktop scaling stops, gutters begin
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

// Scaling utilities for viewport-based scaling
export const scale = {
  // Calculate vw value based on design size and target size
  vw: (targetSize: number, designSize: number) => {
    return `${(targetSize / designSize) * 100}vw`;
  },

  // Responsive scaling with proper breakpoints
  responsive: (
    mobileSize: number,
    tabletSize: number,
    desktopSize: number
  ) => ({
    // Mobile: scales with vw below 500px (using mobile design size)
    fontSize: `${(mobileSize / tokens.designSizes.mobile) * 100}vw`,

    // Tablet: 501px - 1024px (using tablet design size)
    [`@media (min-width: ${tokens.breakpoints.mobile})`]: {
      fontSize: `${(tabletSize / tokens.designSizes.tablet) * 100}vw`,
    },

    // Desktop: 1025px - 1440px (using desktop design size)
    [`@media (min-width: ${tokens.breakpoints.tablet})`]: {
      fontSize: `${(desktopSize / tokens.designSizes.desktop) * 100}vw`,
    },

    // Fullwidth: above 1440px (content stays at desktop size, gutters added)
    [`@media (min-width: ${tokens.breakpoints.desktop})`]: {
      fontSize: `${desktopSize}px`, // Fixed pixel size for large screens
    },
  }),

  // Fluid scaling between two sizes
  fluid: (minSize: string, maxSize: string, scaleValue: number) =>
    `clamp(${minSize}, ${scaleValue}vw, ${maxSize})`,
};

// Typography presets with exact specifications
export const typography = {
  h1: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.h1,
    ...scale.responsive(112, 112, 112), // 112px = 7rem equivalent
  },

  h05: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.h1,
    ...scale.responsive(48, 48, 48), // 48px = 3rem equivalent
  },

  bodyL: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
    ...scale.responsive(28, 28, 28), // 28px = 1.75rem equivalent
  },

  bodyS: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
    ...scale.responsive(16, 16, 16), // 16px = 1rem equivalent
  },

  bodyXS: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
    ...scale.responsive(14, 14, 14), // 14px = 0.875rem equivalent
  },
} as const;

// Utility functions for styled-components
export const applyTypography = (variant: keyof typeof typography) =>
  typography[variant];

export const applyScale = (targetSize: number, designSize: number) => ({
  fontSize: scale.vw(targetSize, designSize),
});

export const applyResponsiveScale = (
  mobileSize: number,
  tabletSize: number,
  desktopSize: number
) => scale.responsive(mobileSize, tabletSize, desktopSize);
