"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { SmoothEase, NoEase, NaturalEase } from "@/utils/gsap";
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
        duration: 20,
      });
    }
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        width: "0%",
        height: "0",
        transformOrigin: "center center",
        ease: "power3.inOut",
        duration: 2.55,
        delay: 1.5,
        onComplete: () => {
          gsap.to(marqueeRef.current, {
            opacity: 0,
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
