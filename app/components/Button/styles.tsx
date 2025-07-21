"use client";

import styled from "styled-components";
import { typography, colors } from "@/app/styles/vars";

export const TextWrapper = styled.div<{
  $width: number;
  $height: number;
  $radius: number;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  border-radius: ${({ $radius }) => $radius}px;
  background: ${colors.offWhite};
  z-index: 2;
`;

export const TextContent = styled.div`
  ${typography.bodyS}
  position: relative;
  z-index: 2;
  font-size: 16px;
  font-family: inherit;
  color: ${colors.green400};
  font-weight: 400;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: color 0.3s, border-color 0.3s, transform 0.3s;
  background: transparent;
  border-radius: 25px;
`;

export const TextBorderSVG = styled.svg<{
  $radius: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;

  rect {
    stroke: ${colors.green400};
    transition: stroke 0.3s;
  }
`;

export const HiddenTextMeasure = styled.span`
  position: absolute;
  visibility: hidden;
  white-space: nowrap;
  font-size: 16px;
  font-family: inherit;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const Arrows = styled.div<{ $hovered?: boolean }>`
  display: flex;
  align-items: center;
  z-index: 1;
  transition: color 0.3s, border-color 0.3s, transform 0.3s;
`;

export const ArrowsBorder = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

export const NextWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button<{ $hovered?: boolean }>`
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
    ${TextBorderSVG} rect {
      stroke: ${colors.green200};
    }
  }
`;
