import React from "react";
import {
  ColaborationContainer,
  Image,
  TextContainer,
} from "./Collaboration.styled";
import { Title, StyledText } from "../../../styles/Common.styled";

const Collaboration = () => {
  return (
    <ColaborationContainer>
      <TextContainer>
        <Title textcenter>
          1TM is a collaborative <br /> ecosystemfor <br /> creators and
          enthusiasts
        </Title>
        <StyledText textcenter>
          where everyone gets rewarded for their works and participation
        </StyledText>{" "}
      </TextContainer>
      <Image src="/collaboration.webp" alt="#" />
    </ColaborationContainer>
  );
};
export default Collaboration;
