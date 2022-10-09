import React from "react";
import {
  StyledContainer,
  StyledText,
  Tagline,
  TextStrokeColor,
} from "../../../styles/Common.styled";

import {
  StyledTextStrokeTagline,
  StyledImage,
  StyledOurMission,
  StyledOurMissionComponent,
} from "./OurMission.styled";

const OurMission = () => {
  return (
    <StyledContainer>
      <StyledOurMission align="center">
        <StyledOurMissionComponent>
          <Tagline>THE TEAM</Tagline>
          <TextStrokeColor>Our Mission</TextStrokeColor>
          <StyledTextStrokeTagline>
            Connecting Creativity and People, Making Ideas Happen!
          </StyledTextStrokeTagline>
          <StyledText textCenter>
            Our mission is to empower creators and enable collaborations across
            different verticals by incentivizing participation with community
            recognition and monetary rewards.
          </StyledText>
          <StyledText textCenter>
            At 1TM, we strive to bring people together around ideas and shared
            purposes. We empower creative minds by connecting them with
            like-minded people with different skills and backgrounds.
          </StyledText>
        </StyledOurMissionComponent>
        <StyledOurMissionComponent span={6}>
          <StyledImage src="/ourmission.svg" />
        </StyledOurMissionComponent>
      </StyledOurMission>
    </StyledContainer>
  );
};

export default OurMission;
