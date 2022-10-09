import React from "react";
import {
  Center,
  Tagline,
  TextStrokeColor,
} from "../../../styles/Common.styled";
import { Wrapper, TextWrapper, Text } from "./CollaborativeEcosystem.styled";
const CollaborativeEcosystem = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Center mobileCenter>
          <Tagline mobileTextCenter display="inline-block">
            Built with WEB3.0
          </Tagline>
        </Center>
        <TextStrokeColor className="title" mobileTextCenter color="#12121A">
          Collaborative ecosystem
        </TextStrokeColor>
        <Text>
          A decentralized collaborative ecosystem for creators, enablers and
          enthusiasts, where people make ideas happen together alongside the
          collaborative community built around ideas.
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default CollaborativeEcosystem;
