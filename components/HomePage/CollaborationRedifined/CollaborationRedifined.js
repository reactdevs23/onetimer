import React from "react";
import {
  Center,
  InfoText,
  StyledContainer,
  Tagline,
  TextStrokeColor,
  Title,
} from "../../../styles/Common.styled";
import { TextContainer, Wrapper } from "./CollaborationRedifined.styled";
import ImageContainer from "./ImageContainer";

const CollaborationRedifined = () => {
  return (
    <>
      <Wrapper>
        <TextContainer>
          <Center>
            <Tagline
              textCenter
              dispaly="inline-block"
              // background="linear-gradient( 99.18deg,#28aee8 45.57%,#2875e8 50.1%,#ac5ba7 52.45% )"
            >
              1TM
            </Tagline>
          </Center>
          <TextStrokeColor
            color="#12121A"
            textCenter="center"
            mobileFont="32px"
          >
            Collaborationre <br /> defined
          </TextStrokeColor>
          <InfoText textCenter>
            1TM is a platform dedicated to enabling creations and
            collaborations, where creative and passionate people can share and
            discover new ideas, join in the making and get a team to make their
            ideas happen through collaboration.
          </InfoText>
          <InfoText textCenter>
            It is a place for creators to build their visions. A place for
            enablers to back those ideas with resources. And a place that allows
            enthusiasts to become early adopters and improve upon these ideas.
            Where creative themes turn into collective projects.{" "}
          </InfoText>
        </TextContainer>
      </Wrapper>
      <ImageContainer />
    </>
  );
};

export default CollaborationRedifined;
