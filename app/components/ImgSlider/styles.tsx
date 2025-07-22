"use client";

import styled from "styled-components";
import { scaleStyle } from "@/utils/responsive";
import { media } from "@/app/styles/vars";

export const ImgSliderContainer = styled.div<{ $isTablet?: boolean }>`
  ${scaleStyle(`
    width: 100%;
    height: 328px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.tablet} {
      height: 600px;
    }

    ${media.mobile} {
      height: 190px;
    }
  `)}
`;

export const ImgSliderCard = styled.div<{
  $active?: boolean;
  $isTablet?: boolean;
}>`
  ${scaleStyle(`
    position: absolute;
    width: 493px;
    height: 244px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    will-change: transform;

    ${media.mobile} {
      width: 246px;
      height: 122px;
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  `)}
`;
