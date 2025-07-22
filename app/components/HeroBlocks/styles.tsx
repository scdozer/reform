"use client";

import styled from "styled-components";
import { scaleStyle, toCssString } from "@/utils/responsive";
import { typography, colors, media } from "@/app/styles/vars";

export const HeroBlocksContainer = styled.div`
  ${scaleStyle(`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;

    ${media.tablet} {
      grid-template-columns: 1fr 1fr 0.5fr 1fr 1fr 1fr 1fr;
      min-height: 600px;
    }

    ${media.mobile} {
     grid-template-columns: repeat(6, 1fr);
    }
  `)}
`;

export const HeroBlocksContent = styled.div`
  ${scaleStyle(`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    grid-column: 1 / 4;
    border: 1px solid ${colors.green100};
    padding: 32px;
    min-height: 328px;

    ${media.tablet} {
      grid-column: 1 / 4;
    }

    ${media.mobile} {
      grid-row: 2;
      grid-column: 1 / 7;
      padding: 20px;
      min-height: 208px;
    }
  `)}
`;

export const ContentText = styled.p`
  ${scaleStyle(`
    ${toCssString(typography.bodyL)}
    color: ${colors.black200};
    width: 499px;

    ${media.tablet} {
      width: 100%;
    }

    ${media.mobile} {
      width: 100%;
      ${toCssString(typography.bodyXS)}
    }
  `)}
`;

export const SliderWrap = styled.div`
  ${scaleStyle(`
    grid-column: 4 / 7;
    border: 1px solid ${colors.green100};

    ${media.tablet} {
      grid-column: 4 / 8;
    }


    ${media.mobile} {
      grid-row: 1;
      grid-column: 1 / 7;
    }
  `)}
`;
