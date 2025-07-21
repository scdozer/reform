"use client";

import styled from "styled-components";
import { tokens, typography, scale } from "./vars";

// Typography styled components using the exact specifications
export const H1 = styled.h1`
  ${typography.h1}
  margin: 0;
  padding: 0;
`;

export const H05 = styled.h1`
  ${typography.h05}
  margin: 0;
  padding: 0;
`;

export const BodyL = styled.p`
  ${typography.bodyL}
  margin: 0;
  padding: 0;
`;

export const BodyS = styled.p`
  ${typography.bodyS}
  margin: 0;
  padding: 0;
`;

export const BodyXS = styled.p`
  ${typography.bodyXS}
  margin: 0;
  padding: 0;
`;

// Flexible scaling components with proper breakpoints
interface ScalingProps {
  $scale: number;
  $minSize?: number;
  $maxSize?: number;
}

export const ScalingText = styled.span<ScalingProps>`
  font-family: ${tokens.fontFamily.primary};
  font-weight: ${tokens.fontWeight.buch};
  letter-spacing: ${tokens.letterSpacing.tight};
  font-size: ${(props) =>
    scale.vw(props.$scale, props.$minSize, props.$maxSize)};
  line-height: ${tokens.lineHeight.body};
`;

// Generic scaling component for any element
export const ScalingElement = styled.div<ScalingProps>`
  font-size: ${(props) =>
    scale.vw(props.$scale, props.$minSize, props.$maxSize)};
`;

// Responsive scaling with proper breakpoints
interface ResponsiveProps {
  $mobile: string;
  $tablet: string;
  $desktop: string;
}

export const ResponsiveText = styled.span<ResponsiveProps>`
  font-family: ${tokens.fontFamily.primary};
  font-weight: ${tokens.fontWeight.buch};
  letter-spacing: ${tokens.letterSpacing.tight};
  line-height: ${tokens.lineHeight.body};
  ${(props) => scale.responsive(props.$mobile, props.$tablet, props.$desktop)}
`;

export const ResponsiveElement = styled.div<ResponsiveProps>`
  ${(props) => scale.responsive(props.$mobile, props.$tablet, props.$desktop)}
`;

// Fluid scaling between two sizes
interface FluidProps {
  $minSize: string;
  $maxSize: string;
  $scaleValue: number;
}

export const FluidText = styled.span<FluidProps>`
  font-family: ${tokens.fontFamily.primary};
  font-weight: ${tokens.fontWeight.buch};
  letter-spacing: ${tokens.letterSpacing.tight};
  font-size: ${(props) =>
    scale.fluid(props.$minSize, props.$maxSize, props.$scaleValue)};
  line-height: ${tokens.lineHeight.body};
`;

export const FluidElement = styled.div<FluidProps>`
  font-size: ${(props) =>
    scale.fluid(props.$minSize, props.$maxSize, props.$scaleValue)};
`;
