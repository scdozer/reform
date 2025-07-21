"use client";

import styled from "styled-components";
import { typography, colors } from "@/app/styles/vars";

export const ImgSliderContainer = styled.div`
  width: 100%;
  height: 328px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgSliderCard = styled.div<{ $active?: boolean }>`
  position: absolute;
  width: 493px;
  height: 244px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  will-change: transform;
`;
