import React from "react";

import { StyledContainer, Title, InfoText } from "../../styles/Common.styled";

import {
  Logo,
  NotDoingAloneWrapper,
  TitleContainer,
  Image,
} from "./NotDoingAlone.styled";

const NotDoingAlone = () => {
  return (
    <NotDoingAloneWrapper>
      <StyledContainer>
        <Logo src="/coolerMaster.svg" />
        <TitleContainer>
          <Title textCenter fontSize="34px" textShadow>
            We are not doing this alone
          </Title>
        </TitleContainer>
        <InfoText color="#fff" textCenter>
          Building the community of creators and enthusiasts !{" "}
        </InfoText>
        <InfoText color="#fff" textCenter>
          One by letting them build what they want, another by letting them
          create, <br /> collaborate, and make ideas happen
        </InfoText>
      </StyledContainer>
      <Image src="/tm.png" alt="#" />
    </NotDoingAloneWrapper>
  );
};

export default NotDoingAlone;
