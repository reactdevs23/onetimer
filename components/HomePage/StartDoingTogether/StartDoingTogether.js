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
  Br,
  TabImage,
} from "./StartDoingTogether.styled";

const StartDoingTogether = () => {
  return (
    <StyledContainer>
      <Wrapper>
        <div data-aos="fade-up">
          <Image src="/thePlatform/img-doingTogether.webp" alt="#" />{" "}
          <TabImage src="/thePlatform/img-doingTogether-t.webp" alt="#" />
        </div>
        <TextContainer
          data-aos="fade-up "
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <Center mobileCenter>
            {" "}
            <Tagline display="inline-block" mobileTextCenter>
              STOP DREAMING ALONE
            </Tagline>
          </Center>
          <TextStrokeColor
            color="#12121A
"
            mobileTextCenter
          >
            Start doing <br /> together
          </TextStrokeColor>
          <InfoText mobileTextCenter paddingTop="25px">
            No idea flourish at its full by lonely geniuses. <br /> Connect with
            like-minded people. Start doing together.{" "}
          </InfoText>
        </TextContainer>
      </Wrapper>
    </StyledContainer>
  );
};

export default StartDoingTogether;
