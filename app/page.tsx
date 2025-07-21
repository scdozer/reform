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
        $mobilePadding={24}
        $tabletPadding={32}
        $desktopPadding={32}
      >
        <Hero />
        <HeroBlocks />
      </ResponsiveContainer>
    </LayoutContainer>
  );
}
