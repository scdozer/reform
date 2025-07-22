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
    wide: "10%",
  },
  lineHeight: {
    h1: "120%",
    body: "140%",
  },

  breakpoints: {
    mobile: 500,
    tablet: 1024,
    desktop: 1440,
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

export const media = {
  mobile: `@media (max-width: 500px)`,
  tablet: `@media (min-width: 501px) and (max-width: 1024px)`,
  desktop: `@media (min-width: 1025px)`,
} as const;

export const typography = {
  h1: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.h1,
    fontSize: "112px",
  },
  h05: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.h1,
    fontSize: "48px",
  },
  title: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.wide,
    lineHeight: tokens.lineHeight.h1,
    fontSize: "12px",
  },
  bodyXL: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
    fontSize: "28px",
  },
  bodyL: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
    fontSize: "24px",
  },
  body: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
    fontSize: "20px",
  },
  bodyS: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
    fontSize: "16px",
  },
  bodyXS: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
    fontSize: "14px",
  },
  bodyXXS: {
    fontFamily: tokens.fontFamily.primary,
    fontWeight: tokens.fontWeight.buch,
    letterSpacing: tokens.letterSpacing.tight,
    lineHeight: tokens.lineHeight.body,
    fontSize: "12px",
  },
} as const;
