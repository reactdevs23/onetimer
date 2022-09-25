import React from "react";
import { StyledText, Title, StyledContainer } from "../../styles/Common.styled";
import {
  StyledCreatorFirst,
  StyledCreatorFirstCol,
  StyledHeading,
  StyledTextContainer,
  CreatorBottomImage,
  StyledCreatorContainer,
} from "./FirstAction.styled";

const FirstAction = () => {
  const data = [
    {
      heading: {
        text: "CREATORS",
        letterSpacing: "0.54em",
        tabvLspacing: "3.2px",
        textRight: true,
        smallDekstopSpacing: "9px",
        mobileLetterSpacing: "1.7px",
      },

      title: {
        text: "FIRST",
        letterSpacing: "13px",
        tabvLspacing: "3.2px",
        textRight: true,
      },
      text: [
        "Millions of creators, enablers, and enthusiasts around the world will spend countless hours on our platform to make their less-ordinary ideas happen. ",
        " So we move with urgency and focus. Because when we mess up,miss a deadline, or slow down, it impacts their projects. ",
        "The success of creators is the top priority for 1TM.",
      ],
    },
    {
      heading: {
        text: "A BIAS TOWARD",
        letterSpacing: "3.3px",
        tabvLspacing: "1.4px",
        smallDekstopSpacing: "-.7px",
        mobileLetterSpacing: ".1px",
      },

      title: { text: "Action", letterSpacing: "-.4px", tabvLspacing: "3.2px" },

      text: [
        "A relentless bias toward action pushes ideas forward.",
        " At 1TM, we break our big plan into small steps and take the first step right away. We act fast, bold but with a good strategic context built on a solid understanding of the problems, we are solving.  ",
        "We are here to make something happen.",
      ],
    },
  ];
  return (
    <StyledCreatorContainer>
      <StyledContainer paddingBottom="50px">
        <StyledCreatorFirst>
          {data.map((el, i) => (
            <StyledCreatorFirstCol key={i}>
              <div>
                <StyledHeading
                  letterSpacing={el.heading.letterSpacing}
                  tabvLspacing={el.heading.tabvLspacing}
                  smallDekstopSpacing={el.heading.smallDekstopSpacing}
                  mobileLetterSpacing={el.heading.mobileLetterSpacing}
                >
                  {el.heading.text}
                </StyledHeading>
                <Title
                  firstAction
                  letterSpacing={el.title.letterSpacing}
                  tabvLspacing={el.title.tabvLspacing}
                >
                  {el.title.text}
                </Title>
              </div>
              <StyledTextContainer>
                {el.text.map((text, index) => (
                  <StyledText key={index}>{text}</StyledText>
                ))}
              </StyledTextContainer>
            </StyledCreatorFirstCol>
          ))}
        </StyledCreatorFirst>
        <CreatorBottomImage src="/bgtexture/bg-texture01.svg"></CreatorBottomImage>
      </StyledContainer>
    </StyledCreatorContainer>
  );
};

export default FirstAction;
