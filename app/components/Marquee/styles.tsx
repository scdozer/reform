"use client";

import styled from "styled-components";
import { scaleStyle, toCssString } from "@/utils/responsive";

import { colors, typography, media } from "@/app/styles/vars";

export const MarqueeWrap = styled.div`
  ${scaleStyle(`
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    border: 1px solid ${colors.green100};
    border-radius: 12px;
    max-width: 662px;
    margin: 0 42px;

    ${media.tablet} {
      max-width: 292px;
      margin: 0 10px;
    }

    ${media.mobile} {
      display: block;
      max-width: 100%;
      margin: 20px 8px;
    }
  `)}
`;

export const MarqueeContent = styled.div`
  ${scaleStyle(`
    display: flex;
    gap: 20px;
    padding: 35px 0;
    color: ${colors.orange};
    text-transform: uppercase;
    ${toCssString(typography.title)}
  `)}
`;
