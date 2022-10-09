import React from "react";
import { Tagline, TextStrokeColor } from "../../../styles/Common.styled";
import {
  StyledHeroImage,
  StyledWorkWithBrands,
  TextContainer,
  StyledHeroWrapper,
  HeroText,
  MobileImage,
} from "./WorkWithBrands.styled";

const WorkWithBrands = () => {
  return (
    <StyledHeroWrapper>
      <StyledWorkWithBrands>
        <TextContainer>
          <Tagline textCenter="center">
            Stand on the shoulders of giants
          </Tagline>
          <TextStrokeColor textCenter="center" color="#12121A">
            Work with brands
          </TextStrokeColor>

          <HeroText fontWeight="300">
            As a creator, collaborating with your favorite brand is no longer a
            distant dream. At 1TM, you can start contributing right away by
            proactively submitting your works to brand-initiated space,
            participating in a brand-run contest, <br />
            or listing your fan art in their open marketplace.
          </HeroText>
          <HeroText>
            All these with <br />
            authorship protection, NFTCommons, and Revenue Split.
          </HeroText>
        </TextContainer>

        <StyledHeroImage src="/thePlatform/img-brands.webp" />
        <MobileImage src="thePlatform/img-brands_m.webp" />
      </StyledWorkWithBrands>
    </StyledHeroWrapper>
  );
};

export default WorkWithBrands;
