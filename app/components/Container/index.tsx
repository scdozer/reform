"use client";

import { useEffect, useState } from "react";

import styled from "styled-components";
import { scaleStyle } from "@/utils/responsive";

import { media } from "@/app/styles/vars";

const ContainerWrap = styled.div`
  ${scaleStyle(`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 32px;

    ${media.mobile} {
      padding: 0 16px;
    }
  `)}
`;

export default function Container({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return <ContainerWrap>{isLoaded ? children : null}</ContainerWrap>;
}
