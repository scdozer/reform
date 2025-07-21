"use client";
import styled from "styled-components";
import { tokens } from "./vars";

// Layout container that handles gutters for screens larger than 1440px
export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  // For screens larger than 1440px, add gutters on the outside
  @media (min-width: ${tokens.breakpoints.desktop}) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

// Full width container for screens larger than 1440px
export const FullWidthContainer = styled.div`
  width: 100%;

  // For screens larger than 1440px, center the content and add gutters
  @media (min-width: ${tokens.breakpoints.desktop}) {
    display: flex;
    justify-content: center;

    & > * {
      max-width: 1440px;
      width: 100%;
    }
  }
`;

// Responsive container that scales with viewport width
export const ResponsiveContainer = styled.div<{
  $mobilePadding?: number;
  $tabletPadding?: number;
  $desktopPadding?: number;
}>`
  // Mobile: scales with vw below 500px
  padding: ${(props) =>
    props.$mobilePadding
      ? `${(props.$mobilePadding / tokens.designSizes.mobile) * 100}vw`
      : `${(40 / tokens.designSizes.mobile) * 100}vw`};

  // Tablet: 501px - 1024px
  @media (min-width: ${tokens.breakpoints.mobile}) {
    padding: ${(props) =>
      props.$tabletPadding
        ? `${(props.$tabletPadding / tokens.designSizes.tablet) * 100}vw`
        : `${(20 / tokens.designSizes.tablet) * 100}vw`};
  }

  // Desktop: 1025px - 1440px
  @media (min-width: ${tokens.breakpoints.tablet}) {
    padding: ${(props) =>
      props.$desktopPadding
        ? `${(props.$desktopPadding / tokens.designSizes.desktop) * 100}vw`
        : `${(20 / tokens.designSizes.desktop) * 100}vw`};
  }

  // Fullwidth: above 1440px (fixed pixel values)
  @media (min-width: ${tokens.breakpoints.desktop}) {
    padding: ${(props) =>
      props.$desktopPadding ? `${props.$desktopPadding}px` : "20px"};
  }
`;

// Grid system that respects breakpoints
export const Grid = styled.div<{
  $columns?: number;
  $gap?: number;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns || 1}, 1fr);
  gap: ${(props) =>
    props.$gap
      ? `${(props.$gap / tokens.designSizes.mobile) * 100}vw`
      : `${(16 / tokens.designSizes.mobile) * 100}vw`};

  @media (min-width: ${tokens.breakpoints.mobile}) {
    grid-template-columns: repeat(
      ${(props) => Math.min((props.$columns || 1) + 1, 4)},
      1fr
    );
    gap: ${(props) =>
      props.$gap
        ? `${(props.$gap / tokens.designSizes.tablet) * 100}vw`
        : `${(16 / tokens.designSizes.tablet) * 100}vw`};
  }

  @media (min-width: ${tokens.breakpoints.tablet}) {
    grid-template-columns: repeat(${(props) => props.$columns || 1}, 1fr);
    gap: ${(props) =>
      props.$gap
        ? `${(props.$gap / tokens.designSizes.desktop) * 100}vw`
        : `${(16 / tokens.designSizes.desktop) * 100}vw`};
  }

  @media (min-width: ${tokens.breakpoints.desktop}) {
    gap: ${(props) => (props.$gap ? `${props.$gap}px` : "16px")};
  }
`;
