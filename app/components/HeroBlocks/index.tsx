import * as S from "./styles";

import ImgSlider from "@/c/ImgSlider";
import Button from "@/c/Button";

export default function HeroBlocks() {
  return (
    <S.HeroBlocksContainer>
      <S.HeroBlocksContent>
        <S.ContentText>
          Join hundreds of businesses who trust us to offer health insurance
          that works the way it should: affordable coverage that puts employees
          and their doctors in the driving seat.
        </S.ContentText>
        <Button />
      </S.HeroBlocksContent>
      <S.SliderWrap>
        <ImgSlider />
      </S.SliderWrap>
    </S.HeroBlocksContainer>
  );
}
