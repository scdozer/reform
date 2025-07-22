"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

import * as S from "./styles";

import MarqueeItems from "./Items";

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: "-50%",
        ease: "none",
        duration: 2,
      });
    }
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        scale: 0,
        width: 0,
        height: 0,
        margin: "0 0 0 0",
        transformOrigin: "center center",
        ease: "power3.inOut",
        duration: 2.92,
        delay: 1.5,
        onComplete: () => {
          gsap.to(marqueeRef.current, {
            opacity: 0,
            visibility: "hidden",
            border: "none",
            ease: "none",
            duration: 0.1,
          });
        },
      });
    }
  }, []);

  return (
    <S.MarqueeWrap ref={marqueeRef}>
      <S.MarqueeContent ref={contentRef}>
        <MarqueeItems />
      </S.MarqueeContent>
    </S.MarqueeWrap>
  );
}
