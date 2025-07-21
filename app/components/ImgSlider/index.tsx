"use client";

import { useRef, useEffect } from "react";
import { SmoothEase, NoEase, NaturalEase } from "@/utils/gsap";
import { ResponsiveContainer } from "@/app/styles/LayoutComponents";
import Image from "next/image";
import gsap from "gsap";

import * as S from "./styles";

const CARD_WIDTH = 493;
const CARD_HEIGHT = 244;
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

export default function ImgSlider() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);
  const cardDataRef = useRef([
    { imgIndex: 0, position: 0 },
    { imgIndex: 1, position: 1 },
    { imgIndex: 2, position: 2 },
    { imgIndex: 3, position: 3 },
  ]);

  const updateCardImages = () => {
    cardDataRef.current.forEach((card, pos) => {
      const cardElement = cardsRef.current[pos];
      if (cardElement) {
        const imgElement = cardElement.querySelector("img");
        if (imgElement) {
          const imgIndex = (currentIndexRef.current + pos) % images.length;
          imgElement.src = images[imgIndex];
          imgElement.alt = `Insurance Card ${imgIndex + 1}`;
        }
      }
    });
  };

  const resetCardPositions = () => {
    cardDataRef.current.forEach((card, pos) => {
      const cardElement = cardsRef.current[pos];
      if (cardElement) {
        let x = 0;
        let scale = 1;

        switch (pos) {
          case 0:
            x = -CARD_WIDTH;
            scale = 0.8;
            break;
          case 1:
            x = 0;
            scale = 1;
            break;
          case 2:
            x = CARD_WIDTH;
            scale = 0.8;
            break;
          default:
            x = -CARD_WIDTH * 2;
            scale = 0.8;
            break;
        }

        gsap.set(cardElement, {
          x,
          scale,
        });
      }
    });
  };

  const animateSlider = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        currentIndexRef.current = (currentIndexRef.current + 1) % images.length;
        updateCardImages();
        resetCardPositions();
      },
    });

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
        x: `+=${CARD_WIDTH}`,
        duration: 2.71,
        ease: NaturalEase,
      },
      ">"
    );

    tl.to(
      cardsRef.current[0],
      {
        scale: 1,
        duration: ANIMATION_DURATION,
        ease: NaturalEase,
      },
      ">"
    );
  };

  useEffect(() => {
    resetCardPositions();
    updateCardImages();

    animateSlider();

    intervalRef.current = setInterval(animateSlider, SLIDE_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <ResponsiveContainer
      $mobilePadding={0}
      $tabletPadding={0}
      $desktopPadding={0}
    >
      <S.ImgSliderContainer>
        {cardDataRef.current.map((card, pos) => (
          <S.ImgSliderCard
            key={`card-${pos}`}
            ref={(el) => {
              cardsRef.current[pos] = el;
            }}
          >
            <Image
              src={images[card.imgIndex]}
              alt={`Insurance Card ${card.imgIndex + 1}`}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
            />
          </S.ImgSliderCard>
        ))}
      </S.ImgSliderContainer>
    </ResponsiveContainer>
  );
}
