"use client";

import styled from "styled-components";
import { scaleStyle, toCssString } from "@/utils/responsive";
import { typography, colors, media } from "@/app/styles/vars";

export const H1 = styled.h1`
  ${scaleStyle(`
    text-align: center;
    ${media.mobile} {
      ${toCssString(typography.h05)}

      padding-top: 94px;
      padding-bottom: 70px;
      max-width: 343px;
    }
    ${media.tablet} {
      ${toCssString(typography.h1)}
      color: ${colors.green500};
      padding-top: 156px;
      padding-bottom: 91px;

    }
    ${media.desktop} {
      ${toCssString(typography.h1)}
      color: ${colors.green500};
      padding-top: 156px;
      padding-bottom: 91px;
    }
  `)}
`;

export const AnimSpan = styled.span`
  display: inline-block;
`;

export const HiddenSpace = styled.span`
  display: none;
`;

export const Desktop = styled(H1)`
  ${media.desktop} {
    display: block;
  }
  display: none;
`;

export const Tablet = styled(H1)`
  ${media.tablet} {
    display: block;
  }
  display: none;
`;

export const Mobile = styled(H1)`
  display: none;

  ${media.mobile} {
    display: block;
  }
`;
