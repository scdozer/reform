"use client";
import styled from "styled-components";
import { tokens } from "./vars";

// Layout container that handles gutters for screens larger than 1440px
export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;

  // For screens larger than 1440px, add gutters on the outside
  @media (min-width: ${tokens.breakpoints.desktop}) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
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
      padding: 0 2rem;
    }
  }
`;

// Responsive container that scales with breakpoints
export const ResponsiveContainer = styled.div<{
  $mobilePadding?: string;
  $tabletPadding?: string;
  $desktopPadding?: string;
}>`
  padding: ${(props) => props.$mobilePadding || "1rem"};

  @media (min-width: ${tokens.breakpoints.mobile}) {
    padding: ${(props) => props.$tabletPadding || "2rem"};
  }

  @media (min-width: ${tokens.breakpoints.tablet}) {
    padding: ${(props) => props.$desktopPadding || "3rem"};
  }

  @media (min-width: ${tokens.breakpoints.desktop}) {
    padding: ${(props) => props.$desktopPadding || "3rem"};
  }
`;

// Grid system that respects breakpoints
export const Grid = styled.div<{
  $columns?: number;
  $gap?: string;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns || 1}, 1fr);
  gap: ${(props) => props.$gap || "1rem"};

  @media (min-width: ${tokens.breakpoints.mobile}) {
    grid-template-columns: repeat(
      ${(props) => Math.min((props.$columns || 1) + 1, 4)},
      1fr
    );
  }

  @media (min-width: ${tokens.breakpoints.tablet}) {
    grid-template-columns: repeat(${(props) => props.$columns || 1}, 1fr);
  }
`;
