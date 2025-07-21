"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import * as S from "./styles";

import { colors } from "@/app/styles/vars";
import Marquee from "../Marquee";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.to(heroRef.current.querySelectorAll("span"), {
        color: colors.green200,
        duration: 1.05,
        ease: "linear(0, -0.0013, -0.0052, -0.0115, -0.0199, -0.0302, -0.0421, -0.0554, -0.0697, -0.0847, -0.1, -0.1153, -0.1303, -0.1446, -0.1579, -0.1698, -0.1801, -0.1885, -0.1948, -0.1987, -0.2, -0.1986, -0.1942, -0.1863, -0.1744, -0.1578, -0.136, -0.1079, -0.0725, -0.0288, 0.0241, 0.087, 0.1594, 0.2396, 0.3241, 0.4088, 0.4899, 0.5651, 0.6332, 0.6941, 0.7482, 0.796, 0.8384, 0.8758, 0.9088, 0.9379, 0.9636, 0.9863, 1.0061, 1.0235, 1.0386, 1.0517, 1.0628, 1.0723, 1.0801, 1.0865, 1.0916, 1.0954, 1.098, 1.0995, 1.1, 1.0997, 1.0987, 1.097, 1.0947, 1.0919, 1.0885, 1.0847, 1.0806, 1.0762, 1.0717, 1.0671, 1.0624, 1.0578, 1.0533, 1.0489, 1.0447, 1.0406, 1.0368, 1.0332, 1.0297, 1.0265, 1.0235, 1.0207, 1.0181, 1.0157, 1.0135, 1.0115, 1.0097, 1.008, 1.0065, 1.0052, 1.0041, 1.0031, 1.0022, 1.0015, 1.001, 1.0005, 1.0002, 1.0001, 1);",
        delay: 3.75,
      });
    }
  }, []);

  return (
    <div ref={heroRef}>
      <S.H1>
        Health insurance that <span>doesn&apos;t</span> <span>get in </span>{" "}
        <Marquee /> <span>the way.</span>
      </S.H1>
    </div>
  );
}
