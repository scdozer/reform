"use client";

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { ArrowsBorder, Next } from "@/c/SVGs/Arrows";
import gsap from "gsap";

import * as S from "./styles";

function SVGWrappedText({
  text,
  textRef,
}: {
  text: string;
  textRef: React.RefObject<HTMLDivElement | null>;
}) {
  //to make sure there is a .75px border on the text

  const [textWidth, setTextWidth] = useState(0);
  const textMeasureRef = useRef<HTMLSpanElement>(null);
  const horizontalPadding = 39;
  const borderRadius = 25;
  const svgHeight = 50;

  useLayoutEffect(() => {
    if (textMeasureRef.current) {
      setTextWidth(textMeasureRef.current.offsetWidth);
    }
  }, [text]);

  return (
    <S.TextWrapper
      $width={textWidth + horizontalPadding}
      $height={svgHeight}
      $radius={borderRadius}
      ref={textRef}
    >
      <S.TextContent>{text}</S.TextContent>
      <S.TextBorderSVG
        width={textWidth + horizontalPadding}
        height={svgHeight}
        viewBox={`0 0 ${textWidth + horizontalPadding} ${svgHeight}`}
        $radius={borderRadius}
      >
        <rect
          x="0.375"
          y="0.375"
          width={textWidth + horizontalPadding - 0.75}
          height={svgHeight - 0.75}
          rx={borderRadius}
          strokeWidth="0.75"
          fill="none"
        />
      </S.TextBorderSVG>
      {/* Hidden span for measuring text width */}
      <S.HiddenTextMeasure ref={textMeasureRef}>{text}</S.HiddenTextMeasure>
    </S.TextWrapper>
  );
}

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
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.to(arrowsRef.current, {
        x: -(textWidth + gap),
        duration: 0.4,
        ease: "power2.in",
      });
    } else {
      gsap.to(textRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.to(arrowsRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power2.in",
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
      <SVGWrappedText text={buttonText} textRef={textRef} />
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
