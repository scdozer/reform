"use client";

import styled from "styled-components";
import { colors, typography } from "@/app/styles/vars";
import { scaleStyle, toCssString } from "@/utils/responsive";

export const TextContent = styled.div`
  ${scaleStyle(`
    position: relative;
    z-index: 2;
    ${toCssString(typography.bodyS)}
    color: ${colors.green400};
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    white-space: nowrap;
    border-radius: 25px;
    transition: color 0.3s, border-color 0.3s;
    padding: 19px 24px;
    background: ${colors.offWhite}; 
    border: 1px solid ${colors.green400};
  `)}
`;

export const Arrows = styled.div<{ $hovered?: boolean }>`
  ${scaleStyle(`
    display: flex;
    align-items: center;
    z-index: 1;
    transition: color 0.3s, border-color 0.3s, transform 0.3s;
  `)}
`;

export const ArrowsBorder = styled.div`
  ${scaleStyle(`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
  `)}
`;

export const NextWrapper = styled.div`
  ${scaleStyle(`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `)}
`;

export const Button = styled.button<{ $hovered?: boolean }>`
  ${scaleStyle(`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 50px;
    width: auto;
    min-width: 0;
    position: relative;
    align-self: flex-start;
    flex-shrink: 0;
    max-width: 100%;

    &:hover {
      ${TextContent} {
        color: ${colors.green200};
        border-color: ${colors.green200};
      }
      ${Arrows} {
        svg {
          path {
            stroke: ${colors.green200};
          }
        }
      }
    }
  `)}
`;
