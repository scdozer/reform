"use client";

import styled from "styled-components";

import { colors } from "@/app/styles/vars";

export const MarqueeWrap = styled.div`
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;

  border: 1px solid ${colors.green100};
  border-radius: 12px;
  max-width: 662px;
`;

export const MarqueeContent = styled.div`
  display: flex;
  gap: 20px;
  padding: 35px 0;
  color: ${colors.orange};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 10%;
  line-height: 120%;
`;
