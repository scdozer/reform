"use client";

import styled from "styled-components";
import { typography, colors } from "@/app/styles/vars";

export const HeroBlocksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
`;

export const HeroBlocksContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  grid-column: 1 / 4;
  border: 1px solid ${colors.green100};
  padding: 32px;
  min-height: 328px;
`;

export const ContentText = styled.p`
  ${typography.bodyL}
  color: ${colors.black200};
  max-width: 500px;
`;

export const SliderWrap = styled.div`
  grid-column: 4 / 7;
  border: 1px solid ${colors.green100};
`;
