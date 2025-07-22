"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowsBorder, Next } from "@/c/SVGs/Arrows";
import gsap from "gsap";

import * as S from "./styles";

export default function Button() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const arrowsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const arrowsBorderRef = useRef<HTMLDivElement>(null);
  const nextWrapperRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const buttonText = "Get a Custom Quote Today";

  useEffect(() => {
    if (!textRef.current || !arrowsRef.current || !buttonRef.current) return;
    const textWidth = textRef.current.offsetWidth;
    const arrowWidth = arrowsRef.current.offsetWidth;
    const gap = 5;
    if (hovered) {
      gsap.to(textRef.current, {
        x: arrowWidth + gap,
        duration: 0.15,
        ease: "power2.out",
      });
      gsap.to(arrowsRef.current, {
        x: -(textWidth + gap),
        duration: 0.05,
        ease: "power2.out",
      });
    } else {
      gsap.to(textRef.current, {
        x: 0,
        duration: 0.15,
        ease: "power2.out",
      });
      gsap.to(arrowsRef.current, {
        x: 0,
        duration: 0.05,
        ease: "power2.out",
      });
    }
  }, [hovered]);

  useEffect(() => {
    if (!nextWrapperRef.current) return;
    if (active) {
      gsap.to(nextWrapperRef.current, {
        x: "100%",
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(nextWrapperRef.current, { x: "-100%" });
          gsap.to(nextWrapperRef.current, {
            x: "0%",
            duration: 0.25,
            ease: "power2.out",
          });
        },
      });
    }
  }, [active]);

  return (
    <S.Button
      ref={buttonRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      <S.TextContent ref={textRef}>{buttonText}</S.TextContent>

      <S.Arrows ref={arrowsRef}>
        <S.ArrowsBorder ref={arrowsBorderRef}>
          <ArrowsBorder />
          <S.NextWrapper ref={nextWrapperRef}>
            <Next />
          </S.NextWrapper>
        </S.ArrowsBorder>
      </S.Arrows>
    </S.Button>
  );
}
