import React from "react";
import { Center, SubHeading, Tagline } from "../../../styles/Common.styled";
import {
  StyledHeroImage,
  StyledHeroSection,
  TextContainer,
  ImageContainer,
  Image,
} from "./HeroSection.styled";

import { StyledHeroWrapper, HeroText, HeroTitle } from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroSection>
        <TextContainer>
          <Center>
            {" "}
            <Tagline display="inline-block" textCenter="center">
              1TM | THE PLATFORM
            </Tagline>
          </Center>
          <HeroTitle align="align">COLLABORATION PORTAL</HeroTitle>
          <SubHeading>FOR CREATORS, ENABLERS AND ENTHUSIASTS</SubHeading>
          <HeroText fontWeight="300">
            1TM is a decentralized collaborative ecosystem for creators,
            enablers and enthusiasts where everyone gets rewarded for their work
            and participation
          </HeroText>
        </TextContainer>

        <StyledHeroImage src="/thePlatform/img-header.webp" />
      </StyledHeroSection>
      <ImageContainer>
        <Image src="/thePlatform/img-sliderBack.webp" alt="#" />
      </ImageContainer>
    </StyledHeroWrapper>
  );
};

export default HeroSection;
