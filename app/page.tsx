import Hero from "@/c/Hero";
import HeroBlocks from "@/c/HeroBlocks";

import {
  LayoutContainer,
  ResponsiveContainer,
} from "@/app/styles/LayoutComponents";

export default function Home() {
  return (
    <LayoutContainer>
      <ResponsiveContainer
        $mobilePadding="1rem"
        $tabletPadding="2rem"
        $desktopPadding="3rem"
      >
        <Hero />
        <HeroBlocks />
      </ResponsiveContainer>
    </LayoutContainer>
  );
}
