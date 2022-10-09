import React from "react";
import {
  Center,
  InfoText,
  StyledContainer,
  Tagline,
  TextStrokeColor,
} from "../../../styles/Common.styled";
import {
  Wrapper,
  Image,
  TextContainer,
  TabImage,
  MobileImage,
  Br,
} from "./BuildYourReputation.styled";

const BuildYourReputation = () => {
  return (
    <Wrapper>
      <TextContainer
        data-aos="fade-up "
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        <Center mobileCenter>
          <Tagline mobileTextCenter>Get enthused</Tagline>
        </Center>
        <TextStrokeColor
          color="#12121A
"
          mobileTextCenter
        >
          Build your <br /> reputation
        </TextStrokeColor>
        <InfoText mobileTextCenter paddingTop="25px">
          Start sharing your creativity and imagination. <Br /> Build your
          reputation right where collaboration and <Br /> engagement happens.
        </InfoText>
      </TextContainer>{" "}
      <div data-aos="fade-up">
        <Image src="/thePlatform/img-buildReputation.webp" alt="#" />{" "}
        <TabImage src="/thePlatform/img-buildReputation_t.webp" alt="#" />
        <MobileImage src="/thePlatform/img-buildReputation_m.webp" alt="#" />
      </div>
    </Wrapper>
  );
};

export default BuildYourReputation;
