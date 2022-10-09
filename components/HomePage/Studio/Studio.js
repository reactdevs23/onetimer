import React from "react";
import {
  Center,
  InfoText,
  Tagline,
  TextStrokeColor,
} from "../../../styles/Common.styled";

import {
  GridContainer,
  IconContainer,
  Icon,
  Image,
  TextContainer,
  Title,
  Text,
  TextWrapper,
  IconAndText,
  TitleAndText,
  Wrapper,
} from "./Studio.styled";

const Studio = () => {
  const data = [
    {
      icon: "/thePlatform/icons/ic-getMinted.svg",
      title: "Share your works and get minted",
      text: "Studio is the perfect place to showcase your portfolio. Present your works as creative assets, and let others mint them to support you! ",
    },
    {
      icon: "/thePlatform/icons/ic-share.svg",
      title: "Share your works and get minted",
      text: "Studio is the perfect place to showcase your portfolio. Present your works as creative assets, and let others mint them to support you! ",
    },
    {
      icon: "/thePlatform/icons/ic-inspiration.svg",
      title: "Share your works and get minted",
      text: "Studio is the perfect place to showcase your portfolio. Present your works as creative assets, and let others mint them to support you! ",
    },
  ];
  return (
    <Wrapper>
      <Center>
        <Tagline textCenter>Your Homebase</Tagline>
      </Center>
      <TextContainer>
        <TextStrokeColor color="#12121A" textCenter="center">
          Studio
        </TextStrokeColor>
        <InfoText textCenter>Studio is your homebase </InfoText>
        <InfoText textCenter paddingTop="0">
          where your profile, portfolio and contributions are showcased
          altogether.
        </InfoText>
        <InfoText textCenter>
          {" "}
          It is a live portfolio, a social profile and an inspiration archive
          for
        </InfoText>
        <InfoText textCenter paddingTop="0">
          {" "}
          creators, enablers, enthusiasts and brands.
        </InfoText>
      </TextContainer>

      <GridContainer>
        {" "}
        <Image
          data-aos="fade-right"
          src="/thePlatform/img-studio.webp"
          alt="#"
          className="webImage"
        />
        <Image
          data-aos="fade-right"
          src="/thePlatform/img-studio_t.webp"
          alt="#"
          className="tabImage"
        />
        <Image
          data-aos="fade-right"
          src="/thePlatform/img-studio_m.webp"
          alt="#"
          className="mobileImage"
        />
        <div>
          <TextWrapper
            data-aos="fade-up "
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            {data.map((el, i) => (
              <IconAndText key={i}>
                <IconContainer>
                  <Icon src={el.icon} />
                </IconContainer>
                <TitleAndText>
                  <Title>{el.title}</Title>
                  <Text>{el.text}</Text>
                </TitleAndText>
              </IconAndText>
            ))}
          </TextWrapper>
        </div>
      </GridContainer>
    </Wrapper>
  );
};

export default Studio;
