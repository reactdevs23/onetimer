import React from "react";
import { Title } from "../../../styles/Common.styled";
import {
  Wrapper,
  HeroText,
  TextContainer,
  Button,
} from "./LetsCreateTogether.styled";

const LetsCreateTogether = () => {
  return (
    <Wrapper>
      {" "}
      <TextContainer>
        <Title textCenter capitalize>
          Let’s create together!
        </Title>

        <HeroText fontWeight="300">
          Assemble a super team of people from various professions to complete
          great works across fields together!
        </HeroText>
      </TextContainer>
      <Button>Request an Early Access</Button>
    </Wrapper>
  );
};

export default LetsCreateTogether;
