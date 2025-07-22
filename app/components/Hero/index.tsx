"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import * as S from "./styles";

import { colors } from "@/app/styles/vars";
import Marquee from "../Marquee";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSpace, setShowSpace] = useState(false);

  useEffect(() => {
    if (heroRef.current) {
      gsap.to(heroRef.current.querySelectorAll("span"), {
        color: colors.green200,
        skewX: -10,
        force3D: true,
        duration: 1.05,
        ease: "power1.inOut",
        delay: 3.75,
      });
    }
    const timeout = setTimeout(() => setShowSpace(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const renderContent = () => (
    <div ref={heroRef}>
      <S.Desktop>
        Health insurance that <S.AnimSpan>doesn&apos;t</S.AnimSpan>
        <S.AnimSpan> get in</S.AnimSpan>
        {showSpace && <span>&nbsp;</span>}
        <Marquee />
        <S.AnimSpan>the way.</S.AnimSpan>
      </S.Desktop>
      <S.Tablet>
        Health insurance
        <br />
        that <S.AnimSpan>doesn&apos;t</S.AnimSpan>
        <br />
        <S.AnimSpan>get in</S.AnimSpan>
        <Marquee />
        {showSpace && <span>&nbsp;</span>}
        <S.AnimSpan>the way.</S.AnimSpan>
      </S.Tablet>
      <S.Mobile>
        Health insurance
        <br />
        that <S.AnimSpan>doesn&apos;t get</S.AnimSpan>
        <br />
        <Marquee />
        <S.AnimSpan>in the way.</S.AnimSpan>
      </S.Mobile>
    </div>
  );

  return <div>{renderContent()}</div>;
}
