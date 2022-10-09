import React from "react";

import {
  Tagline,
  TextStrokeColor,
  InfoText,
} from "../../../../styles/Common.styled";
import {
  StyledTeamContainer,
  OurBeliveText,
  MemberImage,
  TeamMembers,
  Positon,
  Name,
  TextureImage,
  TeamWrapper,
  SecondTextureImage,
  ThirdTextureImage,
} from "../Team.styled";
import CeoAndFounder from "./CeoAndFounder";

const TeamMember = () => {
  const teamInfo = [
    { img: "/team/Ray Lu.webp", name: "Ray Lu", position: "Project Manager" },
    {
      img: "/team/Eliza Chen.webp",
      name: "Eliza Chen",
      position: "Project Manager",
    },
    {
      img: "/team/Linus Hsieh.webp",
      name: "Linus Hsieh",
      position: "Design Lead",
    },
    {
      img: "/team/Carlos Arellano Casale.webp",
      name: "Carlos Arellano Casale",
      position: "Smart Contract Lead",
    },
    {
      img: "/team/Marc Gao.webp",
      name: "Marc Gao",
      position: "Frontend Lead",
    },
    {
      img: "/team/Frederik List.webp",
      name: "Frederik List",
      position: "Frontend Engineer ",
    },
    {
      img: "/team/Peter Nguyen.webp",
      name: "Peter Nguyen",
      position: "Project Manager",
    },
    { img: "/team/Tiny Wu.webp", name: "Tiny Wu", position: "Project Manager" },
    {
      img: "/team/Jayson Chen.webp",
      name: "Jayson Chen",
      position: "Project Manager",
    },
    {
      img: "/team/Shawn Hsu.webp",
      name: "Shawn Hsu",
      position: "Project Manager",
    },
    {
      img: "/team/Sidney Chao.png",
      name: "Sidney Chao",
      position: "Quality Assurance Lead",
    },
    {
      img: "/team/Pipi.webp",
      name: "Pipi",
      position: "Community Manager",
    },
    {
      img: "/team/Doc Gelato.webp",
      name: "Doc Gelato",
      position: "Project Manager",
    },
    { img: "/team/Queen M.webp", name: "Queen M", position: "Project Manager" },
    {
      img: "/team/Gammachan.webp",
      name: "Gammachan",
      position: "Project Manager",
    },
    {
      img: "/team/Don Moquixote.png",
      name: "Don Moquixote",
      position: "Community Manager",
    },
  ];
  return (
    <TeamWrapper>
      <StyledTeamContainer>
        <Tagline textCenter="center">MEET 1TMERS</Tagline>
        <TextStrokeColor textCenter="center">Dreamers & Doers</TextStrokeColor>
        <InfoText textCenter>
          A hub for creative projects and theme driven peer-to-peer
          collaboration
        </InfoText>
        <CeoAndFounder />
        <OurBeliveText>
          “We believe bringing people to a place where they can tell stories,
          build teams and collaborate can make more ideas happen.
        </OurBeliveText>
        <TeamMembers>
          {teamInfo.map((el, i) => (
            <div key={i}>
              <MemberImage src={el.img} />
              <Positon>{el.position}</Positon>
              <Name>{el.name}</Name>
            </div>
          ))}
          <SecondTextureImage src="bgtexture/bg-texture03.svg" alt="#" />{" "}
          <ThirdTextureImage src="bgtexture/bg-texture04.svg" alt="#" />
        </TeamMembers>
        <TextureImage src="bgtexture/bg-texture02.svg" alt="#" />
      </StyledTeamContainer>
    </TeamWrapper>
  );
};

export default TeamMember;
