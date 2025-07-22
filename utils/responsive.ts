const MOBILE_WIDTH = 375;
const TABLET_WIDTH = 1024;
const DESKTOP_WIDTH = 1440;
const MOBILE_MAX = 500;
const TABLET_MIN = 501;
const TABLET_MAX = 1024;
const DESKTOP_MIN = 1025;
const DESKTOP_MAX = 1440;

function pxToVw(px: number, base: number): string {
  return `${(px / base) * 100}vw`;
}

/**
 * Scales px values in a CSS string for mobile, tablet, desktop, and fullwidth breakpoints.
 * For >1440px, uses pixel values and adds gutters.
 * @param cssString - The CSS string to convert
 * @returns The CSS string with responsive scaling
 */
export function scaleStyle(cssString: TemplateStringsArray | string): string {
  let str: string = "";
  if (typeof cssString === "string") {
    str = cssString;
  } else if (Array.isArray(cssString)) {
    str = cssString.join("");
  }

  // Replace all px values with tokens for later replacement
  const pxRegex = /(\d+)px/g;
  const tokens: string[] = [];
  const tokenized = str.replace(pxRegex, (_: string, px: string) => {
    const token = `__PX_TOKEN_${tokens.length}__`;
    tokens.push(px);
    return token;
  });

  // Build CSS for each breakpoint
  let mobileCSS = tokenized;
  let tabletCSS = tokenized;
  let desktopCSS = tokenized;
  let fullwidthCSS = tokenized;

  // Replace tokens with vw for each breakpoint
  tokens.forEach((px, i) => {
    mobileCSS = mobileCSS.replace(
      `__PX_TOKEN_${i}__`,
      pxToVw(Number(px), MOBILE_WIDTH)
    );
    tabletCSS = tabletCSS.replace(
      `__PX_TOKEN_${i}__`,
      pxToVw(Number(px), TABLET_WIDTH)
    );
    desktopCSS = desktopCSS.replace(
      `__PX_TOKEN_${i}__`,
      pxToVw(Number(px), DESKTOP_WIDTH)
    );
    // For fullwidth, use px (centered content, gutters handled in layout)
    fullwidthCSS = fullwidthCSS.replace(`__PX_TOKEN_${i}__`, `${px}px`);
  });

  // Output CSS with media queries
  return `
    @media (max-width: ${MOBILE_MAX}px) {
      ${mobileCSS}
    }
    @media (min-width: ${TABLET_MIN}px) and (max-width: ${TABLET_MAX}px) {
      ${tabletCSS}
    }
    @media (min-width: ${DESKTOP_MIN}px) and (max-width: ${DESKTOP_MAX}px) {
      ${desktopCSS}
    }
    @media (min-width: ${DESKTOP_MAX + 1}px) {
      ${fullwidthCSS}
    }
  `;
}

export function toCssString(obj: Record<string, string | number>): string {
  return Object.entries(obj)
    .map(([key, value]) => {
      const kebabKey = key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
      return `${kebabKey}: ${value};`;
    })
    .join("\n");
}
