import React from "react";
import {
  ThemeVerseContainer,
  StyledText,
  Text,
  TitlesContainer,
  Wrapper,
  TextWrapper,
  ImageContainer,
  Image,
  TabImage,
  MobileImage,
  TextBox,
  TextBoxTitleAndIcon,
  Icon,
  TextBoxTitle,
  TextBoxText,
  TitleAndText,
  IconContainer,
  Slash,
} from "./ThemeVerse.styled";
import {
  Title,
  TextStrokeColor,
  Tagline,
  Center,
} from "../../../styles/Common.styled";

const ThemeVerse = () => {
  return (
    <ThemeVerseContainer>
      <Wrapper>
        <TextWrapper>
          <Center>
            <Tagline display="inline-block" textCenter noPadding>
              Hub FOR THEME-DRIVEN COLLABORATIONS
            </Tagline>
          </Center>
          <TitlesContainer>
            <Title lowerCase noPadding mobileTextCenter>
              theme
            </Title>
            <Slash src="thePlatform/icons/ic-slash.svg" alt="#" />
            <TextStrokeColor color="transparent" noPadding mobileTextCenter>
              verse
            </TextStrokeColor>
          </TitlesContainer>{" "}
          <Text>
            A theme driven collaboration hub built for passionate creators who
            want to connect and make an impact together. It is a universe where
            themes are brought to life by collaborative efforts of creators and
            support of enthusiast communities.
          </Text>
          <StyledText>
            A theme driven collaboration hub built for passionate creators who
            want to connect and make an impact together. It is a universe where
            themes are brought to life by collaborative efforts of creators and
            support of enthusiast communities.
          </StyledText>
        </TextWrapper>
      </Wrapper>
      <ImageContainer data-aos="fade-up">
        <Image
          src="/thePlatform/img-themeverse.webp"
          alt="#"
          className="webImage"
        />
        <TabImage
          src="/thePlatform/img-themeverse_t.webp"
          alt="#"
          className="tabImage"
        />{" "}
        <MobileImage
          src="/thePlatform/img-themeverse_m.webp"
          alt="#"
          className="mobileImage"
        />
        <TextBox>
          <TextBoxTitleAndIcon>
            <IconContainer>
              {" "}
              <Icon src="thePlatform/icons/ic-startSpace.svg" />
            </IconContainer>
            <TitleAndText>
              <TextBoxTitle>Start a Space</TextBoxTitle>
              <TextBoxText>
                Space is a place where a theme becomes projects. Use it to work
                with your team, or initiate a collective collaboration with your
                own creative theme.
              </TextBoxText>
              <TextBoxText className="seconText">
                Use it with your team or take submissions from the community,
                organize creative assets and folios into projects, launch a
                collection, or build an open marketplace right in your Sapce.{" "}
              </TextBoxText>
            </TitleAndText>
          </TextBoxTitleAndIcon>
        </TextBox>
      </ImageContainer>
    </ThemeVerseContainer>
  );
};

export default ThemeVerse;
