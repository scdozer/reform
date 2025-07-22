"use client";

import { useRef, useEffect, useMemo, useCallback, useState } from "react";
import { NaturalEase } from "@/utils/gsap";
import Image from "next/image";
import gsap from "gsap";

import * as S from "./styles";

const SLIDE_INTERVAL = 7000;
const ANIMATION_DURATION = 0.9;

const images = [
  "/img/insurance-card.png",
  "/img/insurance-card.png",
  "/img/insurance-card.png",
  "/img/insurance-card.png",
  "/img/insurance-card.png",
  "/img/insurance-card.png",
];

function getDirection(width: number) {
  return width >= 501 && width <= 1024 ? "y" : "x";
}

export default function ImgSlider() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const currentIndexRef = useRef(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Card data: 4 visible cards (left-peek, center, right-peek, next)
  const cardData = useMemo(() => [0, 1, 2, 3], []);

  const direction = getDirection(windowWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset all card positions and scales
  const resetCardTransforms = useCallback(() => {
    cardData.forEach((_, pos) => {
      const card = cardsRef.current[pos];
      if (!card) return;
      const offset = pos - 1; // -1, 0, +1, +2
      const scale = 0.8;
      const transform =
        direction === "x"
          ? { xPercent: -offset * 100, yPercent: 0, scale }
          : { xPercent: 0, yPercent: -offset * 100, scale };
      gsap.set(card, transform);
    });
  }, [cardData, direction]);

  const updateCardImages = useCallback(() => {
    gsap.set(cardsRef.current[1], { scale: 1 });
  }, []);

  // Animate to next card (reverse direction)
  const animateSlider = useCallback(() => {
    const move =
      direction === "x" ? { xPercent: "+=100" } : { yPercent: "+=100" };

    const tl = gsap.timeline({
      onComplete: () => {
        currentIndexRef.current =
          (currentIndexRef.current - 1 + images.length) % images.length;
        updateCardImages();
        resetCardTransforms();
        const centerCard = cardsRef.current[1];
        if (centerCard) {
          gsap.to(centerCard, {
            scale: 1,
            duration: ANIMATION_DURATION,
            ease: NaturalEase,
          });
        }
      },
    });
    timelineRef.current = tl;

    if (cardsRef.current[1]) {
      tl.to(cardsRef.current[1], {
        scale: 0.8,
        duration: ANIMATION_DURATION,
        ease: NaturalEase,
      });
    }

    tl.to(
      cardsRef.current,
      {
        ...move,
        duration: 2.71,
        ease: NaturalEase,
      },
      ">"
    );
  }, [direction, updateCardImages, resetCardTransforms]);

  useEffect(() => {
    const cards = cardsRef.current;
    const interval = intervalRef.current;
    const timeout = timeoutRef.current;

    gsap.killTweensOf(cards);
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
    if (interval) clearInterval(interval);
    if (timeout) clearTimeout(timeout);

    resetCardTransforms();
    updateCardImages();

    animateSlider();
    intervalRef.current = setInterval(animateSlider, SLIDE_INTERVAL);

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
      gsap.killTweensOf(cards);
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [
    animateSlider,
    direction,
    resetCardTransforms,
    updateCardImages,
    windowWidth,
  ]);

  return (
    <S.ImgSliderContainer
      ref={containerRef}
      $isTablet={direction === "y"}
      key={direction + windowWidth}
    >
      {cardData.map((_, pos) => (
        <S.ImgSliderCard
          key={`card-${pos}`}
          ref={(el) => {
            cardsRef.current[pos] = el;
          }}
          $isTablet={direction === "y"}
        >
          <Image src={images[0]} alt="Insurance Card" fill />
        </S.ImgSliderCard>
      ))}
    </S.ImgSliderContainer>
  );
}
