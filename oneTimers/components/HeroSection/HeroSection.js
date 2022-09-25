import React from "react";
import { Tagline, TextStrokeColor } from "../../styles/Common.styled";
import {
  StyledHeroImage,
  StyledHeroSection,
  TextContainer,
} from "./HeroSection.styled";

import { StyledHeroWrapper, HeroText, HeroTitle } from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroSection>
        <TextContainer>
          <Tagline textCenter="center">MEET 1TMERS</Tagline>
          <HeroTitle align="align">
            1TM <TextStrokeColor>ERS</TextStrokeColor>
          </HeroTitle>
          <HeroText>
            We are a group of pioneers, creators and engineers dedicated to
            building a collaborative ecosystem for creators and enablers.
          </HeroText>
        </TextContainer>

        <StyledHeroImage src="/heroBg.webp" />
      </StyledHeroSection>
    </StyledHeroWrapper>
  );
};

export default HeroSection;
