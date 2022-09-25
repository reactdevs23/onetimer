import React from "react";
import {
  TextWrapper,
  TextContainer,
  ImageWrapper,
  Image,
  Button,
} from "./WorkWithUs.styled";

import {
  StyledContainer,
  Tagline,
  TextStrokeColor,
  InfoText,
} from "../../styles/Common.styled";

const WorkWithUs = () => {
  return (
    <StyledContainer>
      <TextWrapper>
        <div></div>
        <TextContainer>
          <Tagline>COLLABORATIVE ECOSYSTEM</Tagline>
          <TextStrokeColor lineHeight="150%">Work With Us</TextStrokeColor>
          <InfoText tabCenter>
            Where creative and passionate people can publish and take
            submissions, contribute and make money amd support unique
            creations!!!
          </InfoText>
          <Button>Contact us</Button>
        </TextContainer>
      </TextWrapper>
      <ImageWrapper>
        <Image src="/workWithus.svg" alt="#"></Image>
        <div></div>
      </ImageWrapper>
    </StyledContainer>
  );
};

export default WorkWithUs;
