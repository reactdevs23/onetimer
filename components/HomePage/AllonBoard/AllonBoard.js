import React from "react";
import {
  StyledContainer,
  Tagline,
  TextStrokeColor,
} from "../../../styles/Common.styled";
import {
  Wrapper,
  Image,
  TextContainer,
  Text,
  ImageContainer,
  TabImage,
} from "./AllonBoard.styled.js";

const AllonBoard = () => {
  return (
    <Wrapper>
      <Image
        data-aos="fade-up "
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        src="/thePlatform/img-icons.webp"
        alt="#"
        className="webImage"
      />
      <ImageContainer
        data-aos="fade-up "
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        <TabImage
          src="/thePlatform/img-iconsTop_t.webp"
          alt="#"
          className="topImage"
        />
        <TabImage
          src="/thePlatform/img-iconsBottom_t.webp"
          alt="#"
          className="bottomImage"
        />
      </ImageContainer>
      <TextContainer>
        <Tagline textCenter>NO MATTER WHAT YOU CREATE</Tagline>
        <TextStrokeColor
          color="#12121A
"
          textCenter="center"
        >
          All onboard
        </TextStrokeColor>
        <Text>
          Bring your videos, podscast, designs on figma, 3D rendered prototoypes
          on sketchfab and matterport. Don’t mention your codes on github gists
          and slideshows on google drive, or NFTs from OpenSea.
        </Text>{" "}
        <Text>
          {" "}
          We handle rich media embeds from over 1,000 publishers. Transferring
          your work on other platforms has never been easier.{" "}
        </Text>
      </TextContainer>
    </Wrapper>
  );
};

export default AllonBoard;
